const path = require('path')
// const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const isProd = process.env.NODE_ENV === 'production'

const webpackConfig = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue', '.json'],

    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },

      // {
      //   test: /\.md$/,
      //   use: [
      //     {
      //       loader: 'vue-loader',
      //       options: {
      //         compilerOptions: {
      //           preserveWhitespace: false
      //         }
      //       }
      //     },
      //     {
      //       loader: path.resolve(__dirname, './md-loader/index.js')
      //     }
      //   ]
      // },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
module.exports = webpackConfig
