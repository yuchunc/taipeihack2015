var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var env = process.env.MIX_ENV || 'dev'
var prod = (env === 'prod')

var entry = './web/static/js/bundle.js'
var plugins = [
  new ExtractTextPlugin('app.css'),
  new CopyWebpackPlugin([
    { from: './web/static/assets' },
    { from: '/deps/phoenix_html/web/static/js/phoenix_html.js',
      to: 'js/phoenix_html.js'
    }
  ])
]

// This is necessary to get the sass @import's working
var stylePathResolves = (
  'includePaths[]=' + path.resolve('./') + '&' +
  'includePaths[]=' + path.resolve('./node_modules')
);

if (prod) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
}

var loaders = ['babel']
var publicPath = 'http://localhost:4001/'

module.exports = {
  entry: entry,
  devtool: prod ? null : 'eval-sourcemaps',
  output: {
    path: path.join(__dirname, './priv/static/js'),
    filename: 'bundle.js',
    // publicPath: publicPath
  },
  plugins: plugins,
  resolve: {
    alias: { phoenix: __dirname + "/deps/phoenix/web/static/js/phoenix.js"}
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: loaders,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css' + '!sass?outputStyle=expanded&' + stylePathResolves
        )
      }
    ]
  }
}
