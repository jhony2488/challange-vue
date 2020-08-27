const gulp = require('gulp'),
  imagemin = require('gulp-imagemin')

gulp.task('img', () => {
  const directoryProjectSrc = 'src/assets/images/**',
    directoryProjectDist = 'dist/assets/images/**'
  gulp
    .src(directoryProjectSrc)
    .pipe(imagemin())
    .pipe(gulp.dest(directoryProjectSrc))
  return gulp
    .src(directoryProjectDist)
    .pipe(imagemin())
    .pipe(gulp.dest(directoryProjectDist))
})
gulp.task('all', gulp.series('img'))
gulp.task('default', () => {
  const files = ['./src/assets/images/**']
  gulp.watch(files, gulp.series('img'))
})
