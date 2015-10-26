var gulp = require('gulp');
var path = require('path');

var imgGlob = 'src/img/**/*';

gulp.task('build:img', function () {
  return gulp.src(imgGlob)
    .pipe(gulp.dest('build/img'));
});

gulp.task('watch:img', ['build:img'], function () {
  gulp.watch(imgGlob, ['build:img']);
});
