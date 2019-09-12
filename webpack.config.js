'use strict'

const targetTypes = { ejs: 'html', js: 'js' }
const cssTarget = { styl: 'css' }
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const publishDir = 'docs'

const app = {
  watch: true,
  watchOptions: {
    poll: 1000,
  },
  entry: 'src/index.ejs',
  output: {
    filename: '[name]',
    path: `${__dirname}/${publishDir}`
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.ejs$/,
      use: [
        'html-loader',
        'ejs-html-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.ejs'
    }),
    new CopyWebpackPlugin(
      [{ from: `${__dirname}/src` }],
      { ignore: Object.keys(targetTypes).map((ext) => `*.${ext}`) }),
    new CopyWebpackPlugin(
      [{ from: `${__dirname}/css/styl/**/*`, to: `${__dirname}/${publishDir}/css/` }],
      { context: 'css/' },
      { ignore: ['*.styl'] }),
    new CopyWebpackPlugin(
      [{ from: `${__dirname}/js/**/*`, to: `${__dirname}/${publishDir}/js/` }],
      { context: 'js/' })
  ],
}

module.exports = app
