module.exports = {
    env: {
        browser: true,
        es2021: true,
        'cypress/globals': true,
    },
    extends: ['plugin:cypress/recommended', 'airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-unnecessary-waiting': 'error',
        'cypress/assertion-before-screenshot': 'warn',
        'cypress/no-async-tests': 'error',
        'cypress/no-pause': 'error',
        'no-plusplus': ['off'],
        'no-param-reassign': ['error', {props: false}],
        indent: ['error', 2],
    },
};
