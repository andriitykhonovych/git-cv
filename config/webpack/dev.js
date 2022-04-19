const { resolve } = require('path');
const { EnvironmentPlugin, HotModuleReplacementPlugin } = require('webpack');

const dev = {
  mode: 'development',

  output: {
    globalObject: 'this',
  },

  module: {
    rules: [
      // transform SASS to css and put inside <style> tag in head
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true,
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]--[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: resolve(__dirname, '../../postcss.config.js'),
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new EnvironmentPlugin({
      DEPLOYMENT: 'local',
    }),
  ],

  devtool: 'eval-source-map',
  devServer: {
    // expose server externally (eg. for docker)
    // https://webpack.js.org/configuration/dev-server/#devserver-host
    host: '0.0.0.0',
    port: 7070,
    proxy: {},

    // hot module replacement along with HotModuleReplacementPlugin
    // + root component hacked for this functionality
    // https://webpack.js.org/guides/hot-module-replacement/#enabling-hmr
    hot: true,

    // send index.html for unknown routes, so client can manage them
    historyApiFallback: true,
  },
};

const merge = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, dev);
