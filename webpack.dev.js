const webpack = require("webpack")
const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common")
const devConfig = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: "./dist",
    open: true,
    proxy: {},
    client: {
      progress: true,
    },
    hot: "only",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}

module.exports = merge(commonConfig, devConfig)
