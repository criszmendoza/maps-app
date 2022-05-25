import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from '../index'
import searchApi from "@/apis/searchApi";
import { PlacesResponse } from '../../interfaces/places';

const actions: ActionTree<PlacesState, StateInterface> = {
	getInitialLocation({ commit }){
		// TODO: colocar loading

		navigator.geolocation.getCurrentPosition(
			({ coords })=> commit('setLngLat', coords),(error) => console.log(error)
		)
	},
	async searchPlacesByTerm({ state }, query:string){
		console.log(`vuex: ${query}`);

		const { data } = await searchApi.get<PlacesResponse>(`/${query}.json`,{
			params:{
				proximity: state.userLocation?.join(',')
			}
		})

		console.log(data.features);
		
		
	}
}

export default actions