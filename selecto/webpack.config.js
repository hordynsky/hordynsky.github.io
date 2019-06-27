const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            "plugins": [
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
          test: /\.scss$/,
          use: [
              'style-loader',
              'css-loader',
              'sass-loader'
          ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./index.html'),
        }),
    ]
  };