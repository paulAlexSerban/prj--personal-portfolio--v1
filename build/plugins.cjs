const fs = require("fs");
const path = require("path");

const HandlebarsPlugin = require("handlebars-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DATA_DIR = path.join(__dirname, "..", "src", "data");

const getJsonData = (dataDir) => {
  const dataDirFiles = fs.readdirSync(dataDir);
  const dataDirContent = {};
  let allProjectCategories = new Set();

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

      if (key === "projects" && Array.isArray(fileContent)) {
        fileContent.forEach((project) => {
          if (Array.isArray(project.category)) {
            project.category.forEach((cat) => allProjectCategories.add(cat));
          }
        });
      }
    }
  }
  dataDirContent.allProjectCategories = Array.from(allProjectCategories);
  return dataDirContent;
};

const plugins = [
  new HandlebarsPlugin({
    // hbs entry without _partials
    entry: path.join(__dirname, "..", "src/markup", "*.hbs"),
    output: path.join(__dirname, "..", "dist", "[name].html"),
    data: getJsonData(DATA_DIR),
    helpers: {
      json: (context) => JSON.stringify(context),
      encode: (context) => btoa(context),
      multiply: (a, b) => a * b,
      join: (arr, separator) => arr.join(separator),
      eq: (a, b) => a === b,
    },
    partials: [path.join(__dirname, "..", "src/markup/partials", "*.hbs")],
  }),
  new MiniCssExtractPlugin({
    filename: "[name].css", // Use entry name to generate unique CSS files
  }),
  new CssMinimizerPlugin(),
  new TerserPlugin(),
];

module.exports = plugins;
