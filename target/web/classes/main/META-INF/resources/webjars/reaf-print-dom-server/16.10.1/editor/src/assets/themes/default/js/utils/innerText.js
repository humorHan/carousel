/**
 * @date     2015/2/16
 * @author   Dolphin<dolphin.w.e@gmail.com>
 *
 */

(function (UE, RCEditor) {
    'use strict'

    var method = UE.browser.ie9below ? 'innerText' : 'textContent';

    /**
     * 设置元素内部文字
     * @param {HTMLElement} elem: 目标元素
     * @param {String} [text]: 要设置的内容
     *
     * @return {String | null}: 当不传入 text 时，返回元素内容
     */
    RCEditor.innerText = function (elem, text) {
        if (text === undefined) {
            return elem[method];
        }

        elem[method] = text;
    };
})(window.UE, window.RCEditor);