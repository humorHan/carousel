/**
 * @date     2015/2/10
 * @author   Dolphin<dolphin.w.e@gmail.com>
 * UEditor 文件引用
 *
 * '@refactor: *' 表示重构文件
 * '->' 表示需要同时引入的文件
 *
 * 百毒代码伤身，重构需谨慎
 */

var ueditorFiles =
    [
        'editor.js',                                // 初始化
                        /*========Start Core=========*/
        'core/browser.js',                          // 浏览器判断模块
        'core/utils.js',                            // 工具函数包
        'core/EventBase.js',                        // 事件基类
        'core/dtd.js',                              // HTML 语义化的体现类
        'core/domUtils.js',                         // DOM 操作工具包
        'core/Range.js',                            // Range 对象封装
        'core/Selection.js',                        // 选区集合

        //'core/Editor.js',                         // 编辑器主类
        '@refactor: core/Editor.js',

        'core/Editor.defaultoptions.js',            // 默认设置
        'core/loadconfig.js',                       // 服务器配置加载
        'core/ajax.js',                             // ajax 模块
        'core/filterword.js',                       // 字符过滤
        'core/node.js',                             // 模拟的节点类
        'core/htmlparser.js',                       // HTML 字符串转换成 uNode 节点
        'core/filternode.js',                       // 节点过滤
        'core/plugin.js',                           // 插件注册
        'core/keymap.js',                           // 按键映射
        'core/localstorage.js',                     // 本地存储

                        /*========Start Plugin======*/
        'plugins/defaultfilter.js',                 // 默认过滤规则
        'plugins/inserthtml.js',                    // 插入 HTML 代码，粘贴支持

        //'plugins/autotypeset.js',                 // 自动排版
        //'plugins/autosubmit.js',                  // CTRL+ENTER 提交
        //'plugins/background.js',                  // 背景设置支持 -> dialogs/background/

        'plugins/image.js',                         // 图片插入与排版
        //'plugins/justify.js',                       // 文字对齐方式
        '@refactor: plugins/justify.js',
        'plugins/font.js',                          // 文字样式

        //'plugins/link.js',                        // 链接编辑 -> dialogs/link/
        //'plugins/iframe.js',                      // 插入框架
        //'plugins/scrawl.js',                      // 涂鸦功能 -> dialogs/scrawl/

        'plugins/removeformat.js',                  // 清除格式
        'plugins/blockquote.js',                    // 添加引用

        //'plugins/convertcase.js',                 // 大小写转换
        //'plugins/indent.js',                      // 改变首行缩进
        //'plugins/print.js',                       // 打印组件
        //'plugins/preview.js',                     // 预览组件

        'plugins/selectall.js',                     // 全选支持
        'plugins/paragraph.js',                     // 插入标题

        //'plugins/directionality.js',              // 文字方向

        'plugins/horizontal.js',                    // 水平线插入

        //'plugins/time.js',                        // 时间插入

        'plugins/rowspacing.js',                    // 段落间距
        'plugins/lineheight.js',                    // 行高

        //'plugins/insertcode.js',                  // 插入代码

        'plugins/cleardoc.js',                      // 清空文档

        //'plugins/anchor.js',                      // 插入锚点
        //'plugins/wordcount.js',                   // 字数统计
        //'plugins/pagebreak.js',                   // 分页
        //'plugins/wordimage.js',                   // 解析本地图片并提示 -> dialogs/wordimage.
        //'plugins/dragdrop.js',                    // 不知道是做什么的

        'plugins/undo.js',                          // 历史操作撤销

        //'plugins/copy.js',                        // 复制（浏览器支持不好）

        'plugins/paste.js',                         // 粘贴
        'plugins/puretxtpaste.js',                  // 粘贴为纯文本
        'plugins/list.js',                          // 列表（有点过于繁杂）

        //'plugins/source.js',                      // 源码编辑模式

        'plugins/enterkey.js',                      // 设置回车标签
        'plugins/keystrokes.js',                    // 特殊按键处理
        //'plugins/fiximgclick.js',                 // 图片大小调整

        //'plugins/autolink.js',                    // 自动转换链接（实际用起来不友好）

        'plugins/autoheight.js',                    // 编辑器动态调整高度
        'plugins/autofloat.js',                     // 工具栏悬浮固定

        //'plugins/video.js',                       // 插入视频 -> diialogs/video
        //'plugins/table.core.js',                  // 表格组件
        //'plugins/table.cmds.js',
        //'plugins/table.action.js',
        //'plugins/table.sort.js',

        //'plugins/contextmenu.js',                 // 右键菜单
        //'plugins/shortcutmenu.js',                // 弹出菜单

        'plugins/basestyle.js',                     // B、I、sub、super命令支持

        //'plugins/elementpath.js',                 // 显示元素路径
        //'plugins/formatmatch.js',                 // 格式刷
        //'plugins/searchreplace.js',               // 搜索替换 -> dialogs/searchreplace/
        //'plugins/customstyle.js',                 // 自定义样式
        //'plugins/catchremoteimage.js',            // 远程图片转换本地
        //'plugins/snapscreen.js',                  // 截屏

        'plugins/insertparagraph.js',               // 插入段落

        //'plugins/webapp.js',                      // 百度应用支持 -> dialogs/webapp/
        //'plugins/template.js',                    // 模板支持 -> dialogs/template/
        //'plugins/music.js',                       // 插入音乐 -> dialogs/music/
        //'plugins/autoupload.js',                  // 拖放、粘贴上传
        //'plugins/autosave.js',                    // 自动保存
        //'plugins/charts.js',                      // 数据图表
        //'plugins/section.js',                     // 目录大纲支持
        //'plugins/simpleupload.js',                // 图片上传
        //'plugins/serverparam.js',                 // 服务器配置
        //'plugins/insertfile.js',                  // 插入附件

                        /*========Start UI=========*/
        'ui/ui.js',
        'ui/uiutils.js',
        'ui/uibase.js',
        'ui/separator.js',

        //'ui/mask.js',

        'ui/popup.js',
        'ui/colorpicker.js',

        //'ui/tablepicker.js',
        'ui/stateful.js',

        //'ui/button.js',
        //'ui/splitbutton.js',
        '@refactor: ui/button.js',
        '@refactor: ui/splitbutton.js',

        'ui/colorbutton.js',

        //'ui/tablebutton.js',
        //'ui/autotypesetpicker.js',
        //'ui/autotypesetbutton.js',
        //'ui/cellalignpicker.js',

        'ui/pastepicker.js',
        'ui/toolbar.js',
        'ui/menu.js',
        'ui/combox.js',

        //'ui/dialog.js',

        'ui/menubutton.js',
        'ui/multiMenu.js',
        'ui/shortcutmenu.js',
        'ui/breakline.js',

        //'ui/message.js',

                        /*========Start Adapter======*/
        //'adapter/editorui.js',
        //'adapter/editor.js',
        '@refactor: adapter/editorui.js',
        '@refactor: adapter/editor.js',

        //'adapter/message.js',
        //'adapter/autosave.js',

        '@refactor: lang/zh-cn.js'
    ];

var basePath = '<%= dir.src %><%= dir.vendor %>/ueditor/_src/',
    refactorPath = '<%= dir.src %><%= dir.js %>/ueditor/refactor/';

module.exports = ueditorFiles.map(function (file) {
    if (file.indexOf('@refactor') !== -1) {
        return file.replace('@refactor: ', refactorPath);
    }
    return basePath + file;
});