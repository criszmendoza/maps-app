import { ActionTree } from "vuex";
import { MapState } from "./state";
import { StateInterface } from '../index'
import directionApi from "@/apis/directionsApi";
import { DirectionsResponse } from '../../interfaces/directions';

export type LngLat = number[]

const actions: ActionTree<MapState, StateInterface> = {
	async getRouteBetweenPoints({ commit }, {start, end}: {start:LngLat, end:LngLat}){
		
		const resp = await directionApi.get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`)
		if (resp.data.code === 'NoRoute') {
			console.log([]);
		}else{
			commit('setDistanceDuraton', {
				distance: resp.data.routes[0].distance,
				duration: resp.data.routes[0].duration
			})
			commit('setRoutesPolyline', resp.data.routes[0].geometry.coordinates)
		}
		
	}
}

export default actions