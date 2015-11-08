var path = require('path');

var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var stringify = require('stringify');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');
var Server = require('karma').Server;

var jsGlob = 'app/client/js/**/*';
var specGlob = 'spec/**/*.js';

gulp.task('build:js', function () {
  browserify({
    entries: 'app/client/js/index.js',
    debug: true,
    paths: ['node_modules', 'app/client/js'],
    transform: [
      babelify,
      stringify(['.html'])
    ]
  })
  .bundle()
  .pipe(source('index.js'))
  .pipe(gulp.dest('build/js'));
});

gulp.task('lint:js', function () {
  return gulp.src(jsGlob + '.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('test:js', function(done) {
  var server = new Server({
    configFile: path.join(__dirname, '../karma.conf.js'),
    action: 'start'
  }, done);

  server.start();
});

gulp.task('watch:js', ['build:js'], function() {
  gulp.watch(jsGlob, ['build:js']);
});
