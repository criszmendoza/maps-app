<template>
	<button class="btn btn-primary" @click="myLocationClicked" v-if="isBtnReady">Ir a mi ubicación</button>
</template>

<script lang='ts'>
import useMapStore from '@/composables/useMapStore';
import usePlacesStore from '@/composables/usePlacesStore';
import { computed, defineComponent } from 'vue';

export default defineComponent({
	name: 'MyLocationBtn',
	setup(){
		const { userLocation, isUserLocationReady } = usePlacesStore()
		const { map, isMapReady } = useMapStore()
		return{
			isBtnReady: computed<boolean>(()=> isUserLocationReady.value && isMapReady.value),
			myLocationClicked(){
				map.value?.flyTo({
					center: userLocation.value,
					zoom: 15
				})
			}
		}
	}

})
</script>

<style scoped>
button{
	position: fixed;
	top: 30px;
	right: 30px;
}

</style>