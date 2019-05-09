module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-custom-properties"),
    require("postcss-preset-env")({ stage: 1 })
  ]
};
