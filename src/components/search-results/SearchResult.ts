import useMapStore from '@/composables/useMapStore';
import { defineComponent, ref } from 'vue'
import usePlacesStore from '../../composables/usePlacesStore';
import { Feature } from '../../interfaces/places';

export default defineComponent({
	name: 'SearchResult',
	components:{},
	setup() {

		const { places,  isLoadingPlaces} = usePlacesStore()
		const { map } = useMapStore()
		const activePlace = ref('')


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