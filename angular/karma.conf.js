module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-ui-router/release/angular-ui-router.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/app.js',
      'src/**/*.js',
      'src/**/*.spec.js',
      'src/**/*.html'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/app.js': ['babel'],
      'src/**/*.js': ['babel'],
      'src/**/*.spec.js': ['babel'],
      'src/**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'app'
    },
    reporters: ['mocha'],
    mochaReporter: {
      colors: {
        success: 'green',
        info: 'blue',
        warning: 'cyan',
        error: 'red'
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  });
};
