"use strict"
import * as path from "path";

import * as webpack from "webpack";

const config: webpack.Configuration = {
  devtool: "source-map",
  entry: "./app.ts",
  output: {
    path: path.resolve("./dist"),
    filename: "app.js",
    libraryTarget: 'commonjs2',
  },
  target: "node",
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader'
      },
    ],
  },
}

module.exports = config
