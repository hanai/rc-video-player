var webpack = require('webpack');
var path = require('path');

var config = {
  entry: {
    'index': './index.jsx'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: process.cwd(),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }, {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }, {
        test: /\.svg$/,
        loaders: ["babel?presets[]=es2015,presets[]=react,presets[]=stage-0", "svg-react"],
      }
    ]
  },
  devtool: 'source-map'
};

module.exports = config;