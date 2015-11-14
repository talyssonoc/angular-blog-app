module.exports = function(config) {

  config.set({
    basePath: '.',

    browsers: ['Chrome'],

    singleRun: true,

    frameworks: [
      'browserify',
      'mocha',
      'sinon-chai'
    ],

    files: [
      'spec/**/*-spec.js',
      'app/client/js/index.js'
    ],

    preprocessors: {
      'app/client/js/**/*.js': ['browserify'],
      'spec/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: ['babelify', 'stringify'],
      paths: ['node_modules', 'app/client/js']
    },

    reporters: ['progress']
  });
};
