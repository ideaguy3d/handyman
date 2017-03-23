/**
 * Created by Julius Alvarado on 3/22/2017.
 */

(function(){
    "use strict";

    var gulp = require('gulp'),
        sass = require ('gulp-sass'),
        styleSource = 'assets/**/*.scss';

    gulp.task('default', function(){
        gulp.watch(styleSource, ['jstyles']);
    });

    gulp.task('jstyles', function(){
        gulp.src(styleSource)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./assets'));
    });
}());

//