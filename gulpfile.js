/// <binding BeforeBuild='clean, min, sass' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

"use strict";


var gulp = require('gulp'),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    jsminify = require('gulp-minify'),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass");

var paths = {
    webroot: "./build/"
};

paths.js = paths.webroot + "**/*.js";
paths.minJs = paths.webroot + "**/*.min.js";
paths.concatJsDest = paths.webroot + "js/site.min.js";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean", ["clean:js"]);
gulp.task("min:js", function () {

    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(jsminify({
            ext: {
                src: ".js",
                min: ".min.js"
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '.min.js', '-min.js']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js"]);

gulp.task("sass", function () {
    return gulp.src(paths.sassStyles, {base: "."})
        .pipe(sass())
        .pipe(gulp.dest("."));
});

