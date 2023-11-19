export const plugins = [
  require("postcss-import"),
  require("postcss-advanced-variables"),
  require("tailwindcss/nesting")(require("postcss-nested")),
  require("tailwindcss"),
  require("autoprefixer"),
];
