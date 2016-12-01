/**
 * 修复chrome下图片不能点击的问题
 * 来自 plugins/fiximgclick.js
 */

(function (UE, RCEditor) {
    'use strict';

    var dom = UE.dom,
        browser = UE.browser,
        editor = RCEditor.editor;

    if (browser.webkit) {
        editor.addListener('click', function (type, event) {
            var target = event.target;
            if (target.tagName == 'IMG') {
                var range = editor.selection.getRange();
                range.selectNode(target).select();
            }
        });
    }
})(window.UE, window.RCEditor);