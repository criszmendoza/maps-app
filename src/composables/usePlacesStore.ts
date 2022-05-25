import { useStore } from "vuex"
import { StateInterface } from '@/store/index';
import { computed, onMounted,  } from "vue";

const usePlacesStore = () => {
	const store = useStore<StateInterface>()

	onMounted(()=>{
		if (!store.getters['places/isUserLocationReady']) {
			store.dispatch('places/getInitialLocation')
		}
	})


	return {
		isLoading: computed(()=>store.state.places.isLoading),
		userLocation: computed(()=>store.state.places.userLocation),

		isUserLocationReady: computed(() => store.getters['places/isUserLocationReady']),

		searchPlacesByTerm: (query:string)=> store.dispatch('places/searchPlacesByTerm', query)
	}
}

export default usePlacesStore