<template>
	<div class="recipe">
		<h1 style="color: #343a40;">{{data.title}}</h1>
		<img :src="data.image" alt="" srcset="">
		<h2 style="color: #343a40;">{{data.description}}</h2>
	</div>
</template>
<script>
import axios from 'axios';
export default {
	data: function() {
		return {
			data: {},
		};
	},
	created: function() {
		console.log('created');
	},
	// https://nuxtjs.org/api/context/
	asyncData(context) {
		return axios.get(`http://localhost:3001/recipes/${context.params.id}`).then(res => {
			return { data: res.data };
		});
	},
};
</script>
<style scoped>
.recipe {
	align-items: center;
	justify-items: center;
	margin: 20px;
}
h1,
h2 {
	padding: 20px;
}
img {
	height: 400px;
	width: 600px;
}
</style>

