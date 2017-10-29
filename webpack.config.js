const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        modules: [ROOT_DIR, 'node_modules'],
        alias: {
            components: path.resolve(__dirname, 'src/app'),
        }
    },
    module: {

        // loaders: [
        //     {
        //         test: /\.jsx?/,
        //         loader: 'babel-loader',
        //         include: [APP_DIR, path.join(__dirname, 'test')],
        //         exclude: path.join(__dirname, 'node_modules')
        //     },
        //     {
        //         test: /\.css$/,
        //         include: MODULE_BUILD_CSS_DIR,
        //         loader: ExtractTextPlugin.extract("style-loader!css-loader")
        //     },
        // {test: /\.less$/i, loader: extractLESS.extract(['css', 'less'])},
        // {
        //     test: /\.css$/, loader: "style-loader!css-loader"
        // },
        // {
        //     test: /\.css$/,
        //     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        // },
        //     {
        //         test: /\.less$/,
        //         include: MODULE_BUILD_CSS_DIR,
        //         loader: ExtractTextPlugin.extract('style-loader', "css-loader!less-loader")
        //     }
        // ]
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                include: [APP_DIR, path.join(__dirname, 'test')],
                exclude: path.join(__dirname, 'node_modules'),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader", options: {
                            paths: [
                                path.resolve(__dirname, "node_modules")
                            ]
                        }
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        //плагин, который сжимает скрипты.
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                sequences: true,
                booleans: true,
                conditionals: true,
                comparisons: true,
                loops: true,
                dead_code: true,
                unused: true,
                warnings: false,
                drop_console: true,
                unsafe: true,
                if_return: true,
            }
            //     screw_ie8: true,
            //     evaluate: true,
            //     join_vars: true

        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        // выносит общие библиотеки для чанков в отдельный чанк
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
        }),

        //плагин, который минимизирует id, которые используются webpack для подгрузки чанков и прочего
        new webpack.optimize.OccurrenceOrderPlugin(),

        //позволяет извлеч содержимое всех подключаемых CSS-файлов в один отдельный CSS-файл
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ]
};

module.exports = config;