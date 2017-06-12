let webpack = require('karma-webpack');
let webpackConfig = require('./webpack.config');

webpackConfig.externals = {
    'cheerio': 'window',
    'react/addons': true, // important!!
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
};

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './node_modules/babel-polyfill/browser.js',
            './node_modules/promise-polyfill/promise.js',
            'src/test/**/*\.test.jsx'

        ],
        reporters: ['progress', 'coverage'],
        browsers: ['PhantomJS'],
        preprocessors: {
            'src/test/**/*\.test.jsx': ['webpack'],
            'src/**/*.jsx': ['webpack']
        },
        coverageReporter: {
            dir: 'target/coverage',
            reporters: [
                {
                    type: 'html'
                }]
        },

        webpack: webpackConfig,
        webpackMiddleware: {noInfo: true},
        singleRun: true
    });
};