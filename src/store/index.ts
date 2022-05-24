import { createStore } from 'vuex'
import { MapState } from './map/state';
import placesModule from './places/index'
import { PlacesState } from './places/state';
import mapModule from './map/index';

export interface StateInterface {
	places: PlacesState,
	map: MapState
}

export default createStore <StateInterface>({
	modules: {
		places: placesModule,
		map: mapModule
	}
})
