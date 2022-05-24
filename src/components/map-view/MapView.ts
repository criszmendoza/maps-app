import usePlacesStore from '@/composables/usePlacesStore';
import { defineComponent, onMounted, ref, watch } from 'vue';
import mapboxgl from 'mapbox-gl'

export default defineComponent({
	name: 'MapView',
	setup(){
		const {userLocation, isUserLocationReady} = usePlacesStore()
		const mapElement = ref<HTMLDivElement>()

		const initMap = async()=>{

			if (!mapElement.value || !userLocation.value) 
				throw new Error("Div element ó user location no existen");

			await Promise.resolve()

			return new mapboxgl.Map({
				container: mapElement.value, // container ID
				style: 'mapbox://styles/mapbox/streets-v11', // style URL
				center: userLocation.value, // starting position [lng, lat]
				zoom: 15 // starting zoom
			});
		}

		onMounted(()=>{
			if (isUserLocationReady.value) return initMap()

			console.log('No tengo localización aún');
			
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