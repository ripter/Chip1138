module.exports = {
  env: {
    'es2022': true,
    'jest': true,
    'node': true,
  },
  extends: 'eslint:recommended',
  globals: {
  },
  parserOptions: {
    'sourceType': 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-void': 'off',
    'no-param-reassign': 'off',
    'no-multi-assign': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'max-len': 'off',
    'brace-style': 'off',
    'prefer-promise-reject-errors': 'off',
    'class-methods-use-this': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
  },
};
