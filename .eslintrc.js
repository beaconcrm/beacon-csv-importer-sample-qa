module.exports = {
  extends: [
    '@beacon/eslint-config-typescript',
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
