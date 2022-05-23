import usePlacesStore from '@/composables/usePlacesStore';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'MapView',
	setup(){
		const {isLoading, userLocation, isUserLocationReady} = usePlacesStore()

		return {
			isLoading, 
			userLocation,
			isUserLocationReady
		}
	}

})