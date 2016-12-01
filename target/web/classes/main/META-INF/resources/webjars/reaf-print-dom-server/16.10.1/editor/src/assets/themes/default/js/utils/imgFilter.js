/**
 * @date     2015/3/5
 * @author   Dolphin<dolphin.w.e@gmail.com>
 * 过滤图片的 style 属性
 */

(function(UE, RCEditor) {
    'use strict';

    var editor = RCEditor.editor,
        utils = UE.utils;

    editor.addInputRule(function (root) {
        utils.each(root.getNodesByTagName('img'), function (img) {
            img.setStyle({
                width: 'auto',
                height: 'auto',
                'max-width': '100%'
            });
        });
    });
})(window.UE, window.RCEditor);
