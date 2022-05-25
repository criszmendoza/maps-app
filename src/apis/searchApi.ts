import axios from "axios";

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
	params:{
		limit: 4,
		language: 'es',
		access_token: 'pk.eyJ1IjoiY3Jpc3ptZW5kb3phIiwiYSI6ImNsM2trZGJwbjAwNHUzbXBiNXR1ZnQ5MWgifQ.kgyIIskUWEP1g-qf5IRd9w'
	}
})

export default searchApi