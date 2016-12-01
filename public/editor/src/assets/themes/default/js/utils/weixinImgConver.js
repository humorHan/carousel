/**
 * @date     2015/2/26
 * @author   Dolphin<dolphin.w.e@gmail.com>
 *
 * 从微信中复制图片的转换规则
 */

(function (UE, RCEditor) {
    'use strict';

    var editor = RCEditor.editor,
        utils = UE.utils;

    editor.addInputRule(function (root) {
        utils.each(root.getNodesByTagName('img'), function (img) {
            var src = img.attrs.src,
                fakeSrc = img.attrs['data-src'];

            if (!src && fakeSrc) {
                img.setAttr('src', fakeSrc);
                img.setStyle({
                    'height': 'auto !important',
                    'visibility': 'visible !important'
                });
            }
        });
    });
})(window.UE, window.RCEditor);