import { ActionTree } from "vuex"
import { PlacesState } from "./state"
import { StateInterface } from '../index'
import searchApi from "@/apis/searchApi"
import { Feature, PlacesResponse } from '../../interfaces/places'

const actions: ActionTree<PlacesState, StateInterface> = {
	getInitialLocation({ commit }){

		navigator.geolocation.getCurrentPosition(
			({ coords })=> commit('setLngLat', coords),(error) => console.log(error)
		)
	},
	async searchPlacesByTerm({ commit, state }, query:string): Promise<Feature[]>{

		if (query.length === 0) {
			commit('setPlaces', [])
			return []
		}
		if (!state.userLocation) throw new Error("No hay ubicación del usuario");

		commit('setIsLoadingPlaces')
		
		try {
			const { data } = await searchApi.get<PlacesResponse>(`/${query}.json`,{
				params:{
					proximity: state.userLocation?.join(',')
				}
			})

			commit('setPlaces', data.features)
			return data.features
		} catch (error) {
			console.log(error)
			return []
		}	
	}
}

export default actions