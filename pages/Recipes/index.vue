<template>
	<div class="container">
		<div class="recipeContainer">
		<div class="addRecipe" style="white-space: nowrap; margin: 2em;" >
			<v-btn @click="$store.commit('change')" color="indigo" dark>
        		<v-icon dark>backup</v-icon>
			<p class="dark" style="align-self: center; margin: 0; font-size: large;padding-left: 5px"> new recipe</p>
      		</v-btn>
		</div>
		</div>
		<section class="recipes">
			<Recipe v-for="(recipe, index) in data" :key="index" :image="recipe.image" :title="recipe.title" :description="recipe.description" :id="recipe.id">
			</Recipe>
		</section>
		<Form @submit='fetch'></Form>
	</div>
</template>

<script>
import Recipe from '@/components/Recipe.vue';
import Form from '@/components/Form.vue';
import axios from 'axios';
export default {
	components: { Recipe, Form },

	data() {
		return {
			drawer: false,
			data: {},
		};
	},
	asyncData(context) {
		return axios.get(`http://localhost:3001/recipes/.json`).then(res => {
			return { data: res.data };
		});
	},
	methods: {
		fetch(data) {
			this.data = data.data;
		}
	}
};
</script>

<style scoped>
.recipes {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-content: center;
}
.recipeContainer {
	display: flex;
	justify-content: center;
	flex-flow: row wrap;
}
</style>
