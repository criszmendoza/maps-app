import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3ptZW5kb3phIiwiYSI6ImNsM2trZGJwbjAwNHUzbXBiNXR1ZnQ5MWgifQ.kgyIIskUWEP1g-qf5IRd9w';

if (!navigator.geolocation) {
	throw new Error('Tu navegador no soporta el Geolocation')
}

createApp(App).use(store).use(router).mount('#app')
