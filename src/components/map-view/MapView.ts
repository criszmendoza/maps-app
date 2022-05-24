import usePlacesStore from '@/composables/usePlacesStore';
import { defineComponent, onMounted, ref, watch } from 'vue';
import mapboxgl from 'mapbox-gl'
import useMapStore from '../../composables/useMapStore';

export default defineComponent({
	name: 'MapView',
	setup(){
		const {userLocation, isUserLocationReady} = usePlacesStore()
		const {  setMap } = useMapStore()
		const mapElement = ref<HTMLDivElement>()

		const initMap = async()=>{

			if (!mapElement.value || !userLocation.value) 
				throw new Error("Div element ó user location no existen");

			await Promise.resolve()

			const map = new mapboxgl.Map({
				container: mapElement.value, // container ID
				style: 'mapbox://styles/mapbox/light-v10', // style URL
				center: userLocation.value, // starting position [lng, lat]
				zoom: 15 // starting zoom
			});

			const myLocationPopup = new mapboxgl.Popup()
				.setLngLat(userLocation.value)
				.setHTML(`
					<h4>Aquí estoy</h4>
					<p>${ userLocation.value }</p>
				`)

			new mapboxgl.Marker()
				.setLngLat(userLocation.value)
				.setPopup(myLocationPopup)
				.addTo(map)

			setMap(map)
		}

		onMounted(()=>{
			if (isUserLocationReady.value) return initMap()			
		})

		watch(isUserLocationReady,(newValue)=>{
			if(newValue) return initMap()
		})
		
		return {
			mapElement,
			userLocation,
			isUserLocationReady
		}
	}

})