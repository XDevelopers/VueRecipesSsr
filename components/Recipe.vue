<template>
	<nuxt-link :to="'/recipes/' + id">
		<div class="recipe">
			<div class="thumbnail" :style="{'backgroundImage': 'url(' + image + ')'}" />
			<h3>{{ title }}</h3>
			<p>{{ description }}</p>
			<b-button variant="danger" @click="deleteMe($event, id)"> Delete me</b-button>
		</div>
	</nuxt-link>
</template>
<script>
import axios from 'axios';
export default {
	name: 'Recipe',
	props: {
		id: {
			type: String,
			default: ''
		},
		image: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		},
		description: {
			type: String,
			default: ''
		}
	},
	data() {
		return {};
	},
	methods: {
		deleteMe: function($e, id) {
			$e.preventDefault();
			console.log(id);
			axios
				.post(`http://localhost:3001/recipes/${id}/delete`, {
					id: id
				})
				.then(res => {
					this.$emit('delete', res);
				});
		}
	}
};
</script>
<style scoped>
.recipe {
	border: 1px solid #2b2b2b;
	box-shadow: 2px 5px 5px #505050;
	width: 300px;
	height: 400px;
	padding: 0.5rem;
	margin: 0.5rem;
	text-align: center;
}
h3 {
	padding: 10px;
}
.thumbnail {
	background-position: center;
	background-size: cover;
	height: 200px;
	width: 100%;
}
a {
	text-decoration: none;
	color: #2b2b2b;
}
</style>
