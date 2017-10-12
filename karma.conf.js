module.exports = function (config) {
    config.set({
        basePath: 'test',
        singleRun: false,
        autoWatch: true,
        frameworks: ['jasmine'],
        files: [
            {pattern: '**/*.spec.js', watched: true, served: true, included: true}
            //  '*.spec.js'
        ],
        preprocessors: {
            // add webpack as preprocessor
            '**/*.spec.js': ['webpack','sourcemap']
            //       'test/**/*_test.js': ['webpack']
        },
       webpack: configureWebpack()
    });

    function configureWebpack(webpackConfigFunction) {
        let webpackConfig = require('./webpack.config');
        webpackConfig.entry = undefined; // karma will pass the proper argument for entry
        return webpackConfig;
    }
};