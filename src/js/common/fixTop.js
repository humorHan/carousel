/**
 * Created by humorHan on 16/11/24.
 */
var top = {
    fixTop: function () {
        if ($(window).scrollTop() > $(".total-product").offset().top + 40) {
            $(".fix-top-wrap").show();
        } else {
            $(".fix-top-wrap").hide();
        }
    },
    initBtns: function () {
        var tThis = this;
        //监听滚动事件
        $(window).scroll(function () {
            tThis.fixTop();
        });
    }
};

$(function () {
    // 尝试执行
    top.fixTop();
    top.initBtns();
});