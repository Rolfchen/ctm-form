const HtmlWebPackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = () => {
  return {
    entry: {
      ctmForm: "./src/index.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      filename: "[name].bundle.js",
      library: "ctmForm",
    },
    devServer: {
      port: 9002,
      historyApiFallback: true,
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
