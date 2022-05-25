import useMapStore from '@/composables/useMapStore';
import { defineComponent, ref, watch } from 'vue';
import usePlacesStore from '../../composables/usePlacesStore';
import { Feature } from '../../interfaces/places';

export default defineComponent({
	name: 'SearchResult',
	components:{},
	setup() {

		const { places,  isLoadingPlaces} = usePlacesStore()
		const { map, setPlaceMarkers } = useMapStore()
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
			}
		}
	},
})