import { createStore } from 'vuex'
import exampleModule from './modules-template/index'
import { ExampleStateInterface } from './modules-template/state'

export interface StateInterface {
	example: ExampleStateInterface
}

export default createStore <StateInterface>({
	modules: {
		example: exampleModule
	}
})
