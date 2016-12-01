var login = {
    lognBoxShadeLayer: $("#login_box_shade_layer"),
    loginBox: $("#login_box"),
    loginBoxClose: $("#login_box_close"),
    loginTypeLi: $("#login_type li"),
    getPhoneCodeBtn: $("#get_phone_code"),
    loginShowCaptchaImg: $("#login_show_captcha_img"),
    autoLoginBtn: $("#auto_login"),
    loginSubmitBtn: $("#login_submit"),
    errorTipWhenLogin: $("#login_error_tip"),
    errorTipWhenCodeLogin: $("#quick_login_error_tip"),
    callBackWhenFinishLogin: null,
    init: function() {
        var self = this;
        this.loginBoxClose.click(function() {
            self.hidePop();
        });
        this.lognBoxShadeLayer.click(function() {
            self.hidePop();
        });
        this.loginTypeLi.click(function(event) {
            self.changeLoginType(event);
        });
        this.getPhoneCodeBtn.click(function() {
            self.getLoginPhoneCode();
        });
        this.autoLoginBtn.click(function(event) {
            self.setAutoLogin(event);
        });
        this.loginSubmitBtn.click(function() {
            self.userLogin();
        });
    },
    showPop: function(callBackWhenFinishLogin) {
        var self = this;
        this.loginBox.show();
        this.lognBoxShadeLayer.show();
        if (callBackWhenFinishLogin) {
            this.callBackWhenFinishLogin = callBackWhenFinishLogin;
        } else {
            this.callBackWhenFinishLogin = null;
        }
    },
    hidePop: function() {
        this.loginBox.hide();
        this.lognBoxShadeLayer.hide();
    },
    setAutoLogin: function(event) {
        var $target;
        if ($(event.target).is("span")) {
            $target = $(event.target).parent();
        } else {
            $target = $(event.target);
        }
        if ($target.hasClass("active")) {
            $target.removeClass("active");
        } else {
            $target.addClass("active");
        }
    },
    changeLoginType: function(event) {
        var $target = $(event.target);
        this.loginTypeLi.removeClass("login-type-checked");
        $target.addClass("login-type-checked");
        var type = $target.attr("data-type");
        $("#login_submit").attr("data-type", type);
        $("#login_box .form-type").hide();
        $("#" + type).show();
    },
    userLogin: function() {
        var self = this;
        if (self.loginSubmitBtn.hasClass("btn-disable")) {
            return;
        }

        self.initErrorTip();
        var type = $("#login_submit").attr("data-type");
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
        self.initErrorTip();

        var auto_login = $("#auto_login").hasClass("active");
        data["auto_login"] = auto_login;

        self.loginSubmitBtn.removeClass("btn-enable").addClass("btn-disable").text("正在登录，请稍后");

        $http(url).post(data, function(result) {
            self.loginSubmitBtn.removeClass("btn-disable").addClass("btn-enable").text("登 录");
            if (result.result === 0) {
                self.hidePop();

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
                
                setHeaderLogin();

                if (self.callBackWhenFinishLogin !== null) {
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
        }, false);
    },
    initErrorTip: function() {
        this.errorTipWhenLogin.html("");
        this.errorTipWhenCodeLogin.html("");
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
    validatePhone: function(phone) {
        var phone_pattern = /^[0-9]{11}$/;
        if (!phone_pattern.test(phone)) {
            this.errorTipWhenCodeLogin.html("请输入正确的手机号");
            $("#login_item_phone").focus();
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
    waitLoginCode: function() {
        var self = this;
        self.getPhoneCodeBtn.removeClass("btn-enable").addClass("btn-disable").text("重新获取60s");
        var i = 59;
        self.set_login_time = setInterval(function() {
            self.getPhoneCodeBtn.text("重新获取" + i + "s");
            i--;
            if (i === -1) {
                clearInterval(self.set_login_time);
                self.getPhoneCodeBtn.removeClass("btn-disable").addClass("btn-enable").text("获取验证码");
            }
        }, 1000);
    },
    getLoginPhoneCode: function() {
        var self = this;
        if (self.getPhoneCodeBtn.hasClass("btn-disable")) {
            return;
        }

        self.errorTipWhenCodeLogin.html("");

        var data = {
            "phone": $("#login_item_phone").val()
        };
        var url = '/api/v2/web/users/send-login-code';

        if (!self.validatePhone(data.phone)) {
            return;
        }

        self.errorTipWhenCodeLogin.html("");

        $http(url).post(data, function(result) {
            if (result.result === 0) {
                self.waitLoginCode();
            } else {
                self.getPhoneCodeBtn.removeClass("btn-disable").addClass("btn-enable").text("获取验证码");
                if (result.result === 4) {
                    self.errorTipWhenCodeLogin.html(result.error_message);
                } else if (result.result === 9) {
                    self.errorTipWhenCodeLogin.html("发送短信失败，请稍后再试");
                } else if (result.result === 1010) {
                    self.errorTipWhenCodeLogin.html("手机号格式错误");
                } else if (result.result === 1009) {
                    self.errorTipWhenCodeLogin.html("文字验证码错误");
                } else if (result.result === 1012) {
                    self.errorTipWhenCodeLogin.html("请求的太频繁，请稍等1分钟重试");
                }
            }
        }, false);
    }
};

//判断登录状态
function setHeaderLogin() {
    var truthId = $.cookie("truthid");
    var userName = $.cookie("username");
    if (truthId && userName) {
        if (userName.length > 4) {
            $(".header-fixed-list #userName").parent().parent().attr("title", userName);
            userName = userName.substr(0, 4) + "...";
        }
        $(".header-fixed-list #userName").text(userName);
        $(".header-fixed-list .log-in").css("display", "inline-block");
        $(".header-fixed-list .log-out").hide();
    } else {
        $(".header-fixed-list .log-out").css("display", "inline-block");
        $(".header-fixed-list .log-in").hide();
    }
}

! function() {
   /* login.init();
    $("#login_in_header").click(function() {
        login.showPop();
    });

    if ((location.pathname === "/") && (location.hash.indexOf("showLogin") > 0) && !($.cookie("id") && $.cookie("username"))) {
        login.showPop();
    }

    setHeaderLogin();
    $(".logout-in-header").click(function() {
        var url = '/api/v2/users/logout';
        $http(url).get(function(result){
            $.cookie("id", "", { expires: -1, path: '/' });
            $.cookie("userid", "", { expires: -1, path: '/' });
            $.cookie("truthid", "", { expires: -1, path: '/' });
            $.cookie("username", "", { expires: -1, path: '/' });
            $.cookie("image_url", "", { expires: -1, path: '/' });
            $.cookie("usertype", "", { expires: -1, path: '/' });

            location.href = "/";
        });
    });*/
}();
