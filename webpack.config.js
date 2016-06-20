var webpack = require('webpack');
var path = require('path');

var config = {
  entry: {
    'rc-video-player': './index.jsx'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    library: 'rc-video-player',
    libraryTarget: 'umd',
    path: path.join(process.cwd(), 'dist'),
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
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
  },
  devtool: 'source-map'
};

module.exports = config;