const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "build");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.base");

const config = merge(base, {
  entry: ["./src/index.js"],
  mode: "production",
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /pt-br/),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin()
  ],
  performance: {
    hints: false
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  }
});

module.exports = config;
