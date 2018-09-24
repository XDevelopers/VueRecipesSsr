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
		baseUrl: process.env.BASE_URL || 'http://localhost:3000'
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
	}
}
