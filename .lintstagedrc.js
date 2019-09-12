module.exports = {
  linters: {
    'src/**/*.{js,jsx,ts,tsx}': ['prettier --write', 'git add', 'eslint'],
    'src/**/*.{scss,css,js,jsx,ts,tsx}': [
      'prettier  --write',
      'git add',
      'stylelint',
    ],
  },
};
