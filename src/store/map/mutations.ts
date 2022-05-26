import { MutationTree } from 'vuex'
import { MapState } from './state'
import mapboxgl from 'mapbox-gl';
import { Feature } from '../../interfaces/places';

const mutation: MutationTree<MapState> = {
	setMap(state, map: mapboxgl.Map){
		state.map = map
	},
	setPlaceMarkers(state, places:Feature[]){

		
		// Borrar marcadores
		state.markers.forEach(mark => mark.remove())
		state.markers = []

		if (!state.map) return

		// Crear nuevos marcadores
		for (const place of places) {

			const [lng, lat] = place.center

			const popup = new mapboxgl.Popup()
				.setLngLat([lng, lat])
				.setHTML(`
					<h4>${place.text_es}</h4>
					<p>${place.place_name_es}</p>
				`)

			const marker = new mapboxgl.Marker()
				.setLngLat([lng, lat])
				.setPopup(popup)
				.addTo(state.map)

			state.markers.push(marker)
			
		}

		if (state.map.getLayer('RouteString')) {
			state.map.removeLayer('RouteString')
			state.map.removeSource('RouteString')
			state.distance = undefined
			state.duration = undefined
		}
	},
	setRoutesPolyline(state, coords: number[][]){		

		const start = coords[0]
		const end = coords[coords.length - 1]

		// Definir los bounds

		const bounds = new mapboxgl.LngLatBounds(
			[start[0], start[1]],
			[end[0], end[1]],
		)

		for (const coord of coords) {
			const newCoord: [number, number] = [coord[0], coord[1]]
			bounds.extend(newCoord)
		}

		state.map?.fitBounds(bounds,{ padding: 200})

		const sourceData: mapboxgl.AnySourceData = {
			type: 'geojson',
			data:{
				type: 'FeatureCollection',
				features: [
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'LineString',
							coordinates: coords
						}
					}
				]
			}
		}

		if (state.map?.getLayer('RouteString')) {
			state.map.removeLayer('RouteString')
			state.map.removeSource('RouteString')
		}

		state.map?.addSource('RouteString', sourceData)

		state.map?.addLayer({
			id: 'RouteString',
			type:'line',
			source: 'RouteString',
			layout:{
				"line-cap":'round',
				"line-join": 'round'
			},
			paint:{
				'line-color': 'black',
				'line-width': 3
			}

		})
	},
	setDistanceDuraton(state, {distance, duration}: {distance: number, duration: number}){

		state.distance = Math.round((distance/1000) * 100) / 100
		state.duration = Math.floor(duration/60)
	}
}

export default mutation