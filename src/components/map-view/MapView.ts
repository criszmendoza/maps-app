import usePlacesStore from '@/composables/usePlacesStore';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
	name: 'MapView',
	setup(){
		const mapElement = ref<HTMLDivElement>()
		
		onMounted(()=>{
			console.log(mapElement.value);
		})
		
		return {
			...usePlacesStore(),
			mapElement
		}
	}

})