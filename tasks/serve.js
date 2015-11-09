var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('serve', ['watch'], function() {
  nodemon({
    script: 'app/server/index.js',
    ext: 'js html',
    ignore: ['build/**', 'app/client/**', 'node_modules/**']
  });
});
