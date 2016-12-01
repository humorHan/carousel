/**
 * @date     2015/2/16
 * @author   Dolphin<dolphin.w.e@gmail.com>
 * 图片上传组件
 */

(function (UE, RCEditor, Base64, document) {
    'use strict';

    var editor = RCEditor.editor,
        request = UE.ajax.request,
        domUtils = UE.dom.domUtils,
        urlConfig = RCEditor.urlConfig,
        formDataMode = 'FormData' in window,
        form = document.createElement('form'),
        iframe = document.createElement('iframe'),
        themePath = RCEditor.theme.path + RCEditor.theme.name,

        imagesList = {
            // 异步上传队列
            // target: 目标图片元素
            // file: 待上传文件
        };


    iframe.id = iframe.name = 'image-uploader';
    iframe.style.display = 'none';

    domUtils.setAttributes(form, {
        method: 'POST',
        target: 'image-uploader',
        action: urlConfig.upload,
        enctype: 'multipart/form-data'
    });

    form.innerHTML = [
        '<input type="file" accept="image/*" name="file" id="upload-image" multiple>',
        '<input name="accept" type="hidden" value="text/plain; charset=utf-8">',

        // 加入时间标记，以便异步操作不会错乱
        '<input name="x:timestamp" type="hidden" id="time-stamp">',

        '<input type="hidden" name="token" id="upload-token">',
        '<input type="hidden" name="key" id="upload-key">'
    ].join('');

    var uploadImage = form.querySelector('#upload-image'),
        uploadToken = form.querySelector('#upload-token'),
        uploadKey = form.querySelector('#upload-key'),
        uploadTime = form.querySelector('#time-stamp');

    /**
     * xhr 出错时的处理
     * @param {String} errMsg: 出错信息
     */
    var errorHandler = function (errMsg) {
        editor.fireEvent('errormsg', '上传失败：' + errMsg);
    };

    /**
     * 设置上传失败时的占位图片
     * @param {String} timeStamp: 时间标记
     */
    var setFailedImage = function (timeStamp) {
        var img = imagesList[timeStamp].target;
        if (img) {
            img.src = themePath + '/images/upload-failed.jpg';
            img.title = '图片上传失败';

            delete imagesList[timeStamp];
        }

        form.reset();
        errorHandler('图片上传失败');
    };

    /**
     * 设置上传失败时的占位图片
     * @param {String} timeStamp: 时间标记
     * @param {Object} result: 七牛回调信息
     */
    var setSuccessImage = function(timeStamp, result) {
        var img = imagesList[timeStamp].target;

        if (result && img) {
            img.src =
                urlConfig.imgHost +
                result.key +
                '?imageView/2/w/' +
                RCEditor.imgWidth;

            editor.undoManger.save();
            delete imagesList[timeStamp];
        } else {
            setFailedImage(timeStamp);
        }
    };

    /**
     * 设置表单信息
     * @param {Object} token: 七牛上传 Token
     * @param {String} timeStamp: 时间标记
     * @param {FormData} [formData]: FormData 对象，当存在时采用 ajax 上传
     */
    var setForm = function (token, timeStamp, formData) {
        if (formDataMode && formData) {
            formData.append('token', token.token);
            formData.append('key', token.key);
            formData.append('x:timestamp', timeStamp);
        } else {
            uploadToken.value = token.token;
            uploadKey.value = token.key;
            uploadTime.value = timeStamp;
        }
    };

    /**
     * 解析 JSON
     * @param {String} jsonStr: 待解析字串
     *
     * @return {Object} 解析后的 JSON 对象
     */
    var parseJSON = function (jsonStr) {
        var json;
        try {
            json = JSON.parse(jsonStr);
        } catch (err) {
            return errorHandler(err);
        }
        return json;
    };

    /**
     * 获取七牛 Token
     * @param {String} timeStamp: 时间标记
     */
    var getToken = function (timeStamp) {
        var url = urlConfig.token;

        request(url, {
            method: 'GET',
            async: true, // 同步会导致阻塞
            onsuccess: function (xhr) {
                var res = xhr.responseText,
                    data = parseJSON(res);

                editor.fireEvent('tokenload', timeStamp, data);
            },
            onerror: function () {
                setFailedImage(timeStamp);
                errorHandler('签发服务器通信失败');
            }
        });
    };

    /**
     * 发送 FormData
     * @param {String} timeStamp: 时间标记
     * @param {FormData} formData: 待发送 FormData 对象
     */
    var sendData = function (timeStamp, formData) {
        var xhr = new XMLHttpRequest(),// UE.ajax 不支持 FormData
            image = imagesList[timeStamp].target;

        xhr.open('POST', urlConfig.upload, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    var result = parseJSON(xhr.responseText);
                    setSuccessImage(timeStamp, result);
                } else {
                    setFailedImage(timeStamp);
                }
            }
        };

        xhr.send(formData);
    };

    /**
     * 插入图片
     *
     * @return {HTMLElement} 被插入的图片
     */
    var insertImg = function () {
        var img = document.createElement('img'),
            range = editor.selection.getRange();

        img.src = themePath + '/images/ajax-loader.gif';

        range.insertNode(img).collapse().select();
        return img;
    };

    /**
     * 上传图片，当支持 FormData 时采用 ajax 上传
     * @param {File} [file]: 待加入 FormData 的 File 对象
     */
    var uploader = function (file) {
        var timeStamp = (new Date).getTime().toString(32);

        imagesList[timeStamp] = {
            target: insertImg(),
            file: file
        };

        getToken(timeStamp);
    };

    // 异步事件监听
    editor.addListener('tokenload', function (type, timeStamp, token) {
        if (formDataMode) {
            var formData = new FormData(),
                file = imagesList[timeStamp].file;

            setForm(token, timeStamp, formData);
            formData.append('file', file || uploadImage.files[0]);

            sendData(timeStamp, formData);
        } else {
            setForm(token, timeStamp);
            form.submit();
        }

        form.reset();
    });

    // 选择图片事件监听
    editor.addListener('imageselect', function () {
        uploadImage.click();
    });

    domUtils.on(uploadImage, 'change', function () {
        if (!uploadImage.value) {
            return;
        }

        if (formDataMode) {
            // 多文件上传
            [].slice.call(uploadImage.files)
                .forEach(function (file) {
                    if (!file.type.match(/image.*/)) {
                        return errorHandler('不支持的文件类型 ' + file.name);
                    }

                    uploader(file);
                });
        } else {
            if (!uploadImage.value.match(/\.(?:jpg|jpeg|png|gif|bmp)$/i)) {
                return errorHandler('不支持的文件类型 ' + uploadImage.value);
            }

            uploader();
        }
    });

    // IE9- 下使用 iframe 获得数据
    editor.ready(function () {
        if (formDataMode) {
            return;
        }

        var container = document.querySelector('.edui-for-imgupload .edui-icon');

        container.appendChild(iframe);
        container.appendChild(form);

        domUtils.on(iframe, 'load', function () {
            if (UE.utils.isEmptyObject(imagesList)) {
                return;
            }
            var frameDoc = iframe.contentDocument || iframe.contentWindow.document;
            var query = frameDoc.location.search;

            if (!query) {
                return errorHandler('图片上传失败');
            }

            var result = parseJSON(
                    Base64.decode(query.replace('?upload_ret=', ''))
                ),
                timeStamp = result['x:timestamp'];

            setSuccessImage(timeStamp, result);
        });

    });

    RCEditor.imgUploader = uploader;

})(window.UE, window.RCEditor, window.Base64, document);