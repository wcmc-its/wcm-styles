const projectInfo = require('./package.json')
const path = require('path')
const webpack = require('webpack')

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PolyfillsPlugin = require('webpack-polyfills-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// Top comment added to output files
const banner = projectInfo.name + '\nv' + projectInfo.version

module.exports = {
  entry: [
    './src/index.js',
    './src/style.scss'
  ],
  output: {
    filename: 'wcm.js',
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
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            'sass-loader'
          ]
        })
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      },
      {
        test: require.resolve('inputmask'),
        use: [{
          loader: 'expose-loader',
          options: 'Inputmask'
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]'}
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('wcm.css'),
    new PolyfillsPlugin([
      'Array/prototype/includes' // For IE 11 support
    ]),
    new StyleLintPlugin(),
    new webpack.BannerPlugin(banner),
    new webpack.ProvidePlugin({
      $: 'jquery',
      Inputmask: 'inputmask',
      'window.Inputmask': 'inputmask',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new webpack.SourceMapDevToolPlugin({
      exclude: ['popper.js']
    }),
    new UglifyJsPlugin()
  ]
}
