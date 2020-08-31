const gulp = require("gulp"),
  imagemin = require("gulp-imagemin"),
  clean = require("gulp-clean");

gulp.task("img", () => {
  const directoryProjectDist = "dist/assets/images/**";

  return gulp
    .src(directoryProjectDist)
    .pipe(imagemin())
    .pipe(gulp.dest(directoryProjectDist));
});
gulp.task("clean", () => {
  const srcClean = ["./dist/js/*.map"];
  return gulp.src(srcClean, { read: false }).pipe(clean());
});
gulp.task("all", gulp.series("img", "clean"));
gulp.task("default", () => {
  const files = ["./src/assets/images/**"];
  gulp.watch(files, gulp.series("img"));
});
