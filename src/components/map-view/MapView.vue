<script lang="ts" src='./MapView.ts'/>
<template>
	<div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
		<div class="text-center">
			<h3>Espere por favor</h3>
			<span>Localizando...</span>
		</div>
	</div>

	<div v-show="isUserLocationReady" class="map-container" ref="mapElement">

	</div>


</template>

<style scoped>

.loading-map{
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100%;
	color: white;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 99;

}

.map-container{
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100%;
}

</style>