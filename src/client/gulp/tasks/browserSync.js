var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var gulp = require('gulp');
var proxy = require('http-proxy-middleware');
var PATH = require('../path');

var apiProxy = proxy('/api', {
  target: 'http://server:8080',
  logLevel: 'debug',
});

gulp.task('browserSync', ['build'], function() {
  browserSync.init([PATH.BUILD + '/**'], {
    server: {
      baseDir: [PATH.BUILD, PATH.SRC],
      port: 3000,
      middleware: [historyApiFallback(), apiProxy],
    },
  });
});
