import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from '../index'

const actions: ActionTree<PlacesState, StateInterface> = {
	async getInitialLocation({ commit }){
		// TODO: colocar loading

		navigator.geolocation.getCurrentPosition(
			({ coords })=> commit('setLngLat', coords),(error) => console.log(error)
		)
	}
}

export default actions