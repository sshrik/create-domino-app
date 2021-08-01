const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: 'development',
  entry: [path.resolve(__dirname, './app/script.js')],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    alias: {
      "@": path.resolve(__dirname)
    },
    extensions: ['.js', '.json', '.jsx', '.css'],
    plugins: [new DirectoryNamedWebpackPlugin()],
  },
  devtool: 'eval-cheap-source-map',
};

module.exports = config;