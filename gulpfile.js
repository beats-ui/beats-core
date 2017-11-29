const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('sass:copy', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(gulp.dest('./build/scss'));
});

gulp.task('default', function () {
  gulp.watch('./src/**/*.scss', ['sass', 'sass:copy']);
});