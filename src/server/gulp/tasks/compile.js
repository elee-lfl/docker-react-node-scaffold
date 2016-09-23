var gulp = require('gulp');
var babel = require('gulp-babel');
var PATH = require('../path');

gulp.task('compile', function() {
  return gulp.src(PATH.JS.SRC)
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest(PATH.BUILD))
});
