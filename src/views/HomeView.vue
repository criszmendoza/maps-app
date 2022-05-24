<template>
	<MapView/>
	<MyLocationBtnVue/>
</template>

<script lang="ts">
import MapView from '@/components/map-view/MapView.vue';
import MyLocationBtnVue from '@/components/my-location-btn/MyLocationBtn.vue';
import usePlacesStore from '@/composables/usePlacesStore';
import { defineComponent } from 'vue';


export default defineComponent({
	name: 'HomeView',
	components:{
		MapView,
		MyLocationBtnVue,
	},
	setup(){
		usePlacesStore()
	}
});
</script>
