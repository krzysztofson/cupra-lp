const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('scss', function () {
    return gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
});

gulp.task('default', gulp.series('scss', 'watch'));
