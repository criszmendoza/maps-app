<script lang="ts" src='./SearchResult.ts'/>

<template>

<div v-if="isLoadingPlaces" class="alert alert-primary text-center">
	<h5>Cargando</h5>
	<span>Espere por favor...</span>
</div>

<ul class="list-group mt-3" v-else-if="places.length > 0">
	<li 
		class="list-group-item list-group-item-action text-start"
		:class="{'active': activePlace === place.id}" 
		v-for="place in places" 
		:key='place.id' 
		@click="onPlaceClicked(place)">
		<h5>{{ place.text_es }}</h5>
		<p>{{ place.place_name_es }}</p>
		<div class="text-end">
			<button 
			class="btn btn-sm" 
			:class="(activePlace === place.id ? 'btn-outline-light' : 'btn-outline-primary')" 
			>
			Direcciones</button>
		</div>
	</li>
</ul>
	
</template>

<style scoped>
li{
	cursor: pointer;
}
h5{
	font-size: 15px !important;
}
p{
	font-size: 10px;
}
</style>