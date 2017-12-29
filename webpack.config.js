const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[hash].bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  //   devtool: 'inline-source-maps',
  devServer: {
    contentBase: './static'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new htmlPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};
