const gulp = require('gulp');

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