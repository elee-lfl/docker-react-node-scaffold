var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var babel = require('babel-core/register');
var PATH = require('../path');

gulp.task('mocha', function() {

  return gulp.src([PATH.TESTS.SRC], { read: false })
      .pipe(mocha({
        reporter: 'list',
        compilers: {
          js: babel
        }
      }))
      .on('error', gutil.log);
});
