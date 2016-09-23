var gulp = require('gulp');
var del = require('del');
var PATH = require('../path');


gulp.task('setProduction', function() {
  global.isProduction = true;
});

gulp.task('copyBuildFiles', function() {
  del(['../../docker/prod/web/code'], {force: true});
  gulp.src([PATH.BUILD + '/**/*']).pipe(gulp.dest('../../docker/prod/web/code'));
});

gulp.task('productionBuild', ['build'], function() {
  gulp.start('copyBuildFiles');
});

gulp.task('production', ['clean', 'setProduction', 'productionBuild']);
