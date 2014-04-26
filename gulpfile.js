var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('watch', function() {
    // Watch .js files
    gulp.watch('src//**/*.js', ['build']);
});

gulp.task('build', function() {
    gulp.src(['src/main.js'])
        .pipe(browserify())
        .pipe(gulp.dest('dist/'));
})