const path = require('path');
const HandlebarsPlugin = require('handlebars-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HandlebarsPlugin({
      entry: path.join(__dirname, 'src/templates', '*.hbs'),
      output: path.join(__dirname, 'dist', '[name].html'),
      data: path.join(__dirname, 'src/data', 'data.json'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/styles/styles.css'), to: path.resolve(__dirname, 'dist/styles.css') },
      ],
    }),
  ],
  mode: 'development',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
};