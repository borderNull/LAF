'use strict'

const webpack = require("webpack")

module.exports = {
  // watch: true,
  devtool: 'source-map',
  entry:  __dirname + "\\src\\js\\app.js",
  output: {
    path: __dirname + '\\build\\js\\',
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }],
      },
    ],
  }
}
