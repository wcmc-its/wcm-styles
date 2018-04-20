const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')
const projectInfo = require('./package.json')
const webpack = require('webpack')

// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { minimize: true } },
          'sass-loader',
        ],
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
            options: { name: '[name].[ext]', publicPath: 'dist' }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
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
