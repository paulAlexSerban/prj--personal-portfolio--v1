const plugins = require("./build/plugins.cjs");
const loaders = require("./build/loaders.cjs");
const { PUBLIC_DIR, SRC_SCRIPTS_DIR, DIST_DIR } = require("./build/paths.cjs");

const { getJsEntries } = require("./build/helpers.cjs");

module.exports = {
  entry: getJsEntries(SRC_SCRIPTS_DIR),
  output: {
    filename: "[name].js",
    path: DIST_DIR,
  },
  module: {
    rules: loaders,
  },
  plugins,
  mode: "development",
  optimization: {
    minimize: true,
  },
  devServer: {
    static: {
      directory: PUBLIC_DIR,
    },
    port: 9000,
  },
};
