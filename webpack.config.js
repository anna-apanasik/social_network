const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'src/public/build');
const APP_DIR = path.resolve(__dirname, 'src/app');
const ROOT_DIR = path.resolve(__dirname, 'src');

const config = {
    devtool: 'cheap-module-source-map',
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
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
    // externals:{
    //     "fs": "commonjs fs"
    // }
   // node:{ fs: 'empty'},
   // target: 'node'
};

module.exports = config;