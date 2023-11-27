const path = require("path");
const webpack = require("webpack");
const typescriptDeclarationPlugin = require("typescript-declaration-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				use: [
					{
						loader: "ts-loader",
					},
				],
				exclude: /(node_modules)/,
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/env"],
				},
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader", options: { modules: true } },
				],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".css"],
	},
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "bundle.js",
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 3000,
		open: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new typescriptDeclarationPlugin(),
	],
};
