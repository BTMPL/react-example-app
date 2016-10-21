const webpack = require("webpack");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  entry: [
    "webpack-hot-middleware/client",
    "./src/index"
  ],
  output: {
    filename: "bundle.js",
    // eslint-disable-next-line
    path: __dirname + "/dist"
  },
  plugins: [
    new webpack.ResolverPlugin(new DirectoryNamedWebpackPlugin()),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin(),
    new webpack.DefinePlugin({
      // eslint-disable-next-line
      NODE_ENV: '"' + process.env.NODE_ENV + '"'
    })
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