require('dotenv').config({ path: `./.env` })

const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { EnvironmentPlugin } = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebPackPlugin = require('copy-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const extractTextPlugin = new ExtractTextPlugin({
  filename: 'bundle.css', allChunks: true
})

const copyWebPackPlugin = new CopyWebPackPlugin([
  { from: './src/assets/icons', to: 'assets/icons' }
])

const environmentPlugin = new EnvironmentPlugin(process.env)

module.exports = {
  entry: {
    index: ['./src/index.jsx']
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@shared': path.resolve('src/shared'),
      '@router': path.resolve('src/router'),
      '@sections': path.resolve('src/sections'),
      '@assets': path.resolve('src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                data: '@import "variables"; @import "palette"; @import "font-sizes"; @import "font-sizes"; @import "mixins";',
                includePaths: [
                  path.resolve(__dirname, './src/shared/styles')
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif|ttf|xlm|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '@assets/'
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    htmlWebpackPlugin,
    extractTextPlugin,
    copyWebPackPlugin,
    environmentPlugin
  ]
}
