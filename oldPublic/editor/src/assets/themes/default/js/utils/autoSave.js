/**
 * @date     2015/2/15
 * @author   Dolphin<dolphin.w.e@gmail.com>
 * 自动保存与恢复
 */

(function (UE, RCEditor, window, document) {
    'use strict'

    var editor = RCEditor.editor,
        domUtils = UE.dom.domUtils,
        innerText = RCEditor.innerText,
        localStorage = window.localStorage,
        hash = location.hash;

    // 只在启动自动保存（#auto_save）时加载
    if (!localStorage || !hash.match(/auto_save/)) {
        return;
    }

    var prefix = "auto_save",
        draftKey = prefix + '_draft',
        timeKey = prefix + '_save_time',
        storageInfo = document.createElement('div');

    var durations = {
        year: 60 * 60 * 24 * 365,
        day: 60 * 60 * 24,
        hour: 60 * 60,
        minute: 60
    };

    /**
     * 获得可读的时间
     * @param {Number} sec: 秒数
     *
     * @return {String}: 可读的时间刻度
     */
    var getDuration = function (sec) {
        if (sec > durations.year) {
            return (sec / durations.year | 0) + ' 年前';
        }
        if (sec > durations.day) {
            return (sec / durations.day % 365 | 0) + ' 天前';
        }
        if (sec > durations.hour) {
            return (sec / durations.hour % 24 | 0) + ' 小时前';
        }
        if (sec > durations.minute) {
            return (sec / durations.minute % 60 | 0) + ' 分钟前';
        }
        return sec % 60 + ' 秒前';
    };

    // 保存草稿
    var saveData = function () {
        var content = editor.getContent(),
            time = new Date();

        localStorage.setItem(draftKey, content);
        localStorage.setItem(timeKey, time.getTime());

        innerText(storageInfo, '自动保存于 ' + time.toLocaleString());
    };

    // 恢复已保存的草稿
    var restoreData = function () {
        var content = localStorage.getItem(draftKey),
            lastSave = localStorage.getItem(timeKey);

        if (content) {
            editor.body.innerHTML = content;
            var current = (new Date).getTime();
            var duration = getDuration((current - lastSave) / 1000 | 0);
            innerText(storageInfo, '已载入保存于 ' + duration + '的草稿');
        }
    };

    var lastTime, timer,
        throttle = 1e4; // 10秒保存一次

    editor.addListener('ready', function () {
        var container = editor.container,
            parentNode = container.parentNode;

        storageInfo.id = 'auto-save-info';
        parentNode.appendChild(storageInfo);

        restoreData();
    });

    editor.addListener('contentchange', function () {
        var current = (new Date).getTime();
        if (!lastTime || current - lastTime > throttle) {
            clearTimeout(timer);
            timer = undefined;
            lastTime = current;
            saveData();
            return;
        }

        if (!timer) {
            timer = setTimeout(function () {
                lastTime = (new Date).getTime();
                timer = undefined;
                saveData();
            }, throttle);
        }
    });

    var hasSubmitted;

    // 提交成功时删除草稿
    editor.addListener('submitsuccess', function () {
        hasSubmitted = true;
        localStorage.removeItem(draftKey);
    });

    // 若未成功提交，则在跳转时保存草稿
    domUtils.on(window, 'hashchange beforeunload', function () {
        if (!hasSubmitted) {
            saveData();
        }
    });

    // 提示框并不友好，且不能阻止 hashchange

    //UE.dom.domUtils.on(window, 'hashchange', function () {
    //    var storageTime = localStorage.getItem(timeKey);
    //
    //    if (storageTime) {
    //        alert('已保存草稿于：' + storageTime);
    //    }
    //});
    //
    //UE.dom.domUtils.on(window, 'beforeunload', function (event) {
    //    var storageTime = localStorage.getItem(timeKey);
    //
    //    if (storageTime) {
    //        event.returnValue = '已保存草稿于：' + storageTime;
    //    }
    //});
})(window.UE, window.RCEditor, window, document);