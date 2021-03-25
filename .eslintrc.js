module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jest/globals': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2020,
        'sourceType': 'module'
    },
    'plugins': [
        'react', 'jest'
    ],
    'rules': {
        'indent': [
            'warn', 4,
            { 'SwitchCase': 1 }
        ],
        'linebreak-style': [
            'warn',
            'unix'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'warn',
            'never'
        ],
        'eqeqeq': 'warn',
        'no-trailing-spaces': 'warn',
        'no-unused-vars': 'warn',
        'object-curly-spacing': [
            'warn', 'always'
        ],
        'arrow-spacing': [
            'warn', { 'before': true, 'after': true }
        ],
        'no-console': 0,
        'react/prop-types': 0
    }, 'globals': {
        'module': 'readonly'
    }
}