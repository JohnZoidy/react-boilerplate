/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

const mode = process.env.NODE_ENV || 'development';
// const mode = 'production';

module.exports = {
  mode,
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    // publicPath: '/assets/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist', 'public'),
      watch: false,
    },
    compress: true,
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  module: {
    rules: [
      { test: /\.ts(x)?$/, loader: 'ts-loader' },
      {
        test: /\.(jpg|svg|png|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
