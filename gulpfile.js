const gulp = require('gulp'),
    run = require('run-sequence'),
    ts  = require('gulp-typescript'),
    tsProject = ts.createProject('./src/tsconfig.json'),
    sourcemaps = require('gulp-sourcemaps'),
    clean = require('rimraf'),
    browserSync = require('browser-sync').create();

const dirs = {
    src: 'src',
    dist: 'public'
};

const tsFiles = {
    src: `${dirs.src}/**/*.ts`,
    dist: `${dirs.dist}/**/*.js`
}
var test = `ds`;
const htmlFiles = {
    src: `${dirs.src}/**/*.html`
}
const cssFiles = {
    src: `${dirs.src}/**/*.css`
}

const mockData = {
    src: [`${dirs.src}/**/*.json`, '!src/app/tsconfig.json']
}

gulp.task('default', function () {
    run('clean', 'html-copy', 'css-copy', 'ts-compile', 'json-copy', 'watch-changes');
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
        .pipe(gulp.dest(dirs.dist));
});

gulp.task('ts-compile', function () {
    console.log("Compile")
    gulp.src(tsFiles.src)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dirs.dist));
});

gulp.task('browsersync-connect', function () {
    return browserSync.init({
        server: {
            proxy: "http://127.0.0.1:8080/public",
        },
        files: [tsFiles.dist]
    });
});

gulp.task('watch-changes', function () {
    gulp.watch(tsFiles.src, ['ts-compile']);
    gulp.watch(htmlFiles.src, ['html-copy']);
    gulp.watch(cssFiles.src, ['css-copy']);
});

