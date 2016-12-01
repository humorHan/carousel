/**
 * @date     2015/2/10
 * @author   Dolphin<dolphin.w.e@gmail.com>
 * Javascript 文件引用
 */

var jsFiles =
    [
        'config.js',
        'utils/fixImgClick.js',
        'utils/innerText.js',
        'utils/linkConverter.js',
        'utils/linkEditor.js',
        'utils/autoSave.js',
        'utils/imgUploader.js',
        'utils/dragAndPaste.js',
        'utils/localImageFilter.js',
        'utils/weixinImgConver.js',
        'utils/imgFilter.js',
        'utils/errorHandler.js',
        'utils/io.js'
    ];

module.exports = jsFiles.map(function (file) {
    return '<%= dir.src %><%= dir.js %>/' + file;
});