const HtmlWebPackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = () => {
  return {
    entry: {
      index: "./src/index.js",
    },
    output: {
      path: path.resolve(__dirname, "public"),
      publicPath: "/",
    },
    devServer: {
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
      }),
    ],
  };
};
