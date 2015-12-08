const gulp = require('gulp'),
    run = require('run-sequence'),
    ts  = require('gulp-typescript'),
    tsProject = ts.createProject('./src/tsconfig.json'),
    sourcemaps = require('gulp-sourcemaps'),
    clean = require('rimraf');

const dirs = {
    src: 'src',
    dist: 'public'
};

const tsFiles = {
    src: `${dirs.src}/**/*.ts`,
    dist: `${dirs.dist}/**/*.js`
}
const htmlFiles = {
    src: `${dirs.src}/**/*.html`,
    dist: `${dirs.dist}/**/*.html`
}
const cssFiles = {
    src: `${dirs.src}/**/*.css`,
    dist: `${dirs.dist}/**/*.css`
}

const mockData = {
    src: [`${dirs.src}/mockdata/*.json`],
    dist: `${dirs.dist}/mockdata/`
}

gulp.task('default', function () {
    run('serve');
});

gulp.task('build', function (cb) {
    run('clean', 'html-copy', 'css-copy', 'ts-compile', 'json-copy', cb);
});

gulp.task('serve', ['build'], function () {
    run('watch-changes', 'server');
});

gulp.task('clean', function (cb) {
    clean(dirs.dist, cb);
});

gulp.task('html-copy', function() {
    gulp.src(htmlFiles.src)
        .pipe(gulp.dest(dirs.dist));
});

gulp.task('css-copy', function() {
    gulp.src(cssFiles.src)
        .pipe(gulp.dest(dirs.dist));
});

gulp.task('json-copy', function () {
    gulp.src(mockData.src)
        .pipe(gulp.dest(mockData.dist));
});

gulp.task('ts-compile', function () {
    gulp.src(tsFiles.src)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dirs.dist));
});
gulp.task('server', function () {
    var liveServer = require("live-server");
    var params = {
        open: '/public',
        ignore: 'src'
    };
    liveServer.start(params);
});

gulp.task('watch-changes', function () {
    gulp.watch(tsFiles.src, ['ts-compile']);
    gulp.watch(htmlFiles.src, ['html-copy']);
    gulp.watch(cssFiles.src, ['css-copy']);
});
