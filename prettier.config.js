/** @type {import("prettier").Options} */
export default {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 79,
  tabWidth: 2,
  plugins: ["prettier-plugin-astro"],
  astroAllowShorthand: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
