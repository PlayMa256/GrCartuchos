const merge = require("webpack-merge");
const path = require("path");
const base = require("./webpack.base");

module.exports = merge(base, {
  mode: "development",
  devServer: {
    compress: true,
    hot: true
  }
});
