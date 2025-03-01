module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {},
  }