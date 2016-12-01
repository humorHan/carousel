/**
 * @date     2015/2/14
 * @author   Dolphin<dolphin.w.e@gmail.com>
 * UEditor 链接编辑功能
 */

(function (UE, RCEditor, document) {
    'use strict';

    var utils = UE.utils,
        editor = RCEditor.editor,
        domUtils = UE.dom.domUtils,
        innerText = RCEditor.innerText;

    editor.ready(function () {
        var container = editor.ui.getDom(),
            tooltip = document.createElement('div'),
            linkEditor = document.createElement('div'),
            containerOffset = domUtils.getXY(container),
            iframeOffset = domUtils.getXY(editor.iframe);

        // tooltip 状态
        // hide: 隐藏
        // show: 显示信息，但隐藏编辑框
        // show editor-open: 显示信息与编辑框
        tooltip.className = 'hide';
        tooltip.id = 'link-editor-tip';
        linkEditor.id = 'link-editor';

        // 降低 iframeholder 的层叠位置
        // 以便滚动时提示框不会高于工具栏
        editor.ui.getDom('iframeholder').style.zIndex = 'auto';

        // 对应的样式在 scss/partials/_linkEditor.scss

        tooltip.innerHTML = [
            '<div id="info-layer">',
            '链接：<a id="link-info" target="_blank"></a>',
            '<button id="open-editor">修改</button>',
            '<button id="remove-link">移除</button>',
            '</div>'
        ].join('');

        linkEditor.innerHTML = [
            '<div class="link-editor-layer">',
            '<label for="link-address">链接地址：</label>',
            '<input id="link-address" type="text">',
            '</div><div class="link-editor-layer">',
            '<label for="link-content">显示文字：</label>',
            '<input id="link-content" type="text">',
            '</div>',
            '<button id="link-edit-save">保存</button>',
            '<button id="link-edit-cancel">取消</button>'
        ].join('');

        var linkInfo = tooltip.querySelector('#link-info'),
            linkAddress = linkEditor.querySelector('#link-address'),
            linkContent = linkEditor.querySelector('#link-content');

        tooltip.appendChild(linkEditor);
        container.appendChild(tooltip);

        /**
         * 剪短长文本
         * @param {String} str: 目标文本
         * @return {String} 修改后的文本
         */
        var shortStr = function (str) {
            return str.length > 25 ? str.slice(0, 22) + '...' : str;
        }

        /**
         * @constructor
         * 创建提示框
         * @param {HTMLElement} elem: 目标 <a> 元素
         */
        var CreateTip = function (elem) {
            this.target = elem;
        };

        utils.extend(CreateTip.prototype, {

            // 设置提示框位置
            setPosition: function () {
                // DOM 结构如下：
                //        ┌──────────────────┐
                //    ┌───┤     document     │
                //    │   ├──────────────────┤
                //    │   │     container    ├─────────────┐
                // offset ├──────────────────┤             │
                //    │   │      toolbar     │             │
                //    │   ├──────────────────┤             │
                //    └───┤      iframe      ├───┐ relative position
                //        ├──────────────────┤   │         │
                //        │      content     │ offset      │
                //        │                  │   │         │
                //        │       node       ├───┘         │
                //        │       ^tip       ├─────────────┘
                //        └──────────────────┘
                // 所以相对位置如下：
                // tip.pos = node.offset + iframe.offset - container.offset [+ node.height]

                var target = this.target;

                var elemOffset = domUtils.getXY(target);

                domUtils.setStyles(tooltip, {
                    top: elemOffset.y + iframeOffset.y - containerOffset.y + target.offsetHeight + 'px',
                    left: elemOffset.x + iframeOffset.x - containerOffset.x + 'px'
                });
            },

            // 设置提示框的链接内容
            setInfo: function () {
                var href = this.target.href;
                linkInfo.href = linkInfo.title = href;

                innerText(linkInfo, shortStr(href));
            },

            // 移除目标链接
            removeLink: function () {
                // 多添加一个 textNode 以便跳出当前节点
                // textNode 内容：\u200b Unicode 零宽度字符
                // 提交内容时记得清除字符
                var target = this.target,
                    textNode = target.firstChild,
                    parentNode = target.parentNode,
                    newNode = document.createTextNode('\u200b');

                parentNode.replaceChild(textNode, target);
                domUtils.insertAfter(textNode, newNode);

                this.target = newNode; // 提供还原坐标


                if (UE.browser.ie) {
                    // IE 下会自动添加超链接
                    // 因此插入一个占位文本节点
                    var len = textNode.nodeValue.length,
                        t = textNode.splitText(len / 2 | 0);

                    parentNode.insertBefore(document.createTextNode('\u200b'), t);
                } else {
                    // 加入标记，避免自动转换链接时再次加上链接
                    textNode._hasMovedLink = true;
                }

                this.hide(true);
                editor.undoManger.save();
            },

            // 显示/隐藏编辑框
            showEditor: function () {
                linkAddress.value = this.target.href;
                linkContent.value = innerText(this.target);
                tooltip.className = 'show editor-open';
            },

            // 保存编辑框内容到目标 <a> 元素
            saveEditor: function () {
                var target = this.target;

                target.href = linkAddress.value;
                target.title = linkContent.value;
                innerText(target, linkContent.value);

                this.hasEdited = true;

                editor.undoManger.save();
                this.hide(true);
            },

            // 还原光标位置
            restoreRange: function () {
                var range = editor.selection.getRange();
                range.setEndAfter(this.target).collapse().select();
            },

            // 显示/隐藏提示框
            show: function () {
                this.setInfo();
                this.setPosition();
                tooltip.className = 'show';
            },
            hide: function (restoreRange) {
                tooltip.className = 'hide';

                if (restoreRange) {
                    this.restoreRange();
                }
            }
        });

        var currentNode, tip;

        var hideTip = function () {
            if (tip) {
                tip.hide();
                tip = null;
            }
        };

        editor.addListener('selectionchange', function () {
            var range = editor.selection.getRange(),
                node = range.startContainer;

            // 光标落在节点的起点时不做处理
            if (range.startOffset === 0 && range.collapsed) {
                return hideTip();
            }

            var target = domUtils.findParentByTagName(node, 'a', true);

            if (!target) {
                return hideTip();
            }

            if (node !== currentNode || !tip || tip.hasEdited) {
                tip = new CreateTip(target);
                currentNode = node;
            }

            tip.show();
        });

        domUtils.on(tooltip, 'click', function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement;

            if (!tip || target.tagName !== 'BUTTON') {
                return;
            }

            var id = target.id;

            switch (id) {
                case 'open-editor':
                    return tip.showEditor();

                case 'remove-link':
                    return tip.removeLink();

                case 'link-edit-save':
                    return tip.saveEditor();

                case 'link-edit-cancel':
                    return tip.hide(true);
            }
        });

        domUtils.on(linkEditor, 'keydown', function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement;

            if (target.tagName !== 'INPUT') {
                return;
            }

            var keyCode = event.keyCode || event.which;
            if (keyCode === 13) {
                return tip && tip.saveEditor();
            }
        });
    });

})(window.UE, window.RCEditor, document);