/**
 * @date     2015/2/18
 * @author   Dolphin<dolphin.w.e@gmail.com>
 *
 * 出错提示
 */

(function (RCEditor, document) {
    'use strict';

    var editor = RCEditor.editor,
        innerText = RCEditor.innerText;

    editor.ready(function () {
        var timer,
            container = editor.ui.getDom('toolbarbox'),
            errTip = document.createElement('div');

        errTip.id = 'editor-error';
        container.appendChild(errTip);

        editor.addListener('errormsg', function (type, msg) {
            if (!msg) {
                return;
            }
            timer && clearTimeout(timer);

            innerText(errTip, msg);
            errTip.className = 'show';

            timer = setTimeout(function () {
                errTip.className = '';
                timer = undefined;
            }, 2500);
        });
    });

})(window.RCEditor, document);