const htmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')

  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: '/(src)/',
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.(css|less|scss)$/,
        use: ExtractTextPlugin.extract({
          publicPath: '../',
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('postcss-import'),
                  require('autoprefixer')({
                    broswers: ['last 5 versions']
                  })
                ]
              }
            }, 'less-loader', 'sass-loader'
          ]
        })
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.tpl$/,
        use: [
          'ejs-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[ext]',
          }
        }]
      }

    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin("css/[name]-[hash].css")
  ]
};

