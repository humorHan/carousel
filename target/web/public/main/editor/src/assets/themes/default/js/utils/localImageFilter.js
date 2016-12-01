/**
 * @date     2015/2/18
 * @author   Dolphin<dolphin.w.e@gmail.com>
 *
 * 过滤 Word 中粘贴的本地图片
 */

(function (UE, RCEditor) {
    'use strict';

    var editor = RCEditor.editor,
        utils = UE.utils,
        errTip = RCEditor.theme.path + RCEditor.theme.name + '/images/local-image.jpg';

    editor.addInputRule(function (root) {
        utils.each(root.getNodesByTagName('img'), function (img) {
            var src = img.attrs.src;

            if (src && src.match(/^(?:(file:\/+))/i)) {
                img.setAttr({
                    src: errTip,
                    _src: errTip
                });

                editor.fireEvent('errormsg', '包含本地图片，请重新上传！');
            }
        });
    });
})(window.UE, window.RCEditor);