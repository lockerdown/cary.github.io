const path = require('path')
const webpack = require('webpack')
const globby = require('globby');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CssEntryPlugin = require("css-entry-webpack-plugin");

module.exports = {
  entry: {
    "style": ["./source/css/style.scss"]
  },
  output: {
    path: path.resolve(__dirname, './css'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: "css-loader"
    }, {
      test: /\.css$|\.scss$|\.sass$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader'
      }],
    }, ]
  },
  plugins: [
    new CssEntryPlugin({
      output: {
        filename: "style.css"
      }
    })
  ],
  // resolve: {
  //   extensions: ['.scss'],
  // }
}
