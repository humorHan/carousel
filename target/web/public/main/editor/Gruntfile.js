/**
 * @date     2015/2/7
 * @author   Dolphin<dolphin.w.e@gmail.com>
 */

'use strict';

// UEditor 资源引用
var ueditorFiles = require('./config/ueditorFiles');

// js 文件引用
var jsFiles = require('./config/jsFiles');

module.exports = function (grunt) {
    grunt.initConfig({
        dir: {
            src: 'src',
            build: 'build',
            release: 'release',
            assets: '/assets',
            vendor: '<%= dir.assets %>/vendor',
            theme: '<%= dir.assets %>/themes/default',
            css: '<%= dir.theme %>/css',
            js: '<%= dir.theme %>/js',
            scss: '<%= dir.theme %>/scss',
            fonts: '<%= dir.theme %>/fonts',
            images: '<%= dir.theme %>/images'
        },

        tag: {
            banner: [
                '/*!',
                ' * <%= pkg.name %>',
                ' * <%= pkg.description %>',
                ' * <%= pkg.url %>',
                ' * @author <%= pkg.author.name %> <%= pkg.author.url %>',
                ' * @version <%= pkg.version %>',
                ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.',
                ' */\n'
            ].join('\n')
        },

        // 获取信息
        pkg: grunt.file.readJSON('package.json'),

        // 清除残留
        clean: {
            build: {
                files: [{
                    dot: true,
                    src: ['<%= dir.build %>']
                }]
            },
            release: {
                files: [{
                    dot: true,
                    src: ['<%= dir.release %>']
                }]
            }
        },

        // scss 编译
        sass: {
            build: {
                options: {
                    style: 'expanded',
                    sourcemap: 'auto'
                },
                files: [{
                    expand: true,
                    cwd: '<%= dir.src %><%= dir.scss %>',
                    src: '*.scss',
                    dest: '<%= dir.build %><%= dir.css %>',
                    ext: '.css'
                }]
            }
        },

        // prefix
        autoprefixer: {
            options: {
                map: true
            },
            build: {
                src: '<%= dir.build %><%= dir.css %>/*.css'
            }
        },

        // 合并文件
        concat: {
            options: {
                stripBanners: true,
                sourceMap: true,
                nonull: true,
                separator: ';'
            },
            build: {
                src: jsFiles,
                dest: '<%= dir.build %><%= dir.js %>/editor.js'
            },
            ueditor: {
                options: {
                    banner: '(function(){\n\n',
                    footer: '\n\n})();\n',
                    process: function (src, s) {
                        var filename = s.substr(s.indexOf('/') + 1);
                        return '// ' + filename + '\n' + src.replace('/_css/', '/css/') + '\n';
                    }
                },
                src: ueditorFiles,
                dest: '<%= dir.build %><%= dir.vendor %>/js/ueditor.js'
            }
        },

        // 添加版本号
        cacheBust: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                rename: false,
                length: 8
            },
            assets: {
                files: [{
                    src: [
                        '<%= dir.build %>/*.html',
                        '<%= dir.build %><%= dir.css %>/*.css',
                        '<%= dir.build %><%= dir.js %>/*.js'
                    ]
                }]
            }
        },

        // 复制文件
        copy: {
            build: {
                files: [{
                    expand: true,
                    cwd: '<%= dir.src %>',
                    src: ['*.html'],
                    dest: '<%= dir.build %>'
                }, {
                    expand: true,
                    filter: 'isFile',
                    cwd: '<%= dir.src %><%= dir.fonts %>',
                    src: ['*.{svg,eot*,ttf,woff,otf}'],
                    dest: '<%= dir.build %><%= dir.fonts %>'
                }, {
                    expand: true,
                    cwd: '<%= dir.src %><%= dir.images %>',
                    src: ['*.*'],
                    dest: '<%= dir.build %><%= dir.images %>'
                }, {
                    expand: true,
                    cwd: '<%= dir.src %><%= dir.vendor %>/js-base64',
                    src: ['base64.js'],
                    dest: '<%= dir.build %><%= dir.vendor %>/js'
                }]
            },
            release: {
                files: [{
                    expand: true,
                    cwd: '<%= dir.build %>',
                    src: [
                        '**',
                        '!**/*.map'
                    ],
                    dest: '<%= dir.release %>'
                }]
            }
        },

        // 压缩 js
        uglify: {
            release: {
                options: {
                    banner: '<%= tag.banner %>'
                },
                files: [{
                    expand: true,
                    cwd: '<%= dir.release %><%= dir.js %>',
                    src: '*.js',
                    dest: '<%= dir.release %><%= dir.js %>'
                }]
            },
            vendor: {
                expand: true,
                cwd: '<%= dir.release %><%= dir.vendor %>/js',
                src: '*.js',
                dest: '<%= dir.release %><%= dir.vendor %>/js'
            }
        },

        // 压缩 css
        cssmin: {
            release: {
                files: [{
                    expand: true,
                    cwd: '<%= dir.release %><%= dir.css %>',
                    src: '*.css',
                    dest: '<%= dir.release %><%= dir.css %>'
                }]
            }
        },

        // 压缩图片
        imagemin: {
            build: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= dir.release %><%= dir.images %>',
                    src: '**/*.{jpg,jpeg,png,gif,svg}',
                    dest: '<%= dir.release %><%= dir.images %>'
                }]
            }
        }
    });

    // 创建任务
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // 替换静态资源
    grunt.registerTask('replaceuri', 'Replace source pathes in index.html', function () {
        var path = require('path'),
            buildJsFile = path.resolve('build/assets/themes/default/js/editor.js'),
            jsFile = path.resolve('release/assets/themes/default/js/editor.js');
            
        var buildJsContent = grunt.file.read(buildJsFile),
            jsContent = grunt.file.read(jsFile);
        
        grunt.file.write(
            buildJsFile,
            buildJsContent.replace('assets/themes/', '/assets/editor/build/assets/themes/')
        );

        grunt.file.write(
            jsFile,
            jsContent.replace('assets/themes/', '/assets/editor/release/assets/themes/')
        );
    });

    // build
    grunt.registerTask('build', 'Compile everything', [
        'clean:build',
        'sass:build',
        'concat',
        'copy:build',
        'cacheBust',
        'autoprefixer:build'
    ]);

    // release
    grunt.registerTask('release', 'Build, and compress everything', [
        'clean:release',
        'build',
        'copy:release',
        'cssmin',
        'uglify',
        'imagemin',
        'replaceuri'
    ]);

    grunt.registerTask('default', 'Compile scss and js', [
        'sass:build',
        'concat:build'
    ]);
};