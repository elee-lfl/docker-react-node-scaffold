var env = require('gulp-env');
var gulp = require('gulp');
var PATH = require('../path');
var server = require('gulp-express');

gulp.task('serve', ['compile', 'mocha'], function() {
  env({
    vars: {
      PORT: 8080
    }
  });
  server.run([PATH.BUILD + '/' + PATH.APPNAME]);
  gulp.watch([PATH.JS.SRC], ['compile']);
  gulp.watch([PATH.BUILD + '/' + PATH.APPNAME], [server.run]);
  gulp.watch([PATH.TEST], ['mocha']);
});
