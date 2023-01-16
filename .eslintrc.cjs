module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    indent: "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "linebreak-style": ["error", "unix"],
  },
};
