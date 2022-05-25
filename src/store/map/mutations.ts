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
	}
}

export default mutation