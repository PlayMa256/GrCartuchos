const merge = require("webpack-merge");
const base = require("./webpack.base");
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = merge(base, {
	mode: "development",
	devServer: {
		compress: true,
		hot: true
	}
})