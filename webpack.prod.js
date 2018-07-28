const webpack = require('webpack');
const merge = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path");
const BUILD_DIR = path.resolve(__dirname, "build");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = merge(base, {
	mode: "production",
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							alias: { '../img': '../public/img' }
						}
					},
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /pt-br/),
		new webpack.NamedModulesPlugin(),
		new MiniCssExtractPlugin()
	],
	performance: {
		hints: false
	}
});

module.exports = config;