import axios from 'axios';

const directionApi = axios.create({
	baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
	params:{
		access_token: 'pk.eyJ1IjoiY3Jpc3ptZW5kb3phIiwiYSI6ImNsM2trZGJwbjAwNHUzbXBiNXR1ZnQ5MWgifQ.kgyIIskUWEP1g-qf5IRd9w',
		steps:false,
		overview: 'simplified',
		geometries: 'geojson',
		alternatives: false
	}
})


export default directionApi