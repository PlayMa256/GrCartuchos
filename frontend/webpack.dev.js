const merge = require("webpack-merge");
const path = require("path");
const base = require("./webpack.base");

const BUILD_DIR = path.resolve(__dirname, "build");

module.exports = merge(base, {
  mode: "development",
  devServer: {
    compress: true,
    hot: true
  }
});
