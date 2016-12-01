//判断是测服还是线上
if(/soyyin.com/.test(location.href)){
    var Mobile_Url = 'http://m.soyyin.com';
} else {
    var Mobile_Url = 'http://m.localprint.tinysoy.com';
}      
if (navigator.userAgent.match(/mobile/i)) {
    if(/product/.test(location.pathname)){
        location.href = Mobile_Url + '/product.html' + location.search + location.hash;
    } else{
        location.href = Mobile_Url;
    }
}