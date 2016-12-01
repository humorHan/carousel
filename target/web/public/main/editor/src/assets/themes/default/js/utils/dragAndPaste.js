/**
 * @date     2015/2/18
 * @author   Dolphin<dolphin.w.e@gmail.com>
 * 拖曳上传&粘贴上传
 */

(function (UE, RCEditor, document) {
    'use strict';

    if (!(window.FormData && window.FileReader)) {
        return;
    }

    var editor = RCEditor.editor,
        uploader = RCEditor.imgUploader,
        domUtils = UE.dom.domUtils;


    editor.ready(function () {
        var editorBody = editor.body;

        var imagesUpload = function (event) {
            var items, hasFile;

            editorBody.classList.remove('drop');

            if (event.clipboardData) {
                // Firefox 将粘贴数据存放在 files 下
                items = event.clipboardData.items || event.clipboardData.files;
            } else if (event.dataTransfer) {
                items = event.dataTransfer.files;
            }

            if (!items) {
                return;
            }

            for (var i = 0, max = items.length; i < max; i++) {
                var file = items[i];

                if (file.getAsFile) {
                    file = file.getAsFile();
                }

                if (file && file.size > 0) {
                    hasFile = true;
                    if (file.type.match(/image.*/)) {
                        uploader(file);
                    } else {
                        editor.fireEvent('errormsg', '不支持的文件类型：' + file.name);
                    }
                }
            }

            hasFile && event.preventDefault();
        };

        /**
         * 阻止默认 drag 事件
         * @param {Event Object} event: 拖曳事件
         * @param {Boolean} addEffect: 是否需要添加提示效果
         */
        var preventDefaultDrag = function (event, addEffect) {
            var dt = event.dataTransfer,
                types = dt.types;

            // Firefox 下会将第一项标记为 'application/x-moz-file'
            // 其它浏览器则为 'Files'
            if (types[0].match(/file/i)) {
                event.preventDefault();
                dt.dropEffect = 'copy';
                addEffect && editorBody.classList.add('drop');
            }
        };

        domUtils.on(editorBody, 'paste drop', imagesUpload);
        domUtils.on(document, 'drop', imagesUpload);

        // 防止误伤文本粘贴
        editorBody.addEventListener('dragover', preventDefaultDrag);
        document.addEventListener('dragover', preventDefaultDrag);

        // 提示效果
        editorBody.addEventListener('click', function () {
            editorBody.classList.remove('drop');
        });

        editorBody.addEventListener('dragenter', function (event) {
            preventDefaultDrag(event, true);
        });

        document.addEventListener('dragenter', function (event) {
            preventDefaultDrag(event, true);
        });

    });
})(window.UE, window.RCEditor, document);