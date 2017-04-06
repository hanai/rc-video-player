var webpack = require('webpack');
var path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

var config = {
  entry: {
    'rc-video-player': './src/index.jsx'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'src': resolve('src'),
      'assets': resolve('src/assets')
    }
  },
  output: {
    library: 'rc-video-player',
    libraryTarget: 'umd',
    path: resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          resolve('src'),
          resolve('test')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader'
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: true } },
                { convertPathData: true },
                { cleanupAttrs: true },
                { removeComments: true },
                { removeDesc: true },
                { removeUselessDefs: true },
                { removeEmptyAttrs: true },
                { removeHiddenElems: true },
                { removeEmptyText: true }
              ]
            }
          }
        ]
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
