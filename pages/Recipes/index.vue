<template>
	<div class="container">
		<section class="recipes">
			<Recipe v-for="(recipe, index) in data" :key="index" :image="recipe.image" :title="recipe.title" :description="recipe.description" :id="recipe.id">
			</Recipe>
		</section>
	</div>
</template>

<script>
import Recipe from '@/components/Recipe.vue';
import axios from 'axios';
export default {
	components: { Recipe },

	data() {
		return {
			data: {},
		};
	},
	asyncData(context) {
		return axios.get(`http://localhost:3001/recipes/.json`).then(res => {
			console.log(res.data);
			return { data: res.data };
		});
	},
};
</script>

<style scoped>
.recipes {
	display: flex;
	flex: row wrap;
	justify-content: center;
	align-content: center;
}
</style>
