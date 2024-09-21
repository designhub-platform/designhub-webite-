module.exports = {
  '*': ['prettier --write', 'eslint --fix --no-warn-ignored'],
  '**/*.ts?(x)': () => 'npm run check-types',
};
