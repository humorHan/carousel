var register = {
    usernameItemInput: $("#register_item_username"),
    codeItemInput: $("#register_item_code"),
    getPhoneCodeBtn: $("#get_phone_code"),
	passwordItemInput: $("#register_item_password"),
    usernameErrorTip: $("#username_error_tip"),
    codeErrorTip: $("#code_error_tip"),
    passwordErrorTip: $("#password_error_tip"),
    agreeBtn: $("#agree"),
    registerSubmitBtn: $("#register_submit"),
    agreementBoxShadeLayer: $("#agreement_box_shade_layer"),
    agreementBox: $("#agreement_box"),
    agreementBoxClose: $("#agreement_box_close"),
    readAndAgreeButton: $("#read_and_agree_button"),
    init: function() {
        var self = this;
        this.agreementBoxClose.click(function() {
            self.hidePop();
        });
        this.agreementBoxShadeLayer.click(function() {
            self.hidePop();
        });
        this.readAndAgreeButton.click(function() {
            self.hidePop();
            if (!self.agreeBtn.hasClass("active")) {
                self.agreeBtn.addClass("active");
            }
        });
        this.getPhoneCodeBtn.click(function() {
            self.getRegisterPhoneCode();
        });
        this.agreeBtn.click(function(event) {
            self.setAgree(event);
        });
        this.registerSubmitBtn.click(function() {
            self.userRegister();
        });
        $(".register-box").delegate("input.register-item-input", "blur", function(e) {
            if (this.id === "register_item_username") {
                self.validateUsername(this.value);
            } else if (this.id === "register_item_code") {
                self.validateCode(this.value);
            } else if (this.id === "register_item_password") {
                self.validatePwd(this.value);
            }
        });
    },
    showPop: function() {
        var self = this;
        this.agreementBox.show();
        this.agreementBoxShadeLayer.show();
    },
    hidePop: function() {
        this.agreementBox.hide();
        this.agreementBoxShadeLayer.hide();
    },
    setAgree: function(event) {
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
    userRegister: function() {
        var self = this;
        if (self.registerSubmitBtn.hasClass("btn-disable")) {
            return;
        }

        var data = {
            "phone": self.usernameItemInput.val(),
            "code": self.codeItemInput.val(),
            "password": self.passwordItemInput.val(),
            "type": 2
        };
        var url = '/api/v2/web/users/phone-signup';

        if (!self.validateUsername(data.phone) || !self.validateCode(data.code) || !self.validatePwd(data.password)) {
            return;
        }
        if (!self.agreeBtn.hasClass("active")) {
            self.showPop();
            return;
        }

        self.usernameErrorTip.html("");
        self.codeErrorTip.html("");
        self.passwordErrorTip.html("");

        self.registerSubmitBtn.removeClass("btn-enable").addClass("btn-disable").text("正在注册，请稍后");

        $http(url).post(data, function(result) {
            self.registerSubmitBtn.removeClass("btn-disable").addClass("btn-enable").text("注 册");
            if (result.result === 0) {
                if (!result.display_name) {
                    result.display_name = "暂无";
                }
                $.cookie("id", result.id, { path: '/' });
                $.cookie("userid", result.old_user_info_id, { path: '/' });
                $.cookie("truthid", result.uuid, { path: '/' });
                $.cookie("username", result.display_name, { path: '/' });
                $.cookie("image_url", result.image_url, { path: '/' });
                $.cookie("usertype", result.type, { path: '/' });

                var referrerUrl = document.referrer;
                if (!referrerUrl || referrerUrl.length === 0) {
                    window.location.href = "/";
                } else if (referrerUrl.indexOf(location.hostname) >= 0) {
                    window.location.href = referrerUrl;
                } else {
                    window.location.href= "/";
                }
            } else {
                if (result.result === 4) {
                    self.usernameErrorTip.html(result.error_message);
                } else if (result.result === 1010) {
                    self.usernameErrorTip.html("手机号格式错误");
                } else if (result.result === 1011) {
                    self.codeErrorTip.html("短信验证码错误");
                } else if (result.result === 1008) {
                    self.passwordErrorTip.html("密码格式错误");
                } else if (result.result === 1003) {
                    self.usernameErrorTip.html("该手机号已经注册，请直接登录");
                } else if (result.result === 6) {
                    self.usernameErrorTip.html("该手机号已经注册，请直接登录");
                }
            }
        }, false);
    },
    validateUsername: function(username) {
        var phone_pattern = /^[0-9]{11}$/;
        if (!phone_pattern.test(username)) {
            this.usernameErrorTip.html("请输入正确的手机号");
            return false;
        }
        this.usernameErrorTip.html("");
        return true;
    },
    validateCode: function(code) {
        var code_pattern = /^[0-9]{4}$/;

        if (!code_pattern.test(code)) {
            this.codeErrorTip.html("请输入正确的验证码");
            return false;
        }
        this.codeErrorTip.html("");
        return true;
    },
    validatePwd: function(pwd) {
        if (pwd.length === 0) {
            this.passwordErrorTip.html("密码不能为空");
            return false;
        }
        if (pwd.length > 12 || pwd.length < 6) {
            this.passwordErrorTip.html("密码由6-12位字符组成");
            return false;
        }
        this.passwordErrorTip.html("");
        return true;
    },
    waitLoginCode: function() {
        var self = this;
        self.getPhoneCodeBtn.removeClass("btn-enable").addClass("btn-disable").text("重新获取60s");
        var i = 59;
        self.set_register_time = setInterval(function() {
            self.getPhoneCodeBtn.text("重新获取" + i + "s");
            i--;
            if (i === -1) {
                clearInterval(self.set_register_time);
                self.getPhoneCodeBtn.removeClass("btn-disable").addClass("btn-enable").text("获取验证码");
            }
        }, 1000);
    },
    getRegisterPhoneCode: function() {
        var self = this;
        if (self.getPhoneCodeBtn.hasClass("btn-disable")) {
            return;
        }

        var data = {
            "phone": self.usernameItemInput.val()
        };
        var url = '/api/v2/web/users/send-signup-code?version=1';

        if (!self.validateUsername(data.phone)) {
            return;
        }

        self.codeErrorTip.html("");

        $http(url).post(data, function(result) {
            if (result.result === 0) {
                self.waitLoginCode();
            } else {
                self.getPhoneCodeBtn.removeClass("btn-disable").addClass("btn-enable").text("获取验证码");
                if (result.result === 4) {
                    self.codeErrorTip.html(result.error_message);
                } else if (result.result === 9) {
                    self.codeErrorTip.html("发送短信失败，请稍后再试");
                } else if (result.result === 6) {
                    self.usernameErrorTip.html("该手机号已经注册，请直接登录");
                } else if (result.result === 1010) {
                    self.usernameErrorTip.html("手机号格式错误");
                } else if (result.result === 1009) {
                    self.codeErrorTip.html("图片验证码错误");
                } else if (result.result === 1012) {
                    self.codeErrorTip.html("请求的太频繁，请稍等1分钟重试");
                }
            }
        }, false);
    }
};

! function() {
    if ($.cookie("id") && $.cookie("username")) {
        window.location.href= "/";
    }
    
    register.init();
    $("#agreement").click(function() {
        register.showPop();
    });
}();
