<template>
	<div class="recipe">
		<h1 style="color: #343a40;">{{data.title}}</h1>
		<img :src="data.image" alt="" srcset="">
		<h2 style="color: #343a40;">{{data.description}}</h2>
	</div>
</template>
<script>
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
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					data: [
						{
							id: '1',
							title: 'Chicken Tikka Masala',
							description: 'Super tasty chicken',
							image:
								'https://img.delicious.com.au/tipUVl-4/h506-w759-cfill/del/2015/10/chicken-tikka-masala-skewers-with-coriander-dressing-13113-1.jpg',
						},
						{
							id: '2',
							title: 'Taco',
							description: 'Super tasty taco',
							image:
								'http://d2gtpjxvvd720b.cloudfront.net/system/recipe/image/992/default_hg-i-hungry-spaghetti-tacos.jpg',
						},
						{
							id: '3',
							title: 'Chicken Nuggets',
							description: 'Super tasty chicken nuggets',
							image: 'https://5.imimg.com/data5/BE/JR/GLADMIN-40426501/chicken-nuggets-500x500.png',
						},
						{
							id: '4',
							title: 'Bacon Wrapped Chicken',
							description: 'Super tasty chicken with bacon',
							image:
								'https://www.ditchthecarbs.com/wp-content/uploads/2014/02/rsz_bacon_covered_chicken_nuggets-2.jpg',
						},
					].find(el => {
						return el.id === context.params.id;
					}),
				});
			}, 600);
		}).then(res => {
			console.log(res);
			return { data: res.data };
		});
	},
};
</script>
<style scoped>
.recipe {
	display: flex;
	flex-direction: column;
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

