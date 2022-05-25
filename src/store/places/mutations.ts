import { Feature } from '@/interfaces/places'
import { MutationTree } from 'vuex'
import { PlacesState } from './state'

const mutation: MutationTree<PlacesState> = {
	setLngLat(state: PlacesState, coords: GeolocationCoordinates){
		const {latitude, longitude} = coords
		state.userLocation = [longitude, latitude]
		state.isLoading = false
	},
	setIsLoadingPlaces(state:PlacesState){
		state.isLoadingPlaces = true
	},
	setPlaces(state:PlacesState, places: Feature[]){
		state.places = places
		state.isLoadingPlaces = false
	}
}

export default mutation