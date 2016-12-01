/**
 * Created by humorHan on 16/11/18.
 */
require('common/base.scss');
var ajax = require("util/ajax.js");
require("template-helper.js");

var login = {
    lognBoxShadeLayer: $("#login_box_shade_layer"),
    loginBox: $("#login_box"),
    loginSubmitBtn: $("#login_submit"),
    errorTipWhenLogin: $("#login_error_tip"),
    errorTipWhenCodeLogin: $("#quick_login_error_tip"),
    init: function(){
        if ((location.pathname === "/") && (location.hash.indexOf("showLogin") > 0) && !($.cookie("id") && $.cookie("username"))) {
            login.showPop();
        }
        this.setHeaderLogin();
        this.initBtns();
    },
    validatePhone: function(phone) {
        var phone_pattern = /^[0-9]{11}$/;
        if (!phone_pattern.test(phone)) {
            $("#quick_login_error_tip").html("请输入正确的手机号");
            $("#login_item_phone").focus();
            return false;
        }
        return true;
    },
    waitLoginCode: function() {
        var self = this;
        var $dom = $("#get_phone_code");
        $dom.removeClass("btn-enable").addClass("btn-disable").text("重新获取60s");
        var i = 59;
        self.set_login_time = setInterval(function() {
            $dom.text("重新获取" + i + "s");
            i--;
            if (i === -1) {
                clearInterval(self.set_login_time);
                $("#get_phone_code").removeClass("btn-disable").addClass("btn-enable").text("获取验证码");
            }
        }, 1000);
    },
    sendCode: function(){
        var tThis = this;
        if (tThis.getPhoneCodeBtn.hasClass("btn-disable")) {
            return false;
        }
        var $phoneNum = $("#login_item_phone");
        if (!tThis.validatePhone($phoneNum.val())) {
            return false;
        }
        $("#quick_login_error_tip").html("");
        ajax({
            url: '/api/v2/web/users/send-login-code',
            data: {
                "phone": $phoneNum.val()
            },
            success: function (result) {
                var $dom = $("#quick_login_error_tip");
                if (result.result === 0) {
                    tThis.waitLoginCode();
                } else {
                    $("#get_phone_code").removeClass("btn-disable").addClass("btn-enable").text("获取验证码");
                    if (result.result === 4) {
                        $dom.html(result.error_message);
                    } else if (result.result === 9) {
                        $dom.html("发送短信失败，请稍后再试");
                    } else if (result.result === 1010) {
                        $dom.html("手机号格式错误");
                    } else if (result.result === 1009) {
                        $dom.html("文字验证码错误");
                    } else if (result.result === 1012) {
                        $dom.html("请求的太频繁，请稍等1分钟重试");
                    }
                }
            }
        });
    },
    validateUsernamePwd: function(username, pwd) {
        var email_pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
        var phone_pattern = /^[0-9]{11}$/;
        if (!email_pattern.test(username) && !phone_pattern.test(username)) {
            this.errorTipWhenLogin.html("请输入正确的邮箱或手机号");
            return false;
        }
        if (username.length > 50) {
            this.errorTipWhenLogin.html("账号过长");
            $("#login_item_username").focus();
            return false;
        }
        if (pwd.length === 0) {
            this.errorTipWhenLogin.html("密码不能为空");
            $("#login_item_password").focus();
            return false;
        }
        if (pwd.length > 50) {
            this.errorTipWhenLogin.html("密码过长");
            $("#login_item_password").focus();
            return false;
        }
        return true;
    },
    validatePhoneCode: function(phone, code) {
        var code_pattern = /^[0-9]{4}$/;

        if (!this.validatePhone(phone)) {
            return false;
        }
        if (!code_pattern.test(code)) {
            this.errorTipWhenCodeLogin.html("请输入正确的验证码");
            $("#login_item_code").focus();
            return false;
        }
        return true;
    },
    userLogin: function(){
        var self = this;
        if (self.loginSubmitBtn.hasClass("btn-disable")) {
            return;
        }
        $("#login_error_tip, #quick_login_error_tip").html('');
        var type = $(".login-type-checked").attr("data-type");
        var url, data;
        if (type == 'commonLog') {
            data = {
                "username": $("#login_item_username").val(),
                "password": $("#login_item_password").val()
            };
            if (!self.validateUsernamePwd(data.username, data.password)) {
                return;
            }
            url = '/api/v2/web/users/login';
        } else {
            data = {
                "username": $("#login_item_phone").val(),
                "password": $("#login_item_code").val()
            };
            if (!self.validatePhoneCode(data.username, data.password)) {
                return;
            }
            url = '/api/v2/web/users/code-login';
        }
        $("#login_error_tip, #quick_login_error_tip").html('');
        var auto_login = $("#auto_login").hasClass("active");
        data["auto_login"] = auto_login;
        self.loginSubmitBtn.removeClass("btn-enable").addClass("btn-disable").text("正在登录，请稍后");

        ajax({
            type: 'POST',
            url: url,
            data: JSON.stringify(data),
            success: function (result) {
                self.loginSubmitBtn.removeClass("btn-disable").addClass("btn-enable").text("登 录");
                if (result.result === 0) {
                    $(".login-box-shade-layer,.login-box").hide();
                    if (!result.display_name) {
                        result.display_name = "暂无";
                    }
                    if (auto_login) {
                        $.cookie("id", result.id, { expires: 30, path: '/' });
                        $.cookie("userid", result.old_user_info_id, { expires: 30, path: '/' });
                        $.cookie("truthid", result.uuid, { expires: 30, path: '/' });
                        $.cookie("username", result.display_name, { expires: 30, path: '/' });
                        $.cookie("image_url", result.image_url, { expires: 30, path: '/' });
                        $.cookie("usertype", result.type, { expires: 30, path: '/' });
                    } else {
                        $.cookie("id", result.id, { path: '/' });
                        $.cookie("userid", result.old_user_info_id, { path: '/' });
                        $.cookie("truthid", result.uuid, { path: '/' });
                        $.cookie("username", result.display_name, { path: '/' });
                        $.cookie("image_url", result.image_url, { path: '/' });
                        $.cookie("usertype", result.type, { path: '/' });
                    }

                    self.setHeaderLogin();

                    if (self.callBackWhenFinishLogin) {
                        self.callBackWhenFinishLogin();
                    } else {
                        location.reload(true);
                    }
                } else {
                    var errorTip = type == 'commonLog' ? self.errorTipWhenLogin : self.errorTipWhenCodeLogin;
                    if (result.result === 4) {
                        errorTip.html(result.error_message);
                    } else if (result.result === 1013) {
                        errorTip.html(type == 'commonLog' ? "手机号或密码错误" : "手机号或验证码错误");
                    } else if (result.result === 10) {
                        errorTip.html("旧服务器出错，" + result.extra);
                    }
                }
            }
        });
    },
    showPop: function(callBackWhenFinishLogin) {
        this.loginBox.show();
        this.lognBoxShadeLayer.show();
        if (callBackWhenFinishLogin) {
            this.callBackWhenFinishLogin = callBackWhenFinishLogin;
        } else {
            this.callBackWhenFinishLogin = null;
        }
    },
    logOut: function(){
        ajax({
            url: '/api/v2/users/logout',
            success: function () {
                $.cookie("id", "", { expires: -1, path: '/' });
                $.cookie("userid", "", { expires: -1, path: '/' });
                $.cookie("truthid", "", { expires: -1, path: '/' });
                $.cookie("username", "", { expires: -1, path: '/' });
                $.cookie("image_url", "", { expires: -1, path: '/' });
                $.cookie("usertype", "", { expires: -1, path: '/' });
                location.href = "/new";
            }
        });
    },
    setHeaderLogin: function() {
        var truthId = $.cookie("truthid");
        var userName = $.cookie("username");
        if (truthId && userName) {
            if (userName.length > 4) {
                $(".login-status").attr("title", userName);
                userName = userName.substr(0, 4) + "...";
            }
            $(".status1").hide();
            $(".login-status").show().find("span").text('欢迎您,' + userName);
        }
    },
    initBtns: function () {
        var tThis = this;
        //切换登录方式
        $("#login_type").find("li").bind("click", function () {
            $(".login-type-checked").removeClass("login-type-checked");
            $(this).addClass("login-type-checked");
            $(".form-type").hide();
            $('#' + $(this).attr("data-type")).show();
        });
        //点击弹出登录弹框
        $(".login").bind("click", function () {
            $(".login-box-shade-layer,.login-box").show();
        });
        //关闭登录弹框
        $("#login_box_close").bind("click", function () {
            $(".login-box-shade-layer,.login-box").hide();
        });
        //自动登录按钮
        $(".auto-login").bind("click", function(){
            $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
        });
        //获取验证码按钮
        $("#get_phone_code").bind("click", function () {
            tThis.sendCode();
        });
        //登录
        $("#login_submit").bind("click", function () {
            tThis.userLogin();
        });
        //退出按钮
        $(".login-out-btn").click(function() {
            tThis.logOut();
        });
    }
};

$(function(){
    login.init();
});