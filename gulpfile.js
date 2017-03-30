// including plugins
var gulp = require('gulp')
, uglify = require("gulp-uglify")
, concat = require("gulp-concat");
 
// task
gulp.task('minify-js', function () {
    gulp.src('./src/*/*.js') // path to your files
    .pipe(uglify())// minify and strip comments from the code"
    .pipe(concat('angular-base64.min.js'))  // concat and name it
    .pipe(gulp.dest('./'));
});

gulp.task('concat-js', function () {
    gulp.src('./src/*/*.js') // path to your files
    .pipe(concat('angular-base64.js'))  // concat and name it "concat.js"
    .pipe(gulp.dest('./'));
});