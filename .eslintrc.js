module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    expect: true,
  },
  extends: ['plugin:vue/recommended', 'standard'],
  plugins: ['vue'],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': 'off',
    'vue/html-self-closing': 'off',
  },
}
