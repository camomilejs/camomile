require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"xo",
		"plugin:unicorn/recommended",
		"plugin:no-use-extend-native/recommended",
		"plugin:promise/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:node/recommended",
		"plugin:eslint-comments/recommended",
		"prettier",
	],
	parserOptions: {
		ecmaVersion: "latest",
	},
	env: {
		node: true,
	},
	overrides: [
		{
			files: "src/*.ts",
			extends: [
				"eslint:recommended",
				"xo",
				"xo-typescript",
				"plugin:unicorn/recommended",
				"plugin:no-use-extend-native/recommended",
				"plugin:promise/recommended",
				"plugin:import/recommended",
				"plugin:import/typescript",
				"plugin:node/recommended",
				"plugin:eslint-comments/recommended",
				"prettier",
			],
		},
	],
};
