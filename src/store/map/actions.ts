import { ActionTree } from "vuex";
import { MapState } from "./state";
import { StateInterface } from '../index'
import directionApi from "@/apis/directionsApi";
import { DirectionsResponse } from '../../interfaces/directions';

export type LngLat = number[]

const actions: ActionTree<MapState, StateInterface> = {
	async getRouteBetweenPoints(_, {start, end}: {start:LngLat, end:LngLat}){
		
		const resp = await directionApi.get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`)
		if (resp.data.code === 'NoRoute') {
			console.log([]);
		}else{
			console.log(resp.data.routes[0].geometry);
		}
		
	}
}

export default actions