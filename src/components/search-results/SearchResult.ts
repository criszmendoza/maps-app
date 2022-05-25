import useMapStore from '@/composables/useMapStore';
import { defineComponent, ref, watch } from 'vue';
import usePlacesStore from '../../composables/usePlacesStore';
import { Feature } from '../../interfaces/places';

export default defineComponent({
	name: 'SearchResult',
	components:{},
	setup() {

		const { places,  isLoadingPlaces, userLocation} = usePlacesStore()
		const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore()
		const activePlace = ref('')
		

		watch(places, (newPlaces)=>{
			setPlaceMarkers(newPlaces)
		})


		return { 
			places,  
			isLoadingPlaces,
			activePlace,

			onPlaceClicked(place:Feature){

				activePlace.value = place.id
				const [lng, lat ] = place.center

				map.value?.flyTo({
					center: [lng, lat],
					zoom:14
				})
			},
			getRouteDirections(place:Feature){
				if (!userLocation.value) return

				const [lng, lat ] = place.center
				const [startLng, startLat] = userLocation.value

				const start =[startLng, startLat]
				const end = [lng, lat]

				getRouteBetweenPoints(start, end)

			}
		}
	},
})