import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from '../index'

const actions: ActionTree<PlacesState, StateInterface> = {
	getInitialLocation({ commit }){
		// TODO: colocar loading

		navigator.geolocation.getCurrentPosition(
			({ coords })=> commit('setLngLat', coords),(error) => console.log(error)
		)
	},
	async searchPlacesByTerm(_, query:string){
		console.log(`vuex: ${query}`);
		
	}
}

export default actions