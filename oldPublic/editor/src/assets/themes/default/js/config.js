/**
 * @date     2015/2/10
 * @author   Dolphin<dolphin.w.e@gmail.com>
 * UEditor 的配置选项
 */

(function (window) {
    'use strict';

    // 编辑器 ID
    var editorID = 'rich-editor';

    // 主题配置
    // 若修改此项，则对应文件目录名称和 Gruntfile.js 选项也要变更
    var theme = {
        name: 'default',
        path: 'assets/themes/'
    };

    // 配置上传 URL
    var urlConfig = {
        token: '/api/v2/others/upload-token', // 获取 Token 的接口
        upload: 'http://upload.qiniu.com', // 上传接口
        imgHost: 'http://source.soyyin.com/' // 图片 host
    };

    // 配置参考 config.example.js
    var config = {
        UEDITOR_HOME_URL: location.href,

        toolbars: [
            [
                'fullscreen',
                'undo',
                'redo',
                '|',
                'paragraph',
                'fontsize',
                '|',
                'blockquote',
                'horizontal',
                '|',
                'insertorderedlist',
                'insertunorderedlist',
                '|',
                'selectall',
                'cleardoc',
                'removeformat',
                '|',
                'imgupload',
            ],
            [
                'bold',
                'italic',
                'underline',
                'strikethrough',
                '|',
                'forecolor',
                'backcolor',
                '|',
                'rowspacingtop',
                'rowspacingbottom',
                'lineheight',
                '|',
                'justifyleft',
                'justifycenter',
                'justifyright',
                'justifyjustify',
                '|',
                'imagenone',
                'imageleft',
                'imagecenter',
                'imageright'
            ]
        ],
        lang: "zh-cn", // 语言文件已合并入 UEditor
        charset: "utf-8",
        enableContextMenu: false, // 关闭不友好的右键菜单
        elementPathEnabled: false,
        wordCount: false,
        imagePopup: false,
        theme: theme.name,
        themePath: theme.path,
        iframeCssUrl: theme.path + theme.name + '/css/iframe.css',
        insertorderedlist: {
            'decimal': '',
            'lower-alpha': '',
            'lower-roman': '',
            'upper-alpha': '',
            'upper-roman': ''
        },
        insertunorderedlist: {
            'circle': '',
            'disc': '',
            'square': ''
        }
    };

    window.RCEditor = {
        editor: UE.getEditor(editorID, config),
        urlConfig: urlConfig,
        theme: theme,
        imgWidth: 838
    };
})(window);