/* eslint-disable import/no-extraneous-dependencies */

const Dashboard = require('webpack-dashboard/plugin');

const dashboard = {
  plugins: [new Dashboard()],
};

const merge = require('webpack-merge');
const dev = require('./dev.js');

module.exports = merge(dev, dashboard);
