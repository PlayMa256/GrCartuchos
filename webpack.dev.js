const merge = require("webpack-merge");
const base = require("./webpack.base");
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = merge(base, {
	mode: "development",
	devServer: {
		contentBase: BUILD_DIR,
		compress: true,
		hot: true
	}
})