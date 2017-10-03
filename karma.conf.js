const webpack = require('webpack');
//const path = require('path');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha', 'chai'],
        files: [
            'test/index.js'
        ],
        preprocessors: {
            'test/index.js': ['webpack']
        },
        reporters: ['dots'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {test: /\.js$/, loader: 'babel-loader'}
                ]
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};