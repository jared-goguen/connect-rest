var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './containers/App.jsx'
  },
  devtool: 'inline-source-map',
    devServer: {
      contentBase: '.',
      hot: true,
      port: 8080
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015', 'react'],
            plugins: [
              'transform-class-properties', 
              'transform-object-rest-spread',
              'react-hot-loader/babel'
            ]
          }
        }
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'}
        ]
      }, {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader'
        }
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'App.bundle.js',
    publicPath: 'http://localhost:8080'
  },
  watch: true,
  watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
  }
};