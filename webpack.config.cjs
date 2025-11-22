const path = require("path");
const fs = require("fs");

const HandlebarsPlugin = require("handlebars-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Handlebars = require("handlebars");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DATA_DIR = path.join(__dirname, "src", "data");

const fetchJsonData = (dataDir) => {
  const dataDirFiles = fs.readdirSync(dataDir);
  const dataDirContent = {};

  for (const file of dataDirFiles) {
    if (path.extname(file) === ".json") {
      const key = path.basename(file, ".json");
      const filePath = path.join(dataDir, file);
      const fileContent = require(filePath);

      const isVaidJson = (() => {
        try {
          JSON.stringify(fileContent);
          return true;
        } catch (e) {
          return false;
        }
      })();

      if (!isVaidJson) {
        throw new Error(`Invalid JSON in file: ${filePath}`);
      }
      dataDirContent[key] = fileContent;
    }
  }
  return dataDirContent;
};

module.exports = {
  entry: "./src/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HandlebarsPlugin({
      // hbs entry without _partials
      entry: path.join(__dirname, "src/templates", "*.hbs"),
      output: path.join(__dirname, "dist", "[name].html"),
      data: fetchJsonData(DATA_DIR),
      helpers: {
        json: (context) => JSON.stringify(context),
      },
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  mode: "development",
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    open: true,
  },
};

// Register custom Handlebars helper for JSON stringification
Handlebars.registerHelper("json", function (context) {
  return JSON.stringify(context);
});
