<template>
	<div class="recipe">
		<div class="item">
			<h1>{{ data.title }}</h1>
			<img :src="data.image" alt="" srcset="">
			<h2>{{ data.description }}</h2>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
export default {
	data: function() {
		return {
			data: {}
		};
	},
	created: function() {
		console.log('created');
	},
	// https://nuxtjs.org/api/context/
	asyncData(context) {
		return axios
			.get(`http://localhost:3001/recipes/${context.params.id}`)
			.then(res => {
				return { data: res.data };
			});
	}
};
</script>
<style scoped>
.recipe {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 20px;
	background: #2b2b2b;
	height: 80vh;
}
.item {
	text-align: center;
	padding: 20px;
	margin: 20px;
}
h1,
h2 {
	padding: 20px;
	color: #fbfbfb;
}
img {
	height: 400px;
	width: 600px;
}
</style>
