<template>
	<div class="container">
		<div class="recipeContainer">
			<div class="addRecipe" style="white-space: nowrap; margin: 2em;">
				<v-btn color="indigo" dark @click="$store.commit('change')">
					<v-icon dark>backup</v-icon>
					<p class="dark" style="align-self: center; margin: 0; font-size: large;padding-left: 5px"> new recipe</p>
				</v-btn>
			</div>
		</div>
		<section class="recipes">
			<Recipe v-for="(recipe, index) in data" :id="recipe.id" :key="index" :image="recipe.image" :title="recipe.title" :description="recipe.description" @delete="fetch" />
		</section>
		<Form @submit="fetch" />
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
			data: {}
		};
	},
	asyncData() {
		return axios.get('http://localhost:3001/recipes/.json').then(res => {
			return { data: res.data };
		});
	},
	methods: {
		fetch(data) {
			console.log(data);

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
