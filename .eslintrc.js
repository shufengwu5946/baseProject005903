module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react', '@react-native-community'],
  plugins: [
    'import',
    'react',
    'jsx-a11y',
    'prettier',
    'react-native',
    'react-hooks',
    'eslint-comments',
  ],
  env: {
    'react-native/react-native': true,
    jest: true,
    es6: true,
  },
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight', 'to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-multi-comp': 'off',
    'react/destructuring-assignment': 'error',
    'import/no-extraneous-dependencies': 'off',
    'operator-assignment': 'off',
    curly: ['error', 'all'],
    'no-mixed-operators': 'error',
    'no-tabs': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    'prettier/prettier': 'error',
  },
};
