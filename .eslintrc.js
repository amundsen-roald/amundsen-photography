module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-vars': 'off',
    'no-unused-vars': 'error',
    'vue/attribute-hyphenation': 'warning',
    'vue/html-quotes': 'error',
    'vue/html-self-closing': 'off',
    'vue/name-property-casing': 'error',
    'vue/no-multi-spaces': 'error',
    'no-unexpected-multiline': 'error',
    'semi': [ 'error', 'never' ],
    'quotes': ['error', 'single'],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
