var path = require('path');

var webpack = require('webpack');

var config = {
  entry: path.resolve(__dirname, './test/src/index.spec.js'),
  output: {
    path: path.resolve(__dirname, './test/dist'),
    filename: 'index.spec.js',
  },
}

module.exports = config;