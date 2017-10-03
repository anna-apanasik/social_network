const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'src/public/build');
const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/app'),
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            }
        ]

    }
};

module.exports = config;