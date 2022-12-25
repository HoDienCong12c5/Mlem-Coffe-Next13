module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/jsx-curly-brace-presence': [
      'error',
      { 'props': 'never', 'children': 'never' },
    ],
    'react/jsx-one-expression-per-line': 'error',
    'react/react-in-jsx-scope': 'off',
    'semi': ['off', 'always'],
    'quotes': ['error', 'single'],
    'react/prop-types': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-props-no-spreading': 'off',
    'linebreak-style': ['off', 'unix'],
    'no-trailing-spaces': 'error',
    'indent': [2, 2],
    'import/no-unresolved': 'off',
    'no-multi-spaces': 2,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
  }
}
