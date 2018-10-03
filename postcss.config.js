const autoprefixer = require('autoprefixer');
const postCssClean = require('postcss-clean');

module.exports = {
  plugins: [autoprefixer, postCssClean]
};
