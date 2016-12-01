/**
 * Created by humorHan on 16/11/3.
 */
var gulp = require('gulp');
var path = require('path');
var webpack = require('webpack');
var gulpUtil = require('gulp-util');
var webpackConfig = require('./webpack-config.js');
var del = require('del');
var vinylPaths = require('vinyl-paths');

//发布图片资源--开发
gulp.task('publish-img-dev', function () {
    return gulp.src(path.join(__dirname, '/src/img/**/*.*'))
        .pipe(gulp.dest(path.join(__dirname, '/public/img/')));
});

//开发
gulp.task('bundle', ['publish-img-dev'], function (done) {
    webpack(webpackConfig(true, true), function (err, stats) {
        if (err) {
            throw new gulpUtil.PluginError('webpack', err);
        }
        gulpUtil.log('[webpack]', stats.toString({colors: true}));
        //done();
    });
});

//线上
gulp.task('package', ['publish-img'], function (done) {
    webpack(webpackConfig(false, false), function (err, stats) {
        if (err) {
            throw new gulpUtil.PluginError('webpack', err);
        }
        gulpUtil.log('[webpack]', stats.toString({colors: true}));
        //done();
    });
});

//发布图片资源--线上
gulp.task('publish-img', ['old'], function () {
    return gulp.src(path.join(__dirname, '/src/img/**/*.*'))
        .pipe(gulp.dest(path.join(__dirname, '/public/img/')));
});

//处理早期版本资源文件以及jq
gulp.task('old', ['static-js'], function () {
    return gulp.src(path.join(__dirname, '/oldPublic/**/*.*'))
        .pipe(gulp.dest(path.join(__dirname, '/public/')));
});

//发布静态js资源
gulp.task('static-js', ['del'], function () {
    return gulp.src([path.join(__dirname, '/src/dep/jquery-2.2.4.js'), path.join(__dirname, '/src/dep/jquery-2.2.4.min.js')])
        .pipe(gulp.dest(path.join(__dirname, '/public/js/')));
});

//清理文件夹
gulp.task('del', function () {
    return gulp.src(path.join(__dirname, '/public'), {read: false})
        .pipe(vinylPaths(del));
});
