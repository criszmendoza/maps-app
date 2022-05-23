<template>
	<MapView></MapView>
</template>

<script lang="ts">
import MapView from '@/components/map-view/MapView.vue';
import usePlacesStore from '@/composables/usePlacesStore';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HomeView',
	components:{
		MapView
	},
	setup(){
		usePlacesStore()
	}
});
</script>
