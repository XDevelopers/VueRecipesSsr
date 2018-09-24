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
export default {
	components: { Recipe },

	data() {
		return {
			data: this.asyncData,
		};
	},
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
					],
				});
			}, 600);
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
