module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-tabs": 0,
    "indent": ["error", "tab"],
    "no-console": 0,
    "comma-dangle": 0,
    "no-underscore-dangle": 0,
    "no-plusplus": 0,
    "arrow-parens": [2, "as-needed"]
  },
};
