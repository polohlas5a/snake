module.exports = {
    root: true,
        parser: 'babel-eslint',
        parserOptions: {
            sourceType: 'module'
        },
    env: {
        browser: true,
        node: true
    },
    extends: 'standard',
    plugins: [
        'html'
    ],
    'rules': {
        "semi": [2, "always"],
        "indent": ["error", 4],
        "space-before-function-paren": ["error", "never"],
        // allow paren-less arrow functions
        'arrow-parens': 0,
