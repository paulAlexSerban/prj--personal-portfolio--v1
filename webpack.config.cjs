const path = require("path");
const fs = require("fs");

const HandlebarsPlugin = require("handlebars-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Handlebars = require("handlebars");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const glob = require("glob");

const DATA_DIR = path.join(__dirname, "src", "data");

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

const getJsEntries = (scriptsDir) => {
  // use glob to get all .js files in the scripts directory tree
  const scriptFiles = glob.sync(path.join(scriptsDir, "**", "*.entry.js"));
  const entries = {};
  
  scriptFiles.forEach((filePath) => {
    const relativePath = path.relative(scriptsDir, filePath);
    const entryName = relativePath.replace(/\.js$/, "").replace(/\\/g, "/");
    entries[entryName] = filePath;
  });
  return entries;
  // const scriptsDirFiles = fs.readdirSync(scriptsDir);
  // const entries = {};

  // for (const file of scriptsDirFiles) {
  //   if (path.extname(file) === ".js") {
  //     const key = path.basename(file, ".js");
  //     const filePath = path.join(scriptsDir, file);
  //     entries[key] = filePath;
  //   }
  // }

  // return entries;
};

module.exports = {
  entry: getJsEntries(path.join(__dirname, "src", "scripts")),
  output: {
    filename: "[name].js",
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
      entry: path.join(__dirname, "src/markup", "*.hbs"),
      output: path.join(__dirname, "dist", "[name].html"),
      data: getJsonData(DATA_DIR),
      helpers: {
        json: (context) => JSON.stringify(context),
        encode: (context) => btoa(context),
        multiply: (a, b) => a * b,
        join: (arr, separator) => arr.join(separator),
      },
      partials: [path.join(__dirname, "src/markup/partials", "*.hbs")],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css", // Use entry name to generate unique CSS files
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
    port: 9000,
  },
};

// Register custom Handlebars helper for JSON stringification
Handlebars.registerHelper("json", function (context) {
  return JSON.stringify(context);
});
