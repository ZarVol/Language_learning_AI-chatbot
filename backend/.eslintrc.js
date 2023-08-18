module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest', // Updated to "latest"
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'warning',
      {
        singleQuote: true,
        parser: 'flow',
      },
    ],
    // Add your custom rules here
  },
};
