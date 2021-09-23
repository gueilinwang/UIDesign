const postcssPresetEnv = require("postcss-preset-env")

module.exports = {
  Plugins: [
    postcssPresetEnv({
      browsers: [
        "defaults",
        "last 2 versions",
        "not ie <= 11",
        ">1%",
        "last 3 iOS versions",
      ],
    }),
  ],
}
