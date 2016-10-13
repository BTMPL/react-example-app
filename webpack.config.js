const webpack = require('webpack');
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

module.exports = {
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  plugins: [
    new webpack.ResolverPlugin(new DirectoryNamedWebpackPlugin())
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ["babel"],
        exclude: /(node_modules)/
      },
      {
        test: /\.css/,
        loader: "style-loader!css-loader?modules"
      }
    ]
  }
};