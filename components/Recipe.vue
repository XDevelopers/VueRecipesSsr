<template>
	<nuxt-link :to="'/recipes/' + id">
		<div class="recipe">
			<div class="thumbnail" :style="{'backgroundImage': 'url(' + image + ')'}">
			</div>
			<h3>{{title}}</h3>
			<p>{{description}}</p>
		</div>
	</nuxt-link>
</template>
<script>
export default {
	name: 'Recipe',
	props: {
		id: String,
		image: String,
		title: String,
		description: String,
	},
	data() {
		return {};
	},
};
</script>
<style scoped>
.recipe {
	box-sizing: border-box;
	border: 1px solid #2b2b2b;
	box-shadow: 2px 5px 5px #505050;
	width: 300px;
	height: 350px;
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
