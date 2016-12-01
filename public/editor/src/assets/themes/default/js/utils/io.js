/**
 * @date     2015/2/18
 * @author   Dolphin<dolphin.w.e@gmail.com>
 *
 * 编辑器内容设置与导出
 */

(function (RCEditor) {
    'use strict';

    var editor = RCEditor.editor;

    /**
     * 设置编辑器内容
     * @param {String} content: 目标内容
     */
    var setContent = function (content) {
        if (!content) {
            return;
        }

        content = content.toString();

        if (editor.isReady) {
            return editor.setContent(content);
        }

        editor.ready(function () {
            editor.setContent(content);
        });
    };

    /**
     * 获得编辑器内容
     *
     * @return {String}
     */
    var getContent = function () {
        return editor.getContent();
    };

    RCEditor.setContent = setContent;
    RCEditor.getContent = getContent;
})(window.RCEditor);
