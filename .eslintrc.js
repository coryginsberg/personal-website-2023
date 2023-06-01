module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'fbjs',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
