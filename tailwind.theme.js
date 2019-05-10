let defaultConfig = require("tailwindcss/defaultConfig")();

let theme = {
  transparent: "transparent",
  muni: "#987654",
  cyan: "cyan"
};

const colors = Object.assign({}, theme, defaultConfig.colors);

module.exports = {
  colors: colors,
  textColors: colors,
  backgroundColors: colors
};
