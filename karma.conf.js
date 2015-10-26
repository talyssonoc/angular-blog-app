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
      'spec/**/*.js',
      'src/js/index.js'
    ],

    preprocessors: {
      'src/js/**/*.js': ['browserify'],
      'spec/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: ['babelify', 'stringify'],
      paths: ['node_modules', 'src/js']
    },

    reporters: ['progress']
  });
};
