/**
 * Created by humorHan on 16/11/24.
 */
var rightBar = {
    callLater: function(contact){
        ajax({
            type: 'POST',
            url: '/api/v2/others/submit-contact',
            data: JSON.stringify({
                contact: contact
            }),
            success: function (data) {
                alert("稍后您将接到我们的电话，该通话对您完全免费，请放心接听！您也可以通过点击屏幕右侧的“联系客服”按钮直接QQ在线咨询。");
            }
        });
    },
    initBtns: function(){
        var tThis = this;
        //免费通话按钮
        $(".call-later-btn").click(function() {
            var contact = $(".your-phone").val();
            if (/^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/.test(contact)) {
                tThis.callLater(contact);
            } else {
                alert("请您输入正确的号码，手机号码请直接输入，座机请加区号");
            }
        });
        //关闭免费通话
        $(".right-close").bind("click", function () {
            $(".call-later").removeClass("active").addClass("none");
        });
        //划过热线电话icon
        $(".right-phone").bind("mouseover", function () {
            $(".call-later").removeClass("none");
        });
        //返回顶部
        $(".goTop").bind("click", function () {
            $('body, html').animate({
                scrollTop: 0
            }, 300);
        });
    }
};

$(function(){
    rightBar.initBtns();
});