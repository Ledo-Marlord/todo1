var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-ruby-sass'),
  inject = require('gulp-inject');

gulp.task('sass', function () {
  return sass('public/css/')
    .pipe(gulp.dest('public/css'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  gulp.watch('public/css/', ['sass']);
  gulp.watch('public/assets/modules.html', ['injectModules']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'server.js',
    ext: 'js handlebars coffee'
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed(__dirname);
    }, 500);
  });
});

gulp.task('default', [
  'sass',
  'develop',
  'watch'
]);
