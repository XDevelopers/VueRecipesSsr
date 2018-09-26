const pkg = require('./package')
const axios = require('axios')
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
		'@nuxtjs/axios',
		'@nuxtjs/vuetify',
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
			return axios.get('http://localhost:3001/recipes/.json')
				.then((res) => {
					console.log(res, 'res');
					console.log(res.data[0].title, 'res.data[0].title');

					return res.data.map((recipe) => {
						console.log(recipe.title, 'title');
						console.log(recipe.id, 'id');


						return `/recipes/${recipe.id}`;
					})
				})
		}
	}
}
