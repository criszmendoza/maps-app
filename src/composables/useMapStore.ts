import { useStore } from "vuex"
import { computed } from 'vue';
import { StateInterface } from "@/store";
import mapboxgl from 'mapbox-gl';


const useMapStore = () => {
	const store = useStore<StateInterface>()

	return {
		map: computed(()=> store.state.map.map),
		markers: computed(()=> store.state.map.markers),
		distance: computed(()=> store.state.map.distance),
		duration: computed(()=> store.state.map.duration),

		isMapReady: computed(()=>store.getters['map/isMapReady']),

		setMap: (map: mapboxgl.Map) => store.commit('map/setMap', map)
	}
}

export default useMapStore