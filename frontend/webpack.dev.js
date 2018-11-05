const merge = require("webpack-merge");
const path = require("path");
const { WebpackPluginServe: Serve } = require("webpack-plugin-serve");
const base = require("./webpack.base");

const BUILD_DIR = path.resolve(__dirname, "build");

module.exports = merge(base, {
  mode: "development",
  entry: ["./src/index.js", "webpack-plugin-serve/client"],
  plugins: [
    new Serve({
      static: [BUILD_DIR],
      historyFallback: true,
      progress: true
    })
  ]
});
