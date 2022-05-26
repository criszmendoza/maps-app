<template>
	<div class="trip-container row" v-if="(distance && duration )">
		<div class="col">Distancia <br><strong>{{ distance }} kms</strong></div>
		<div class="col">Duración <br><strong>{{ duration }} minutos</strong></div>
	</div>
  
</template>

<script lang="ts">
import useMapStore from '@/composables/useMapStore'
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'TripDetails',
	setup() {
		
		const { distance, duration } = useMapStore()

		return{
			distance, 
			duration 
		}
	},
})
</script>

<style scoped>

.trip-container{
	padding: 10px;
	position: fixed;
	bottom: 30px;
	left: 40px;
	border-radius: 10px;
	background-color: white;
	box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
	font-size: 16px;
	width: 350px;
	text-align: center;
}

strong{
	color: #42b983;
}

</style>

