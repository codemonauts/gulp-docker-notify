var gulp = require('gulp');
var dockerNotify = require('../');

gulp.task("default", function () {
  gulp.src("../test/*.txt")
      .pipe(dockerNotify("Build completed", "<%= file.relative %>"))
      .pipe(gulp.dest('../test/dest'));
});
