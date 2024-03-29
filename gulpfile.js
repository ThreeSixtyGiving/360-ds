'use strict';

const gulp         = require('gulp');
const fractal      = require('./fractal.js');
const logger       = fractal.cli.console;
const sass         = require('gulp-sass');
const sassGlob     = require('gulp-sass-glob');
const plumber      = require('gulp-plumber');
const notify       = require('gulp-notify');
const path         = require('path');
const concat       = require('gulp-concat');
const argv         = require('yargs').argv;


function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            title: errTitle || "Error running Gulp",
            message: "Error: <%= error.message %>",
        })
    })
}

gulp.task('sass', function() {
    return gulp.src('src/project-styles/360-ds/main.scss')
    .pipe(customPlumber('Error running Sass'))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(gulp.dest('public/components/preview/assets/css'))
})

gulp.task('images', function() {
    return gulp.src('assets/images/**/*.*')
    .pipe(gulp.dest('public/images/'))
    .pipe(gulp.dest('public/components/preview/assets/images/'))
})

gulp.task('js', function() {
    return gulp.src(['assets/js/*.js', 'src/components/**/*.js'])
    .pipe(customPlumber('Error running Javascript bundler'))
    .pipe(concat('components.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(gulp.dest('public/components/preview/assets/js'))
})

gulp.task('watch', gulp.series('sass', 'js', function () {
   gulp.watch([
        'src/components/_preview.scss',
        'src/components/**/*.scss',
        'assets/scss/**/*.scss'
        ], gulp.series('sass'))

    gulp.watch([
        'src/components/_preview.js',
        'src/components/**/*.js'
        ], gulp.series('js'))
}))

gulp.task('fractal:start', gulp.series(function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}.`);
    });
}));

gulp.task('fractal:build', function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});

gulp.task('build', gulp.series('sass', 'images', 'js', 'fractal:build'));
gulp.task('default', gulp.series('sass', 'images', 'js', 'fractal:start', 'watch'));


const project = (argv.project === undefined) ? '360-ds/' : argv.project;
const outputPath = (argv.path === undefined) ? `build/${project}/css/` : argv.path;
gulp.task('compile-sass', function() {
    return gulp.src(`src/project-styles/${project}/main.scss`)
    .pipe(customPlumber('Error running Sass'))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest(outputPath))
})
