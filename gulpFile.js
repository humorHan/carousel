//TODO 删除文件夹
//TODO

var gulp = require('gulp');
var path = require('path');
var webpack = require('webpack');
var gulpUtil = require('gulp-util');
var webpackConfig = require('./webpack-config.js');



gulp.task('publish-img',function(){
    return gulp.src(path.join(__dirname, '/img/*.*'))
        .pipe(gulp.dest(path.join(__dirname, '/bundle/img/')));
});

gulp.task('build', ['publish-img'], function (done) {
    webpack(webpackConfig(true, true), function(err, stats) {
        if (err) {
            throw new gulpUtil.PluginError('webpack', err);
        }
        gulpUtil.log('[webpack]', stats.toString({colors: true}));
        //done();
    });
});