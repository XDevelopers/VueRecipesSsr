module.exports = {
	"root": true,
	"env": {
		browser: true,
		node: true
	},
	"parserOptions": {
		"ecmaVersion": 6,
		"parser": 'babel-eslint',
	},
	"extends": [
		"eslint:recommended",
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
		"plugin:vue/recommended",
		"plugin:prettier/recommended"
	],
	// required to lint *.vue files
	"plugins": [
		'vue'
	],
	// add your custom rules here
	"rules": {
		"no-console": "off",
		"vue/max-attributes-per-line": "off",
		"vue/html-indent": ["error", 'tab'],
		// added vue/no-unused-components rule because it works incorrectly..
		"vue/no-unused-components": "off",
		"prettier/prettier": ["error", { "singleQuote": true, "printWidth": 80 }],
		"quotes": ["error", "single"],

	}
}
