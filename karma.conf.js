const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        basePath: 'test/spec',
        singleRun: false,
        autoWatch: true,
        frameworks: ['jasmine'],
        files: [
            {pattern: '**/*.spec.js', watched: true, served: true, included: true}
        ],
        preprocessors: {
            // add webpack as preprocessor
            '**/*.spec.js': ['webpack','sourcemap']
            //       'test/**/*_test.js': ['webpack']
        },
        webpack: webpackConfig,
    });
};