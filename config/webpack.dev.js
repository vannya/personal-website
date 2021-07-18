const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,

      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      favicon: 'public/favicon.ico',
      title: 'Van Tabbert | Software Engineer',
      inject: true,
    }),
    new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        enabled: true,
        files: './src/**/*.{ts,tsx,js,jsx}',
      }
    })
  ],
};
