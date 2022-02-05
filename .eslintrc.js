module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'object-shorthand': ['error', 'properties'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
}
