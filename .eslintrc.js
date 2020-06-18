module.exports = {
	env: {
		es6: true,
		node: true
	},
	extends: ['airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'script',
		ecmaFeatures: {
			globalReturn: true
		}
	},
	plugins: ['json'],
	rules: {
		'lines-between-class-members': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxBOF: 0,
				maxEOF: 0
			}
		],
		// Mirth specific settings
		'consistent-return': 'off', // Mirth has global returns
		eqeqeq: 'off', // Mirth errors with ===
		'no-plusplus': 'off',
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'prefer-destructuring': 'off',
		'vars-on-top': 'off'
	}
};
