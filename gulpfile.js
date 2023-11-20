const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao (callback) {
    setTimeout(function () {
        console.log('executando via gulp');
        callback();
    }, 2000)
}

function dizOi(callback) {
    setTimeout (function () {
        console.log('oi gulp');
        dizTchau();
        callback();
    }, 1000)
}

function dizTchau() {
    console.log('tchau gulp');
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.watch = function () {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false }, gulp.series(compilaSass));
}