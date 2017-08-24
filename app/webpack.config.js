var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/App.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x?]$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    node: {
        dns: 'mock',
        net: 'mock'
    }
};