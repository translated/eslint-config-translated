module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', 'import', 'react', 'react-hooks', 'jest'],
  extends: ['eslint:recommended', 'prettier', 'plugin:import/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:jest/recommended'],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'max-lines-per-function': ['error', 200],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 160,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
