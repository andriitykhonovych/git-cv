const { resolve } = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const { NoEmitOnErrorsPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {
  context: resolve('src'),
  entry: {
    main: './index.jsx',
  },

  output: {
    path: resolve('build'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      resolve(__dirname, '../../src'),
      resolve(__dirname, '../../node_modules'),
    ],
  },

  module: {
    rules: [

      // transform .js and .jsx files with babel
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true,
            },
          },
          {
            loader: 'css-loader',
          },
        ],
      },

      // allow to load images in styles and code
      // move them into images folder with unchanged name
      // convert small images (< 8kb) into base64
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[ext]',
            },
          },
        ],
      },

      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
      },

      {
        test: /\.svg$/,
        use: ['svg-sprite-loader', 'svgo-loader'],
      },

      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
        },
      },
    ],
  },

  plugins: [
    // don't build if there are any errors
    new NoEmitOnErrorsPlugin(),

    // make index.html from template
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: false,
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
  ],
};

module.exports = common;
