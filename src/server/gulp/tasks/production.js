var gulp = require('gulp');
var PATH = require('../path');

gulp.task('buildFiles', ['compile'], function() {
  gulp.src(['package.json']).pipe(gulp.dest(PATH.BUILD));
})

gulp.task('buildProduction', ['buildFiles'], function() {
  gulp.src([PATH.BIULD + '/*']).pipe(gulp.dest(PATH.PROD));
});

gulp.task('production', ['clean'], function() {
  gulp.start('buildProduction');
});
