/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    // 'prettier',
    '@vue/prettier',
    '@vue/eslint-config-typescript',
    // '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['vue', 'html', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
    quotes: ['error', 'single'],
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
