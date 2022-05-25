import { defineComponent } from 'vue'
import usePlacesStore from '../../composables/usePlacesStore';

export default defineComponent({
	name: 'SearchResult',
	components:{},
	setup() {

		const { places,  isLoadingPlaces} = usePlacesStore()


		return { 
			places,  
			isLoadingPlaces
		}
	},
})