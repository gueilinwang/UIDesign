const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
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
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      template: "./preview.html",
      filename: "./preview.html",
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    usedExports: true, //tree shakings
    // 代碼分割
    splitChunks: {
      chunks: "all", //'async:只對非同步代碼進行分割;initial只對同步代碼進行分割'
      minSize: 20000, // >20kb才做分割
      minRemainingSize: 0,
      minChunks: 1, //當一個模塊至少被引用一次時會被當成chunk
      maxAsyncRequests: 30, //同時加載的模塊數，最多30個
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true, //如果一個模塊之前已經被打包分割過了,則不會再去做額外的分割
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
}
