var gulp = require('gulp');

var htmlGlob = 'src/index.html'

gulp.task('build:html', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('watch:html', ['build:html'], function() {
  gulp.watch(htmlGlob, ['build:html']);
});
