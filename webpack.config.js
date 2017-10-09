const projectInfo = require('./package.json')
const path = require('path')
const webpack = require('webpack')

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

// Top comment added to output files
const banner = projectInfo.name + "\nv" + projectInfo.version

module.exports = {
  entry: [
    './src/index.js',
    './src/style.scss'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {}
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new StyleLintPlugin(),
    new webpack.BannerPlugin(banner),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
