module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  plugins: [],
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
    jest: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    env: {
      es6: true
    },
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  rules: {
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
