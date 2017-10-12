const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'src/public/build');
const APP_DIR = path.resolve(__dirname, 'src/app');
const ROOT_DIR = path.resolve(__dirname, 'src');

const config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [ ROOT_DIR,'node_modules'],
        alias: {
            components: path.resolve(__dirname, 'src/app'),
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                include:[ APP_DIR, path.join(__dirname, 'test')],
                exclude: path.join(__dirname, 'node_modules')
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            }
        ]
    },
    // externals:{
    //     "fs": "commonjs fs"
    // }
   // node:{ fs: 'empty'},
   // target: 'node'
};

module.exports = config;