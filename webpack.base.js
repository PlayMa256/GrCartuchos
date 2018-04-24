
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
	target: "web",
	entry: `${SRC_DIR}/index.js`,

	output: {
		filename: `[name].[hash].js`,
		publicPath: BUILD_DIR,
	},

	devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval',

	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(scss)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							alias: { '../img': '../public/img' }
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './img/[name].[hash].[ext]'
						}
					}
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: './fonts/[name].[hash].[ext]'
				}
			}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([
				{from: './public/img', to: 'img'}
			],
			{copyUnmodified: false}
		)
		
	]
}