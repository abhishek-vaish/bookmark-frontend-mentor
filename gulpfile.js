const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compilesass() {
  return gulp
    .src("./scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
}

function watchTask() {
  gulp.watch("./scss/*.scss", compilesass);
}

exports.default = gulp.series(compilesass, watchTask);
