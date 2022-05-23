export interface ExampleStateInterface {
	prop: boolean
}

const state = ():ExampleStateInterface => {
	return {
		prop: true
	}
}

export default state