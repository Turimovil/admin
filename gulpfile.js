var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['start', 'watch'], function() {
    console.log('Building turimovil admin');
});

gulp.task('start', function () {
    nodemon({
        script: 'index.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('watch', function () {
    //gulp.watch('./scss/*.scss', ['compileCss', 'cleanFiles']);
    //gulp.watch(['./js-src/*.js', './js-src/**/*.js'], ['compileJs', 'cleanFiles']);
    gulp.watch(['./**/*.js', './*.js'], ['start'])
});