webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(8);
	__webpack_require__(9);
	module.exports = __webpack_require__(12);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by humorHan on 16/11/18.
	 */
	__webpack_require__(2);
	var ajax = __webpack_require__(4);
	__webpack_require__(5);
	
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by humorHan on 16/11/17.
	 */
	module.exports = function (options) {
	    $.ajaxSetup({
	        cache: false
	    });
	    $.ajax({
	        type: options.type || 'GET',
	        url: options.url,
	        data: options.data || {},
	        dataType: options.dataType || 'json',
	        contentType: options.contentType || 'application/json',
	        success: function(data){
	            options.success(data);
	        },
	        error: function(){
	            // TODO 错误处理和强制跳转等
	            if (options.error) {
	                options.error();
	            }
	        }
	    })
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by humorHan on 2016/11/18.
	 */
	var art = __webpack_require__(6);
	var config = __webpack_require__(7);
	
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

/***/ },
/* 6 */
/***/ function(module, exports) {

	/*TMODJS:{}*/
	!function () {
		function a(a, b) {
			return (/string|function/.test(typeof b) ? h : g)(a, b)
		}
	
		function b(a, c) {
			return "string" != typeof a && (c = typeof a, "number" === c ? a += "" : a = "function" === c ? b(a.call(a)) : ""), a
		}
	
		function c(a) {
			return l[a]
		}
	
		function d(a) {
			return b(a).replace(/&(?![\w#]+;)|[<>"']/g, c)
		}
	
		function e(a, b) {
			if (m(a))for (var c = 0, d = a.length; d > c; c++)b.call(a, a[c], c, a); else for (c in a)b.call(a, a[c], c)
		}
	
		function f(a, b) {
			var c = /(\/)[^\/]+\1\.\.\1/, d = ("./" + a).replace(/[^\/]+$/, ""), e = d + b;
			for (e = e.replace(/\/\.\//g, "/"); e.match(c);)e = e.replace(c, "/");
			return e
		}
	
		function g(b, c) {
			var d = a.get(b) || i({filename: b, name: "Render Error", message: "Template not found"});
			return c ? d(c) : d
		}
	
		function h(a, b) {
			if ("string" == typeof b) {
				var c = b;
				b = function () {
					return new k(c)
				}
			}
			var d = j[a] = function (c) {
				try {
					return new b(c, a) + ""
				} catch (d) {
					return i(d)()
				}
			};
			return d.prototype = b.prototype = n, d.toString = function () {
				return b + ""
			}, d
		}
	
		function i(a) {
			var b = "{Template Error}", c = a.stack || "";
			if (c)c = c.split("\n").slice(0, 2).join("\n"); else for (var d in a)c += "<" + d + ">\n" + a[d] + "\n\n";
			return function () {
				return "object" == typeof console && console.error(b + "\n\n" + c), b
			}
		}
	
		var j = a.cache = {}, k = this.String, l = {
			"<": "&#60;",
			">": "&#62;",
			'"': "&#34;",
			"'": "&#39;",
			"&": "&#38;"
		}, m = Array.isArray || function (a) {
				return "[object Array]" === {}.toString.call(a)
			}, n = a.utils = {
			$helpers: {}, $include: function (a, b, c) {
				return a = f(c, a), g(a, b)
			}, $string: b, $escape: d, $each: e
		}, o = a.helpers = n.$helpers;
		a.get = function (a) {
			return j[a.replace(/^\.\//, "")]
		}, a.helper = function (a, b) {
			o[a] = b
		}, module.exports = a
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by humorHan on 16/11/18.
	 */
	module.exports = {
	    //七牛
	    //SOURCE: 'http://source.soyyin.com/',
	    //测试服 发布正式版要更改
	    SOURCE: 'http://7xsolp.com1.z0.glb.clouddn.com/',
	    //请求首页banner的数量
	    BANNER_NUM: 6,
	    //楼层数
	    FLOOR_NUM: 4
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by humorHan on 16/11/24.
	 */
	var ajax = __webpack_require__(4);
	var cartEmptyTpl = __webpack_require__(10);
	var cartTpl = __webpack_require__(11);
	__webpack_require__(5);
	
	var cart = {
	    cart: function(){
	        ajax({
	            url: '/api/v2/cart/brief',
	            success: function (data) {
	                $(".cart-num, .fix-cart-num").text(data.count);
	                if (data.count == 0) {
	                    $(".cart-products-wrap").html(cartEmptyTpl());
	                    return 1;
	                }
	                $(".cart-products-wrap").html(cartTpl(data));
	            }
	        });
	    },
	    deleteProduct: function(id){
	        var tThis = this;
	        ajax({
	            type: 'DELETE',
	            url: '/api/v2/cart/delete?id=' + id,
	            success: function (data) {
	                if (data.result === 0) {
	                    tThis.cart();
	                } else {
	                    tThis.wrong(data);
	                }
	            }
	        });
	    },
	    wrong: function(data) {
	        if (data.result == 5) {
	            alert("该资源不存在！");
	        } else if (data.result == 6) {
	            alert("不支持该操作！");
	        } else if (data.result == 8) {
	            alert("您没有权限操作，请联系管理员");
	        } else if (data.error_message) {
	            alert(data.error_message);
	        } else if (data.result == 1012) {
	            alert("提交频率过高，请稍后再试");
	        } else {
	            alert("出错了，请稍后重试");
	        }
	        location.reload();
	    },
	    initBtns: function(){
	        var tThis = this;
	        //划过购物车
	        $(".cart, .fix-cart").bind("mouseenter", function () {
	            tThis.cart();
	        });
	        //删除购物车某个数据
	        $(".cart-products-wrap").on("click", ".delete-product", function (e) {
	            e.preventDefault();
	            tThis.deleteProduct($(this).attr("data-product-id"));
	        });
	    }
	};
	
	$(function(){
	    cart.initBtns();
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(6);
	module.exports=template('src/tpl/common/cartEmpty','<div class="cart-empty font14"> 购物车还没有商品,快去挑选心仪的商品吧! </div>');

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(6);
	module.exports=template('src/tpl/common/cart',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,items=$data.items,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div class="products"> <span class="font12 block mb15">最新加入的商品:</span> <ul> ';
	$each(items,function($value,$index){
	$out+=' <li class="mb20 clearFix"> <a class="floatLeft" href="/cart?id=';
	$out+=$escape($value.product_id);
	$out+='#';
	$out+=$escape($value.brief);
	$out+='"> <img src="';
	$out+=$escape($helpers. getUrl($value.image_key ));
	$out+='" width="38" height="38"/> </a> <a class="floatLeft ml10" href="/cart?id=';
	$out+=$escape($value.product_id);
	$out+='#';
	$out+=$escape($value.brief);
	$out+='"> <div class="product-title font14 bold">';
	$out+=$escape($value.title);
	$out+='</div> <div class="product-brief font12 ellipsis w160">';
	$out+=$escape($value.brief);
	$out+='</div> </a> <div class="floatRight"> <div class="red bold font16"> ';
	if($value.is_custom){
	$out+=' 待定 ';
	}else{
	$out+=' ';
	$out+=$escape($helpers. processPrice($value.price ));
	$out+=' x ';
	$out+=$escape($value.quantity);
	$out+=' ';
	}
	$out+=' </div> <div class="delete-product font12 pointer floatRight" data-product-id="';
	$out+=$escape($value.id);
	$out+='">删除</div> </div> </li> ';
	});
	$out+=' </ul> <div class="see-cart floatRight font14 pointer">查看购物车 ></div> </div>';
	return new String($out);
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

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

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL25ld0xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NvbW1vbi9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcC91dGlsL2FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcC90ZW1wbGF0ZS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi90bW9kanMtbG9hZGVyL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcC9jb25maWcvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vZml4VG9wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vbmV3Q2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHBsL2NvbW1vbi9jYXJ0RW1wdHkudHBsIiwid2VicGFjazovLy8uL3NyYy90cGwvY29tbW9uL2NhcnQudHBsIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vcmlnaHRCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EscUNBQW9DLEdBQUc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFD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QSxjQUFhO0FBQ2IsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUMsRSIsImZpbGUiOiJqcy9uZXdDb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgaHVtb3JIYW4gb24gMTYvMTEvMTguXG4gKi9cbnJlcXVpcmUoJ2NvbW1vbi9iYXNlLnNjc3MnKTtcbnZhciBhamF4ID0gcmVxdWlyZShcInV0aWwvYWpheC5qc1wiKTtcbnJlcXVpcmUoXCJ0ZW1wbGF0ZS1oZWxwZXIuanNcIik7XG5cbnZhciBsb2dpbiA9IHtcbiAgICBsb2duQm94U2hhZGVMYXllcjogJChcIiNsb2dpbl9ib3hfc2hhZGVfbGF5ZXJcIiksXG4gICAgbG9naW5Cb3g6ICQoXCIjbG9naW5fYm94XCIpLFxuICAgIGxvZ2luU3VibWl0QnRuOiAkKFwiI2xvZ2luX3N1Ym1pdFwiKSxcbiAgICBlcnJvclRpcFdoZW5Mb2dpbjogJChcIiNsb2dpbl9lcnJvcl90aXBcIiksXG4gICAgZXJyb3JUaXBXaGVuQ29kZUxvZ2luOiAkKFwiI3F1aWNrX2xvZ2luX2Vycm9yX3RpcFwiKSxcbiAgICBpbml0OiBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIikgJiYgKGxvY2F0aW9uLmhhc2guaW5kZXhPZihcInNob3dMb2dpblwiKSA+IDApICYmICEoJC5jb29raWUoXCJpZFwiKSAmJiAkLmNvb2tpZShcInVzZXJuYW1lXCIpKSkge1xuICAgICAgICAgICAgbG9naW4uc2hvd1BvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVhZGVyTG9naW4oKTtcbiAgICAgICAgdGhpcy5pbml0QnRucygpO1xuICAgIH0sXG4gICAgdmFsaWRhdGVQaG9uZTogZnVuY3Rpb24ocGhvbmUpIHtcbiAgICAgICAgdmFyIHBob25lX3BhdHRlcm4gPSAvXlswLTldezExfSQvO1xuICAgICAgICBpZiAoIXBob25lX3BhdHRlcm4udGVzdChwaG9uZSkpIHtcbiAgICAgICAgICAgICQoXCIjcXVpY2tfbG9naW5fZXJyb3JfdGlwXCIpLmh0bWwoXCLor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7dcIik7XG4gICAgICAgICAgICAkKFwiI2xvZ2luX2l0ZW1fcGhvbmVcIikuZm9jdXMoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHdhaXRMb2dpbkNvZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciAkZG9tID0gJChcIiNnZXRfcGhvbmVfY29kZVwiKTtcbiAgICAgICAgJGRvbS5yZW1vdmVDbGFzcyhcImJ0bi1lbmFibGVcIikuYWRkQ2xhc3MoXCJidG4tZGlzYWJsZVwiKS50ZXh0KFwi6YeN5paw6I635Y+WNjBzXCIpO1xuICAgICAgICB2YXIgaSA9IDU5O1xuICAgICAgICBzZWxmLnNldF9sb2dpbl90aW1lID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkZG9tLnRleHQoXCLph43mlrDojrflj5ZcIiArIGkgKyBcInNcIik7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHNlbGYuc2V0X2xvZ2luX3RpbWUpO1xuICAgICAgICAgICAgICAgICQoXCIjZ2V0X3Bob25lX2NvZGVcIikucmVtb3ZlQ2xhc3MoXCJidG4tZGlzYWJsZVwiKS5hZGRDbGFzcyhcImJ0bi1lbmFibGVcIikudGV4dChcIuiOt+WPlumqjOivgeeggVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSxcbiAgICBzZW5kQ29kZTogZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHRUaGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRUaGlzLmdldFBob25lQ29kZUJ0bi5oYXNDbGFzcyhcImJ0bi1kaXNhYmxlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyICRwaG9uZU51bSA9ICQoXCIjbG9naW5faXRlbV9waG9uZVwiKTtcbiAgICAgICAgaWYgKCF0VGhpcy52YWxpZGF0ZVBob25lKCRwaG9uZU51bS52YWwoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI3F1aWNrX2xvZ2luX2Vycm9yX3RpcFwiKS5odG1sKFwiXCIpO1xuICAgICAgICBhamF4KHtcbiAgICAgICAgICAgIHVybDogJy9hcGkvdjIvd2ViL3VzZXJzL3NlbmQtbG9naW4tY29kZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgXCJwaG9uZVwiOiAkcGhvbmVOdW0udmFsKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdmFyICRkb20gPSAkKFwiI3F1aWNrX2xvZ2luX2Vycm9yX3RpcFwiKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0VGhpcy53YWl0TG9naW5Db2RlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNnZXRfcGhvbmVfY29kZVwiKS5yZW1vdmVDbGFzcyhcImJ0bi1kaXNhYmxlXCIpLmFkZENsYXNzKFwiYnRuLWVuYWJsZVwiKS50ZXh0KFwi6I635Y+W6aqM6K+B56CBXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGRvbS5odG1sKHJlc3VsdC5lcnJvcl9tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQucmVzdWx0ID09PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZG9tLmh0bWwoXCLlj5HpgIHnn63kv6HlpLHotKXvvIzor7fnqI3lkI7lho3or5VcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnJlc3VsdCA9PT0gMTAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGRvbS5odG1sKFwi5omL5py65Y+35qC85byP6ZSZ6K+vXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5yZXN1bHQgPT09IDEwMDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRkb20uaHRtbChcIuaWh+Wtl+mqjOivgeeggemUmeivr1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQucmVzdWx0ID09PSAxMDEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZG9tLmh0bWwoXCLor7fmsYLnmoTlpKrpopHnuYHvvIzor7fnqI3nrYkx5YiG6ZKf6YeN6K+VXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHZhbGlkYXRlVXNlcm5hbWVQd2Q6IGZ1bmN0aW9uKHVzZXJuYW1lLCBwd2QpIHtcbiAgICAgICAgdmFyIGVtYWlsX3BhdHRlcm4gPSAvXihbYS16QS1aMC05Xy1dKStAKFthLXpBLVowLTlfLV0pKyguW2EtekEtWjAtOV8tXSkrJC87XG4gICAgICAgIHZhciBwaG9uZV9wYXR0ZXJuID0gL15bMC05XXsxMX0kLztcbiAgICAgICAgaWYgKCFlbWFpbF9wYXR0ZXJuLnRlc3QodXNlcm5hbWUpICYmICFwaG9uZV9wYXR0ZXJuLnRlc3QodXNlcm5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yVGlwV2hlbkxvZ2luLmh0bWwoXCLor7fovpPlhaXmraPnoa7nmoTpgq7nrrHmiJbmiYvmnLrlj7dcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzZXJuYW1lLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yVGlwV2hlbkxvZ2luLmh0bWwoXCLotKblj7fov4fplb9cIik7XG4gICAgICAgICAgICAkKFwiI2xvZ2luX2l0ZW1fdXNlcm5hbWVcIikuZm9jdXMoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHdkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvclRpcFdoZW5Mb2dpbi5odG1sKFwi5a+G56CB5LiN6IO95Li656m6XCIpO1xuICAgICAgICAgICAgJChcIiNsb2dpbl9pdGVtX3Bhc3N3b3JkXCIpLmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHB3ZC5sZW5ndGggPiA1MCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvclRpcFdoZW5Mb2dpbi5odG1sKFwi5a+G56CB6L+H6ZW/XCIpO1xuICAgICAgICAgICAgJChcIiNsb2dpbl9pdGVtX3Bhc3N3b3JkXCIpLmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICB2YWxpZGF0ZVBob25lQ29kZTogZnVuY3Rpb24ocGhvbmUsIGNvZGUpIHtcbiAgICAgICAgdmFyIGNvZGVfcGF0dGVybiA9IC9eWzAtOV17NH0kLztcblxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVQaG9uZShwaG9uZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvZGVfcGF0dGVybi50ZXN0KGNvZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yVGlwV2hlbkNvZGVMb2dpbi5odG1sKFwi6K+36L6T5YWl5q2j56Gu55qE6aqM6K+B56CBXCIpO1xuICAgICAgICAgICAgJChcIiNsb2dpbl9pdGVtX2NvZGVcIikuZm9jdXMoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHVzZXJMb2dpbjogZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoc2VsZi5sb2dpblN1Ym1pdEJ0bi5oYXNDbGFzcyhcImJ0bi1kaXNhYmxlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgJChcIiNsb2dpbl9lcnJvcl90aXAsICNxdWlja19sb2dpbl9lcnJvcl90aXBcIikuaHRtbCgnJyk7XG4gICAgICAgIHZhciB0eXBlID0gJChcIi5sb2dpbi10eXBlLWNoZWNrZWRcIikuYXR0cihcImRhdGEtdHlwZVwiKTtcbiAgICAgICAgdmFyIHVybCwgZGF0YTtcbiAgICAgICAgaWYgKHR5cGUgPT0gJ2NvbW1vbkxvZycpIHtcbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiAkKFwiI2xvZ2luX2l0ZW1fdXNlcm5hbWVcIikudmFsKCksXG4gICAgICAgICAgICAgICAgXCJwYXNzd29yZFwiOiAkKFwiI2xvZ2luX2l0ZW1fcGFzc3dvcmRcIikudmFsKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXNlbGYudmFsaWRhdGVVc2VybmFtZVB3ZChkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybCA9ICcvYXBpL3YyL3dlYi91c2Vycy9sb2dpbic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogJChcIiNsb2dpbl9pdGVtX3Bob25lXCIpLnZhbCgpLFxuICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogJChcIiNsb2dpbl9pdGVtX2NvZGVcIikudmFsKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXNlbGYudmFsaWRhdGVQaG9uZUNvZGUoZGF0YS51c2VybmFtZSwgZGF0YS5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmwgPSAnL2FwaS92Mi93ZWIvdXNlcnMvY29kZS1sb2dpbic7XG4gICAgICAgIH1cbiAgICAgICAgJChcIiNsb2dpbl9lcnJvcl90aXAsICNxdWlja19sb2dpbl9lcnJvcl90aXBcIikuaHRtbCgnJyk7XG4gICAgICAgIHZhciBhdXRvX2xvZ2luID0gJChcIiNhdXRvX2xvZ2luXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBkYXRhW1wiYXV0b19sb2dpblwiXSA9IGF1dG9fbG9naW47XG4gICAgICAgIHNlbGYubG9naW5TdWJtaXRCdG4ucmVtb3ZlQ2xhc3MoXCJidG4tZW5hYmxlXCIpLmFkZENsYXNzKFwiYnRuLWRpc2FibGVcIikudGV4dChcIuato+WcqOeZu+W9le+8jOivt+eojeWQjlwiKTtcblxuICAgICAgICBhamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sb2dpblN1Ym1pdEJ0bi5yZW1vdmVDbGFzcyhcImJ0bi1kaXNhYmxlXCIpLmFkZENsYXNzKFwiYnRuLWVuYWJsZVwiKS50ZXh0KFwi55m7IOW9lVwiKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmxvZ2luLWJveC1zaGFkZS1sYXllciwubG9naW4tYm94XCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuZGlzcGxheV9uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGlzcGxheV9uYW1lID0gXCLmmoLml6BcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b19sb2dpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5jb29raWUoXCJpZFwiLCByZXN1bHQuaWQsIHsgZXhwaXJlczogMzAsIHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuY29va2llKFwidXNlcmlkXCIsIHJlc3VsdC5vbGRfdXNlcl9pbmZvX2lkLCB7IGV4cGlyZXM6IDMwLCBwYXRoOiAnLycgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmNvb2tpZShcInRydXRoaWRcIiwgcmVzdWx0LnV1aWQsIHsgZXhwaXJlczogMzAsIHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuY29va2llKFwidXNlcm5hbWVcIiwgcmVzdWx0LmRpc3BsYXlfbmFtZSwgeyBleHBpcmVzOiAzMCwgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5jb29raWUoXCJpbWFnZV91cmxcIiwgcmVzdWx0LmltYWdlX3VybCwgeyBleHBpcmVzOiAzMCwgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5jb29raWUoXCJ1c2VydHlwZVwiLCByZXN1bHQudHlwZSwgeyBleHBpcmVzOiAzMCwgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5jb29raWUoXCJpZFwiLCByZXN1bHQuaWQsIHsgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5jb29raWUoXCJ1c2VyaWRcIiwgcmVzdWx0Lm9sZF91c2VyX2luZm9faWQsIHsgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5jb29raWUoXCJ0cnV0aGlkXCIsIHJlc3VsdC51dWlkLCB7IHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuY29va2llKFwidXNlcm5hbWVcIiwgcmVzdWx0LmRpc3BsYXlfbmFtZSwgeyBwYXRoOiAnLycgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmNvb2tpZShcImltYWdlX3VybFwiLCByZXN1bHQuaW1hZ2VfdXJsLCB7IHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuY29va2llKFwidXNlcnR5cGVcIiwgcmVzdWx0LnR5cGUsIHsgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRIZWFkZXJMb2dpbigpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhbGxCYWNrV2hlbkZpbmlzaExvZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxCYWNrV2hlbkZpbmlzaExvZ2luKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JUaXAgPSB0eXBlID09ICdjb21tb25Mb2cnID8gc2VsZi5lcnJvclRpcFdoZW5Mb2dpbiA6IHNlbGYuZXJyb3JUaXBXaGVuQ29kZUxvZ2luO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JUaXAuaHRtbChyZXN1bHQuZXJyb3JfbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnJlc3VsdCA9PT0gMTAxMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JUaXAuaHRtbCh0eXBlID09ICdjb21tb25Mb2cnID8gXCLmiYvmnLrlj7fmiJblr4bnoIHplJnor69cIiA6IFwi5omL5py65Y+35oiW6aqM6K+B56CB6ZSZ6K+vXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5yZXN1bHQgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvclRpcC5odG1sKFwi5pen5pyN5Yqh5Zmo5Ye66ZSZ77yMXCIgKyByZXN1bHQuZXh0cmEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNob3dQb3A6IGZ1bmN0aW9uKGNhbGxCYWNrV2hlbkZpbmlzaExvZ2luKSB7XG4gICAgICAgIHRoaXMubG9naW5Cb3guc2hvdygpO1xuICAgICAgICB0aGlzLmxvZ25Cb3hTaGFkZUxheWVyLnNob3coKTtcbiAgICAgICAgaWYgKGNhbGxCYWNrV2hlbkZpbmlzaExvZ2luKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxCYWNrV2hlbkZpbmlzaExvZ2luID0gY2FsbEJhY2tXaGVuRmluaXNoTG9naW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxCYWNrV2hlbkZpbmlzaExvZ2luID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9nT3V0OiBmdW5jdGlvbigpe1xuICAgICAgICBhamF4KHtcbiAgICAgICAgICAgIHVybDogJy9hcGkvdjIvdXNlcnMvbG9nb3V0JyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkLmNvb2tpZShcImlkXCIsIFwiXCIsIHsgZXhwaXJlczogLTEsIHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICAkLmNvb2tpZShcInVzZXJpZFwiLCBcIlwiLCB7IGV4cGlyZXM6IC0xLCBwYXRoOiAnLycgfSk7XG4gICAgICAgICAgICAgICAgJC5jb29raWUoXCJ0cnV0aGlkXCIsIFwiXCIsIHsgZXhwaXJlczogLTEsIHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICAkLmNvb2tpZShcInVzZXJuYW1lXCIsIFwiXCIsIHsgZXhwaXJlczogLTEsIHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICAkLmNvb2tpZShcImltYWdlX3VybFwiLCBcIlwiLCB7IGV4cGlyZXM6IC0xLCBwYXRoOiAnLycgfSk7XG4gICAgICAgICAgICAgICAgJC5jb29raWUoXCJ1c2VydHlwZVwiLCBcIlwiLCB7IGV4cGlyZXM6IC0xLCBwYXRoOiAnLycgfSk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL25ld1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNldEhlYWRlckxvZ2luOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRydXRoSWQgPSAkLmNvb2tpZShcInRydXRoaWRcIik7XG4gICAgICAgIHZhciB1c2VyTmFtZSA9ICQuY29va2llKFwidXNlcm5hbWVcIik7XG4gICAgICAgIGlmICh0cnV0aElkICYmIHVzZXJOYW1lKSB7XG4gICAgICAgICAgICBpZiAodXNlck5hbWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICQoXCIubG9naW4tc3RhdHVzXCIpLmF0dHIoXCJ0aXRsZVwiLCB1c2VyTmFtZSk7XG4gICAgICAgICAgICAgICAgdXNlck5hbWUgPSB1c2VyTmFtZS5zdWJzdHIoMCwgNCkgKyBcIi4uLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJChcIi5zdGF0dXMxXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIubG9naW4tc3RhdHVzXCIpLnNob3coKS5maW5kKFwic3BhblwiKS50ZXh0KCfmrKLov47mgqgsJyArIHVzZXJOYW1lKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaW5pdEJ0bnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRUaGlzID0gdGhpcztcbiAgICAgICAgLy/liIfmjaLnmbvlvZXmlrnlvI9cbiAgICAgICAgJChcIiNsb2dpbl90eXBlXCIpLmZpbmQoXCJsaVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChcIi5sb2dpbi10eXBlLWNoZWNrZWRcIikucmVtb3ZlQ2xhc3MoXCJsb2dpbi10eXBlLWNoZWNrZWRcIik7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwibG9naW4tdHlwZS1jaGVja2VkXCIpO1xuICAgICAgICAgICAgJChcIi5mb3JtLXR5cGVcIikuaGlkZSgpO1xuICAgICAgICAgICAgJCgnIycgKyAkKHRoaXMpLmF0dHIoXCJkYXRhLXR5cGVcIikpLnNob3coKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8v54K55Ye75by55Ye655m75b2V5by55qGGXG4gICAgICAgICQoXCIubG9naW5cIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCIubG9naW4tYm94LXNoYWRlLWxheWVyLC5sb2dpbi1ib3hcIikuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy/lhbPpl63nmbvlvZXlvLnmoYZcbiAgICAgICAgJChcIiNsb2dpbl9ib3hfY2xvc2VcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCIubG9naW4tYm94LXNoYWRlLWxheWVyLC5sb2dpbi1ib3hcIikuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy/oh6rliqjnmbvlvZXmjInpkq5cbiAgICAgICAgJChcIi5hdXRvLWxvZ2luXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSA/ICQodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikgOiAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy/ojrflj5bpqozor4HnoIHmjInpkq5cbiAgICAgICAgJChcIiNnZXRfcGhvbmVfY29kZVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdFRoaXMuc2VuZENvZGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8v55m75b2VXG4gICAgICAgICQoXCIjbG9naW5fc3VibWl0XCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0VGhpcy51c2VyTG9naW4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8v6YCA5Ye65oyJ6ZKuXG4gICAgICAgICQoXCIubG9naW4tb3V0LWJ0blwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRUaGlzLmxvZ091dCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4kKGZ1bmN0aW9uKCl7XG4gICAgbG9naW4uaW5pdCgpO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tbW9uL25ld0xvZ2luLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy9jb21tb24vYmFzZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAxNi8xMS8xNy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICQuYWpheFNldHVwKHtcbiAgICAgICAgY2FjaGU6IGZhbHNlXG4gICAgfSk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogb3B0aW9ucy50eXBlIHx8ICdHRVQnLFxuICAgICAgICB1cmw6IG9wdGlvbnMudXJsLFxuICAgICAgICBkYXRhOiBvcHRpb25zLmRhdGEgfHwge30sXG4gICAgICAgIGRhdGFUeXBlOiBvcHRpb25zLmRhdGFUeXBlIHx8ICdqc29uJyxcbiAgICAgICAgY29udGVudFR5cGU6IG9wdGlvbnMuY29udGVudFR5cGUgfHwgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBUT0RPIOmUmeivr+WkhOeQhuWSjOW8uuWItui3s+i9rOetiVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmVycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kZXAvdXRpbC9hamF4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDIwMTYvMTEvMTguXG4gKi9cbnZhciBhcnQgPSByZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKFwiY29uZmlnL2NvbmZpZy5qc1wiKTtcblxuLy/ml7bpl7TmiLPovazljJbmlrnms5VcbmFydC5oZWxwZXIoJ2RhdGVGb3JtYXQnLCBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGUucmVwbGFjZShcIi9EYXRlKFwiLCBcIlwiKS5yZXBsYWNlKFwiKS9cIiwgXCJcIiksIDEwKSk7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIHZhciBtYXAgPSB7XG4gICAgICAgIFwiWVwiOiBkYXRlLmdldFllYXIoKSxcbiAgICAgICAgXCJNXCI6IGRhdGUuZ2V0TW9udGgoKSArIDEsIC8v5pyI5Lu9XG4gICAgICAgIFwiZFwiOiBkYXRlLmdldERhdGUoKSwgLy/ml6VcbiAgICAgICAgXCJoXCI6IGRhdGUuZ2V0SG91cnMoKSwgLy/lsI/ml7ZcbiAgICAgICAgXCJtXCI6IGRhdGUuZ2V0TWludXRlcygpLCAvL+WIhlxuICAgICAgICBcInNcIjogZGF0ZS5nZXRTZWNvbmRzKCksIC8v56eSXG4gICAgICAgIFwicVwiOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6plxuICAgICAgICBcIlNcIjogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvL+avq+enklxuICAgIH07XG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoLyhbeU1kaG1zcVNdKSsvZywgZnVuY3Rpb24gKGFsbCwgdCkge1xuICAgICAgICB2YXIgdiA9IG1hcFt0XTtcbiAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGFsbC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdiA9ICcwJyArIHY7XG4gICAgICAgICAgICAgICAgdiA9IHYuc3Vic3RyKHYubGVuZ3RoIC0gMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ID09PSAneScpIHtcbiAgICAgICAgICAgIHJldHVybiAoZGF0ZS5nZXRGdWxsWWVhcigpICsgJycpLnN1YnN0cig0IC0gYWxsLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybWF0O1xufSk7XG5cbi8v5b6X5Yiw5Zu+54mH5Zyw5Z2AXG5hcnQuaGVscGVyKCdnZXRVcmwnLGZ1bmN0aW9uKHVybCl7XG4gICAgcmV0dXJuIGNvbmZpZy5TT1VSQ0UgKyB1cmw7XG59KTtcblxuLy/lpITnkIbku7fmoLwgMzkwMOWPmOaIkDM5LjAwXG5hcnQuaGVscGVyKCdwcm9jZXNzUHJpY2UnLCBmdW5jdGlvbihwKXtcbiAgICB2YXIgc3RyID0gcCArIFwiXCI7XG4gICAgdmFyIGFyciA9IHN0ci5zcGxpdChcIlwiKTtcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBhcnIudW5zaGlmdChcIjBcIiwgXCIwXCIpO1xuICAgIH0gZWxzZSBpZiAoYXJyLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBhcnIudW5zaGlmdChcIjBcIik7XG4gICAgfVxuICAgIGFyci5zcGxpY2UoYXJyLmxlbmd0aCAtIDIsIDAsIFwiLlwiKTtcbiAgICB2YXIgcmVhbCA9IGFyci5qb2luKFwiXCIpO1xuICAgIHJldHVybiByZWFsO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGVwL3RlbXBsYXRlLWhlbHBlci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qVE1PREpTOnt9Ki9cclxuIWZ1bmN0aW9uICgpIHtcclxuXHRmdW5jdGlvbiBhKGEsIGIpIHtcclxuXHRcdHJldHVybiAoL3N0cmluZ3xmdW5jdGlvbi8udGVzdCh0eXBlb2YgYikgPyBoIDogZykoYSwgYilcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGIoYSwgYykge1xyXG5cdFx0cmV0dXJuIFwic3RyaW5nXCIgIT0gdHlwZW9mIGEgJiYgKGMgPSB0eXBlb2YgYSwgXCJudW1iZXJcIiA9PT0gYyA/IGEgKz0gXCJcIiA6IGEgPSBcImZ1bmN0aW9uXCIgPT09IGMgPyBiKGEuY2FsbChhKSkgOiBcIlwiKSwgYVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYyhhKSB7XHJcblx0XHRyZXR1cm4gbFthXVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZChhKSB7XHJcblx0XHRyZXR1cm4gYihhKS5yZXBsYWNlKC8mKD8hW1xcdyNdKzspfFs8PlwiJ10vZywgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGUoYSwgYikge1xyXG5cdFx0aWYgKG0oYSkpZm9yICh2YXIgYyA9IDAsIGQgPSBhLmxlbmd0aDsgZCA+IGM7IGMrKyliLmNhbGwoYSwgYVtjXSwgYywgYSk7IGVsc2UgZm9yIChjIGluIGEpYi5jYWxsKGEsIGFbY10sIGMpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmKGEsIGIpIHtcclxuXHRcdHZhciBjID0gLyhcXC8pW15cXC9dK1xcMVxcLlxcLlxcMS8sIGQgPSAoXCIuL1wiICsgYSkucmVwbGFjZSgvW15cXC9dKyQvLCBcIlwiKSwgZSA9IGQgKyBiO1xyXG5cdFx0Zm9yIChlID0gZS5yZXBsYWNlKC9cXC9cXC5cXC8vZywgXCIvXCIpOyBlLm1hdGNoKGMpOyllID0gZS5yZXBsYWNlKGMsIFwiL1wiKTtcclxuXHRcdHJldHVybiBlXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnKGIsIGMpIHtcclxuXHRcdHZhciBkID0gYS5nZXQoYikgfHwgaSh7ZmlsZW5hbWU6IGIsIG5hbWU6IFwiUmVuZGVyIEVycm9yXCIsIG1lc3NhZ2U6IFwiVGVtcGxhdGUgbm90IGZvdW5kXCJ9KTtcclxuXHRcdHJldHVybiBjID8gZChjKSA6IGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGgoYSwgYikge1xyXG5cdFx0aWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGIpIHtcclxuXHRcdFx0dmFyIGMgPSBiO1xyXG5cdFx0XHRiID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgayhjKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR2YXIgZCA9IGpbYV0gPSBmdW5jdGlvbiAoYykge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgYihjLCBhKSArIFwiXCJcclxuXHRcdFx0fSBjYXRjaCAoZCkge1xyXG5cdFx0XHRcdHJldHVybiBpKGQpKClcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBkLnByb3RvdHlwZSA9IGIucHJvdG90eXBlID0gbiwgZC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIGIgKyBcIlwiXHJcblx0XHR9LCBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpKGEpIHtcclxuXHRcdHZhciBiID0gXCJ7VGVtcGxhdGUgRXJyb3J9XCIsIGMgPSBhLnN0YWNrIHx8IFwiXCI7XHJcblx0XHRpZiAoYyljID0gYy5zcGxpdChcIlxcblwiKS5zbGljZSgwLCAyKS5qb2luKFwiXFxuXCIpOyBlbHNlIGZvciAodmFyIGQgaW4gYSljICs9IFwiPFwiICsgZCArIFwiPlxcblwiICsgYVtkXSArIFwiXFxuXFxuXCI7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gXCJvYmplY3RcIiA9PSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKGIgKyBcIlxcblxcblwiICsgYyksIGJcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBqID0gYS5jYWNoZSA9IHt9LCBrID0gdGhpcy5TdHJpbmcsIGwgPSB7XHJcblx0XHRcIjxcIjogXCImIzYwO1wiLFxyXG5cdFx0XCI+XCI6IFwiJiM2MjtcIixcclxuXHRcdCdcIic6IFwiJiMzNDtcIixcclxuXHRcdFwiJ1wiOiBcIiYjMzk7XCIsXHJcblx0XHRcIiZcIjogXCImIzM4O1wiXHJcblx0fSwgbSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGEpIHtcclxuXHRcdFx0cmV0dXJuIFwiW29iamVjdCBBcnJheV1cIiA9PT0ge30udG9TdHJpbmcuY2FsbChhKVxyXG5cdFx0fSwgbiA9IGEudXRpbHMgPSB7XHJcblx0XHQkaGVscGVyczoge30sICRpbmNsdWRlOiBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG5cdFx0XHRyZXR1cm4gYSA9IGYoYywgYSksIGcoYSwgYilcclxuXHRcdH0sICRzdHJpbmc6IGIsICRlc2NhcGU6IGQsICRlYWNoOiBlXHJcblx0fSwgbyA9IGEuaGVscGVycyA9IG4uJGhlbHBlcnM7XHJcblx0YS5nZXQgPSBmdW5jdGlvbiAoYSkge1xyXG5cdFx0cmV0dXJuIGpbYS5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIildXHJcblx0fSwgYS5oZWxwZXIgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0b1thXSA9IGJcclxuXHR9LCBtb2R1bGUuZXhwb3J0cyA9IGFcclxufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90bW9kanMtbG9hZGVyL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENyZWF0ZWQgYnkgaHVtb3JIYW4gb24gMTYvMTEvMTguXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8v5LiD54mbXG4gICAgLy9TT1VSQ0U6ICdodHRwOi8vc291cmNlLnNveXlpbi5jb20vJyxcbiAgICAvL+a1i+ivleacjSDlj5HluIPmraPlvI/niYjopoHmm7TmlLlcbiAgICBTT1VSQ0U6ICdodHRwOi8vN3hzb2xwLmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tLycsXG4gICAgLy/or7fmsYLpppbpobViYW5uZXLnmoTmlbDph49cbiAgICBCQU5ORVJfTlVNOiA2LFxuICAgIC8v5qW85bGC5pWwXG4gICAgRkxPT1JfTlVNOiA0XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RlcC9jb25maWcvY29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDE2LzExLzI0LlxuICovXG52YXIgdG9wID0ge1xuICAgIGZpeFRvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gJChcIi50b3RhbC1wcm9kdWN0XCIpLm9mZnNldCgpLnRvcCArIDQwKSB7XG4gICAgICAgICAgICAkKFwiLmZpeC10b3Atd3JhcFwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiLmZpeC10b3Atd3JhcFwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXRCdG5zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0VGhpcyA9IHRoaXM7XG4gICAgICAgIC8v55uR5ZCs5rua5Yqo5LqL5Lu2XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdFRoaXMuZml4VG9wKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbiQoZnVuY3Rpb24gKCkge1xuICAgIC8vIOWwneivleaJp+ihjFxuICAgIHRvcC5maXhUb3AoKTtcbiAgICB0b3AuaW5pdEJ0bnMoKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbW1vbi9maXhUb3AuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDE2LzExLzI0LlxuICovXG52YXIgYWpheCA9IHJlcXVpcmUoXCJ1dGlsL2FqYXguanNcIik7XG52YXIgY2FydEVtcHR5VHBsID0gcmVxdWlyZShcImNvbW1vbi9jYXJ0RW1wdHkudHBsXCIpO1xudmFyIGNhcnRUcGwgPSByZXF1aXJlKFwiY29tbW9uL2NhcnQudHBsXCIpO1xucmVxdWlyZShcInRlbXBsYXRlLWhlbHBlci5qc1wiKTtcblxudmFyIGNhcnQgPSB7XG4gICAgY2FydDogZnVuY3Rpb24oKXtcbiAgICAgICAgYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvYXBpL3YyL2NhcnQvYnJpZWYnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkKFwiLmNhcnQtbnVtLCAuZml4LWNhcnQtbnVtXCIpLnRleHQoZGF0YS5jb3VudCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuY291bnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmNhcnQtcHJvZHVjdHMtd3JhcFwiKS5odG1sKGNhcnRFbXB0eVRwbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoXCIuY2FydC1wcm9kdWN0cy13cmFwXCIpLmh0bWwoY2FydFRwbChkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVsZXRlUHJvZHVjdDogZnVuY3Rpb24oaWQpe1xuICAgICAgICB2YXIgdFRoaXMgPSB0aGlzO1xuICAgICAgICBhamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICAgICAgdXJsOiAnL2FwaS92Mi9jYXJ0L2RlbGV0ZT9pZD0nICsgaWQsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0VGhpcy5jYXJ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdFRoaXMud3JvbmcoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHdyb25nOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSA1KSB7XG4gICAgICAgICAgICBhbGVydChcIuivpei1hOa6kOS4jeWtmOWcqO+8gVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSA2KSB7XG4gICAgICAgICAgICBhbGVydChcIuS4jeaUr+aMgeivpeaTjeS9nO+8gVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSA4KSB7XG4gICAgICAgICAgICBhbGVydChcIuaCqOayoeacieadg+mZkOaTjeS9nO+8jOivt+iBlOezu+euoeeQhuWRmFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmVycm9yX21lc3NhZ2UpIHtcbiAgICAgICAgICAgIGFsZXJ0KGRhdGEuZXJyb3JfbWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gMTAxMikge1xuICAgICAgICAgICAgYWxlcnQoXCLmj5DkuqTpopHnjofov4fpq5jvvIzor7fnqI3lkI7lho3or5VcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIuWHuumUmeS6hu+8jOivt+eojeWQjumHjeivlVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LFxuICAgIGluaXRCdG5zOiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdFRoaXMgPSB0aGlzO1xuICAgICAgICAvL+WIkui/h+i0reeJqei9plxuICAgICAgICAkKFwiLmNhcnQsIC5maXgtY2FydFwiKS5iaW5kKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0VGhpcy5jYXJ0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvL+WIoOmZpOi0reeJqei9puafkOS4quaVsOaNrlxuICAgICAgICAkKFwiLmNhcnQtcHJvZHVjdHMtd3JhcFwiKS5vbihcImNsaWNrXCIsIFwiLmRlbGV0ZS1wcm9kdWN0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0VGhpcy5kZWxldGVQcm9kdWN0KCQodGhpcykuYXR0cihcImRhdGEtcHJvZHVjdC1pZFwiKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbiQoZnVuY3Rpb24oKXtcbiAgICBjYXJ0LmluaXRCdG5zKCk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb21tb24vbmV3Q2FydC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnc3JjL3RwbC9jb21tb24vY2FydEVtcHR5JywnPGRpdiBjbGFzcz1cImNhcnQtZW1wdHkgZm9udDE0XCI+IOi0reeJqei9pui/mOayoeacieWVhuWTgSzlv6vljrvmjJHpgInlv4Pku6rnmoTllYblk4HlkKchIDwvZGl2PicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RwbC9jb21tb24vY2FydEVtcHR5LnRwbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ3NyYy90cGwvY29tbW9uL2NhcnQnLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLGl0ZW1zPSRkYXRhLml0ZW1zLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLCRvdXQ9Jyc7JG91dCs9JzxkaXYgY2xhc3M9XCJwcm9kdWN0c1wiPiA8c3BhbiBjbGFzcz1cImZvbnQxMiBibG9jayBtYjE1XCI+5pyA5paw5Yqg5YWl55qE5ZWG5ZOBOjwvc3Bhbj4gPHVsPiAnO1xuJGVhY2goaXRlbXMsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nIDxsaSBjbGFzcz1cIm1iMjAgY2xlYXJGaXhcIj4gPGEgY2xhc3M9XCJmbG9hdExlZnRcIiBocmVmPVwiL2NhcnQ/aWQ9JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLnByb2R1Y3RfaWQpO1xuJG91dCs9JyMnO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuYnJpZWYpO1xuJG91dCs9J1wiPiA8aW1nIHNyYz1cIic7XG4kb3V0Kz0kZXNjYXBlKCRoZWxwZXJzLiBnZXRVcmwoJHZhbHVlLmltYWdlX2tleSApKTtcbiRvdXQrPSdcIiB3aWR0aD1cIjM4XCIgaGVpZ2h0PVwiMzhcIi8+IDwvYT4gPGEgY2xhc3M9XCJmbG9hdExlZnQgbWwxMFwiIGhyZWY9XCIvY2FydD9pZD0nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUucHJvZHVjdF9pZCk7XG4kb3V0Kz0nIyc7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5icmllZik7XG4kb3V0Kz0nXCI+IDxkaXYgY2xhc3M9XCJwcm9kdWN0LXRpdGxlIGZvbnQxNCBib2xkXCI+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLnRpdGxlKTtcbiRvdXQrPSc8L2Rpdj4gPGRpdiBjbGFzcz1cInByb2R1Y3QtYnJpZWYgZm9udDEyIGVsbGlwc2lzIHcxNjBcIj4nO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuYnJpZWYpO1xuJG91dCs9JzwvZGl2PiA8L2E+IDxkaXYgY2xhc3M9XCJmbG9hdFJpZ2h0XCI+IDxkaXYgY2xhc3M9XCJyZWQgYm9sZCBmb250MTZcIj4gJztcbmlmKCR2YWx1ZS5pc19jdXN0b20pe1xuJG91dCs9JyDlvoXlrpogJztcbn1lbHNle1xuJG91dCs9JyAnO1xuJG91dCs9JGVzY2FwZSgkaGVscGVycy4gcHJvY2Vzc1ByaWNlKCR2YWx1ZS5wcmljZSApKTtcbiRvdXQrPScgeCAnO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUucXVhbnRpdHkpO1xuJG91dCs9JyAnO1xufVxuJG91dCs9JyA8L2Rpdj4gPGRpdiBjbGFzcz1cImRlbGV0ZS1wcm9kdWN0IGZvbnQxMiBwb2ludGVyIGZsb2F0UmlnaHRcIiBkYXRhLXByb2R1Y3QtaWQ9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuaWQpO1xuJG91dCs9J1wiPuWIoOmZpDwvZGl2PiA8L2Rpdj4gPC9saT4gJztcbn0pO1xuJG91dCs9JyA8L3VsPiA8ZGl2IGNsYXNzPVwic2VlLWNhcnQgZmxvYXRSaWdodCBmb250MTQgcG9pbnRlclwiPuafpeeci+i0reeJqei9piA+PC9kaXY+IDwvZGl2Pic7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RwbC9jb21tb24vY2FydC50cGxcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAxNi8xMS8yNC5cbiAqL1xudmFyIHJpZ2h0QmFyID0ge1xuICAgIGNhbGxMYXRlcjogZnVuY3Rpb24oY29udGFjdCl7XG4gICAgICAgIGFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiAnL2FwaS92Mi9vdGhlcnMvc3VibWl0LWNvbnRhY3QnLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGNvbnRhY3Q6IGNvbnRhY3RcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIueojeWQjuaCqOWwhuaOpeWIsOaIkeS7rOeahOeUteivne+8jOivpemAmuivneWvueaCqOWujOWFqOWFjei0ue+8jOivt+aUvuW/g+aOpeWQrO+8geaCqOS5n+WPr+S7pemAmui/h+eCueWHu+Wxj+W5leWPs+S+p+eahOKAnOiBlOezu+WuouacjeKAneaMiemSruebtOaOpVFR5Zyo57q/5ZKo6K+i44CCXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGluaXRCdG5zOiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdFRoaXMgPSB0aGlzO1xuICAgICAgICAvL+WFjei0uemAmuivneaMiemSrlxuICAgICAgICAkKFwiLmNhbGwtbGF0ZXItYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhY3QgPSAkKFwiLnlvdXItcGhvbmVcIikudmFsKCk7XG4gICAgICAgICAgICBpZiAoL14oW1xcK11bMC05XXsxLDN9KFsgXFwuXFwtXSk/KT8oW1xcKF1bMC05XXsxLDZ9W1xcKV0pPyhbMC05IFxcLlxcLV17MSwzMn0pKChbQS1aYS16IFxcOl17MSwxMX0pP1swLTldezEsNH0/KSQvLnRlc3QoY29udGFjdCkpIHtcbiAgICAgICAgICAgICAgICB0VGhpcy5jYWxsTGF0ZXIoY29udGFjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwi6K+35oKo6L6T5YWl5q2j56Gu55qE5Y+356CB77yM5omL5py65Y+356CB6K+355u05o6l6L6T5YWl77yM5bqn5py66K+35Yqg5Yy65Y+3XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy/lhbPpl63lhY3otLnpgJror51cbiAgICAgICAgJChcIi5yaWdodC1jbG9zZVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChcIi5jYWxsLWxhdGVyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmFkZENsYXNzKFwibm9uZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8v5YiS6L+H54Ot57q/55S16K+daWNvblxuICAgICAgICAkKFwiLnJpZ2h0LXBob25lXCIpLmJpbmQoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChcIi5jYWxsLWxhdGVyXCIpLnJlbW92ZUNsYXNzKFwibm9uZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8v6L+U5Zue6aG26YOoXG4gICAgICAgICQoXCIuZ29Ub3BcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbiQoZnVuY3Rpb24oKXtcbiAgICByaWdodEJhci5pbml0QnRucygpO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tbW9uL3JpZ2h0QmFyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9