/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ["node_modules", "dist"],
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "prettier", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-strict",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { varsIgnorePattern: "Props", ignoreRestSiblings: true },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-console": "warn",
    "prettier/prettier": "error",
    "no-var": "error",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "prettier/prettier": "off",
      },
    },
    {
      files: ["./src/assets/scripts/*"],
      env: {
        node: false,
        browser: true,
      },
    },
  ],
};
