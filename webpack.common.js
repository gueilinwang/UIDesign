const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpack = require("webpack")
module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "./images/[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$|\.s[ac]ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.ts[x]?$/,
        loader: "ts-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.js[x]?$/,
        loader: "babel-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 40960, //40kb
          },
        },
      },
    ],
  },
  devServer: {
    static: "./dist",
    open: true,
    proxy: {},
    client: {
      progress: true,
    },
    hot: "only",
  },
  devtool: "eval-cheap-module-source-map",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      template: "./preview.html",
      filename: "./preview.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    usedExports: true,
  },
}
