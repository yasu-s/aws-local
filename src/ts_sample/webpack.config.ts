"use strict"
import * as path from "path";

import * as webpack from "webpack";

const config: webpack.Configuration = {
  devtool: "source-map",
  entry: "./app.ts",
  output: {
    path: path.resolve("./dist"),
    filename: "app.js"
  },
  target: "node",
  resolve: {
    extensions: [".json", ".ts", ".js"]
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