const pkg = require('./package')
let base = '/';
if (process.env.NODE_ENV == 'dev') {
	base = '/'
	console.log('dev')
}
if (process.env.NODE_ENV == 'prod') {
	console.log('production');
	base = '/VueRecipesSsr/';
}
if (process.env.NODE_ENV == 'test') {
	base = '/dist/';
	console.log('test');
}
module.exports = {
	mode: 'universal',
	router: {
		base: base,
	},
	env: {
		baseUrl: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
	},
	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#FFFFFF' },

	/*
	** Global CSS
	*/
	css: [
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
		'bootstrap-vue/nuxt',
	],

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {

		}
	},
	generate: {
		routes: function () {
			return new Promise((resolve, reject) => {

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
			}).then((res) => {
				return res.data.map((recipe) => {
					console.log(recipe);

					return  base + 'recipes/' + recipe.id
				})
			})
		}
	}
}
