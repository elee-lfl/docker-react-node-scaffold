var env = require('gulp-env');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var babel = require('babel-core/register');
var PATH = require('../path');

gulp.task('mocha', function() {
  env({
    vars: {
      PORT: 8081
    }
  });
  return gulp.src(PATH.TEST, { read: false })
      .pipe(mocha({
        bail: false,
        reporter: 'list',
        compilers: {
          js: babel
        }
      }))
      .on('error', gutil.log)
      // .once('end', function () {
      //   process.exit();
      // });
})
