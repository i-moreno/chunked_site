const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sync = require("browser-sync").create();

gulp.task('copy-img', function () {
  return gulp.src('./src/assets/img/**/*.png')
    .pipe(gulp.dest('./build/assets/img'));
});

gulp.task('copy-css', function () {
  return gulp.src('./src/assets/css/*.*')
    .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('copy-fonts', function () {
  return gulp.src('./src/assets/fonts/*')
    .pipe(gulp.dest('./build/assets/fonts'))
});

gulp.task('copy-scripts', function () {
  return gulp.src('./src/assets/js/**/*')
    .pipe(gulp.dest('./build/assets/js'))
});

gulp.task('copy-scss', function () {
  return gulp.src('./src/assets/scss/*')
    .pipe(gulp.dest('./build/scss'))
});

gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build'));
});

gulp.task('build', gulp.series(
  'copy-img',
  'copy-css',
  'copy-fonts',
  'copy-scripts',
  // 'copy-scss',
  'minify'
));

gulp.task('dev-sync', () => {
  return sync.init({
    server: {
      baseDir: './build'
    }
  });
})
