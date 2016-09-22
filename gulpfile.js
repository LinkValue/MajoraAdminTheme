'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: './',
      index: 'index.html'
  });

  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))

  .pipe(gulp.dest('./dist/css/'))
  .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
