var gulp = require('gulp');
var del = require('del');
var PATH = require('../path');

gulp.task('clean', function() {
  del([PATH.PROD, PATH.BUILD])
  return;
});
