import { MutationTree } from 'vuex'
import { PlacesState } from './state'

const mutation: MutationTree<PlacesState> = {
	setLngLat(state: PlacesState, coords: GeolocationCoordinates){
		const {latitude, longitude} = coords
		state.userLocation = [longitude, latitude]
		state.isLoading = false
	}
}

export default mutation