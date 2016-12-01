/**
 * Created by humorHan on 2016/11/18.
 */
var art = require('tmodjs-loader/runtime');
var config = require("config/config.js");

//时间戳转化方法
art.helper('dateFormat', function (date, format) {
    date = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10));
    date = new Date(date);
    var map = {
        "Y": date.getYear(),
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        }
        else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
});

//得到图片地址
art.helper('getUrl',function(url){
    return config.SOURCE + url;
});

//处理价格 3900变成39.00
art.helper('processPrice', function(p){
    var str = p + "";
    var arr = str.split("");
    if (arr.length === 1) {
        arr.unshift("0", "0");
    } else if (arr.length === 2) {
        arr.unshift("0");
    }
    arr.splice(arr.length - 2, 0, ".");
    var real = arr.join("");
    return real;
});