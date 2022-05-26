<template>
	<MapView/>
	<MyLocationBtn/>
	<SearchBar/>
	<TripDetailsVue/>
</template>

<script lang="ts">
import MapView from '@/components/map-view/MapView.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import TripDetailsVue from '@/components/trip-details/TripDetails.vue';
import usePlacesStore from '@/composables/usePlacesStore';
import { defineComponent } from 'vue';



export default defineComponent({
	name: 'HomeView',
	components:{
		MapView,
		MyLocationBtn,
		SearchBar,
		TripDetailsVue
	},
	setup(){
		usePlacesStore()
	}
});
</script>
