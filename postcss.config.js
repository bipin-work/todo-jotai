const { plugins } = require("./webpack.config");

module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
