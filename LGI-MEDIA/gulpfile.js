"use strict";

const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./app/"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// CSS task
function css() {
  return gulp
    .src("./app/scss/**/main.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./app/css/"))
    .pipe(browserSync.stream());
}

// Watch files
function watchFiles() {
  gulp.watch("./app/scss/**/*", gulp.parallel(css, browserSyncReload));
	gulp.watch("./app/*.html", browserSyncReload);
}

// define complex tasks
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.css = css;
exports.watch = watch;
exports.default = watch;