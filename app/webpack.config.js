var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './containers/App.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'App.bundle.js',
    publicPath: 'http://localhost:8000'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-class-properties', 
            'transform-object-rest-spread'
          ]
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader'
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  }
};