webpackJsonp([0,2],[function(e,exports,t){t(1),t(10),t(11),e.exports=t(14)},function(e,exports,t){t(2);var n=t(6);t(7);var i={lognBoxShadeLayer:$("#login_box_shade_layer"),loginBox:$("#login_box"),loginSubmitBtn:$("#login_submit"),errorTipWhenLogin:$("#login_error_tip"),errorTipWhenCodeLogin:$("#quick_login_error_tip"),init:function(){!("/"===location.pathname&&location.hash.indexOf("showLogin")>0)||$.cookie("id")&&$.cookie("username")||i.showPop(),this.setHeaderLogin(),this.initBtns()},validatePhone:function(e){var t=/^[0-9]{11}$/;return!!t.test(e)||($("#quick_login_error_tip").html("请输入正确的手机号"),$("#login_item_phone").focus(),!1)},waitLoginCode:function(){var e=this,t=$("#get_phone_code");t.removeClass("btn-enable").addClass("btn-disable").text("重新获取60s");var n=59;e.set_login_time=setInterval(function(){t.text("重新获取"+n+"s"),n--,n===-1&&(clearInterval(e.set_login_time),$("#get_phone_code").removeClass("btn-disable").addClass("btn-enable").text("获取验证码"))},1e3)},sendCode:function(){var e=this;if(e.getPhoneCodeBtn.hasClass("btn-disable"))return!1;var t=$("#login_item_phone");return!!e.validatePhone(t.val())&&($("#quick_login_error_tip").html(""),void n({url:"/api/v2/web/users/send-login-code",data:{phone:t.val()},success:function(t){var n=$("#quick_login_error_tip");0===t.result?e.waitLoginCode():($("#get_phone_code").removeClass("btn-disable").addClass("btn-enable").text("获取验证码"),4===t.result?n.html(t.error_message):9===t.result?n.html("发送短信失败，请稍后再试"):1010===t.result?n.html("手机号格式错误"):1009===t.result?n.html("文字验证码错误"):1012===t.result&&n.html("请求的太频繁，请稍等1分钟重试"))}}))},validateUsernamePwd:function(e,t){var n=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/,i=/^[0-9]{11}$/;return n.test(e)||i.test(e)?e.length>50?(this.errorTipWhenLogin.html("账号过长"),$("#login_item_username").focus(),!1):0===t.length?(this.errorTipWhenLogin.html("密码不能为空"),$("#login_item_password").focus(),!1):!(t.length>50)||(this.errorTipWhenLogin.html("密码过长"),$("#login_item_password").focus(),!1):(this.errorTipWhenLogin.html("请输入正确的邮箱或手机号"),!1)},validatePhoneCode:function(e,t){var n=/^[0-9]{4}$/;return!!this.validatePhone(e)&&(!!n.test(t)||(this.errorTipWhenCodeLogin.html("请输入正确的验证码"),$("#login_item_code").focus(),!1))},userLogin:function(){var e=this;if(!e.loginSubmitBtn.hasClass("btn-disable")){$("#login_error_tip, #quick_login_error_tip").html("");var t,i,o=$(".login-type-checked").attr("data-type");if("commonLog"==o){if(i={username:$("#login_item_username").val(),password:$("#login_item_password").val()},!e.validateUsernamePwd(i.username,i.password))return;t="/api/v2/web/users/login"}else{if(i={username:$("#login_item_phone").val(),password:$("#login_item_code").val()},!e.validatePhoneCode(i.username,i.password))return;t="/api/v2/web/users/code-login"}$("#login_error_tip, #quick_login_error_tip").html("");var r=$("#auto_login").hasClass("active");i.auto_login=r,e.loginSubmitBtn.removeClass("btn-enable").addClass("btn-disable").text("正在登录，请稍后"),n({type:"POST",url:t,data:JSON.stringify(i),success:function(t){if(e.loginSubmitBtn.removeClass("btn-disable").addClass("btn-enable").text("登 录"),0===t.result)$(".login-box-shade-layer,.login-box").hide(),t.display_name||(t.display_name="暂无"),r?($.cookie("id",t.id,{expires:30,path:"/"}),$.cookie("userid",t.old_user_info_id,{expires:30,path:"/"}),$.cookie("truthid",t.uuid,{expires:30,path:"/"}),$.cookie("username",t.display_name,{expires:30,path:"/"}),$.cookie("image_url",t.image_url,{expires:30,path:"/"}),$.cookie("usertype",t.type,{expires:30,path:"/"})):($.cookie("id",t.id,{path:"/"}),$.cookie("userid",t.old_user_info_id,{path:"/"}),$.cookie("truthid",t.uuid,{path:"/"}),$.cookie("username",t.display_name,{path:"/"}),$.cookie("image_url",t.image_url,{path:"/"}),$.cookie("usertype",t.type,{path:"/"})),e.setHeaderLogin(),e.callBackWhenFinishLogin?e.callBackWhenFinishLogin():location.reload(!0);else{var n="commonLog"==o?e.errorTipWhenLogin:e.errorTipWhenCodeLogin;4===t.result?n.html(t.error_message):1013===t.result?n.html("commonLog"==o?"手机号或密码错误":"手机号或验证码错误"):10===t.result&&n.html("旧服务器出错，"+t.extra)}}})}},showPop:function(e){this.loginBox.show(),this.lognBoxShadeLayer.show(),e?this.callBackWhenFinishLogin=e:this.callBackWhenFinishLogin=null},logOut:function(){n({url:"/api/v2/users/logout",success:function(){$.cookie("id","",{expires:-1,path:"/"}),$.cookie("userid","",{expires:-1,path:"/"}),$.cookie("truthid","",{expires:-1,path:"/"}),$.cookie("username","",{expires:-1,path:"/"}),$.cookie("image_url","",{expires:-1,path:"/"}),$.cookie("usertype","",{expires:-1,path:"/"}),location.href="/new"}})},setHeaderLogin:function(){var e=$.cookie("truthid"),t=$.cookie("username");e&&t&&(t.length>4&&($(".login-status").attr("title",t),t=t.substr(0,4)+"..."),$(".status1").hide(),$(".login-status").show().find("span").text("欢迎您,"+t))},initBtns:function(){var e=this;$("#login_type").find("li").bind("click",function(){$(".login-type-checked").removeClass("login-type-checked"),$(this).addClass("login-type-checked"),$(".form-type").hide(),$("#"+$(this).attr("data-type")).show()}),$(".login").bind("click",function(){$(".login-box-shade-layer,.login-box").show()}),$("#login_box_close").bind("click",function(){$(".login-box-shade-layer,.login-box").hide()}),$(".auto-login").bind("click",function(){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active")}),$("#get_phone_code").bind("click",function(){e.sendCode()}),$("#login_submit").bind("click",function(){e.userLogin()}),$(".login-out-btn").click(function(){e.logOut()})}};$(function(){i.init()})},function(e,exports){},,,,function(e,exports){e.exports=function(e){$.ajaxSetup({cache:!1}),$.ajax({type:e.type||"GET",url:e.url,data:e.data||{},dataType:e.dataType||"json",contentType:e.contentType||"application/json",success:function(t){e.success(t)},error:function(){e.error&&e.error()}})}},function(e,exports,t){var n=t(8),i=t(9);n.helper("dateFormat",function(e,t){e=new Date(parseInt(e.replace("/Date(","").replace(")/",""),10)),e=new Date(e);var n={Y:e.getYear(),M:e.getMonth()+1,d:e.getDate(),h:e.getHours(),m:e.getMinutes(),s:e.getSeconds(),q:Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};return t=t.replace(/([yMdhmsqS])+/g,function(t,i){var o=n[i];return void 0!==o?(t.length>1&&(o="0"+o,o=o.substr(o.length-2)),o):"y"===i?(e.getFullYear()+"").substr(4-t.length):t})}),n.helper("getUrl",function(e){return i.SOURCE+e}),n.helper("processPrice",function(e){var t=e+"",n=t.split("");1===n.length?n.unshift("0","0"):2===n.length&&n.unshift("0"),n.splice(n.length-2,0,".");var i=n.join("");return i})},function(e,exports){!function(){function t(e,t){return(/string|function/.test(typeof t)?l:s)(e,t)}function n(e,t){return"string"!=typeof e&&(t=typeof e,"number"===t?e+="":e="function"===t?n(e.call(e)):""),e}function i(e){return p[e]}function o(e){return n(e).replace(/&(?![\w#]+;)|[<>"']/g,i)}function r(e,t){if(h(e))for(var n=0,i=e.length;i>n;n++)t.call(e,e[n],n,e);else for(n in e)t.call(e,e[n],n)}function a(e,t){var n=/(\/)[^\/]+\1\.\.\1/,i=("./"+e).replace(/[^\/]+$/,""),o=i+t;for(o=o.replace(/\/\.\//g,"/");o.match(n);)o=o.replace(n,"/");return o}function s(e,n){var i=t.get(e)||c({filename:e,name:"Render Error",message:"Template not found"});return n?i(n):i}function l(e,t){if("string"==typeof t){var n=t;t=function(){return new d(n)}}var i=u[e]=function(n){try{return new t(n,e)+""}catch(e){return c(e)()}};return i.prototype=t.prototype=f,i.toString=function(){return t+""},i}function c(e){var t="{Template Error}",n=e.stack||"";if(n)n=n.split("\n").slice(0,2).join("\n");else for(var i in e)n+="<"+i+">\n"+e[i]+"\n\n";return function(){return"object"==typeof console&&console.error(t+"\n\n"+n),t}}var u=t.cache={},d=this.String,p={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},h=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},f=t.utils={$helpers:{},$include:function(e,t,n){return e=a(n,e),s(e,t)},$string:n,$escape:o,$each:r},g=t.helpers=f.$helpers;t.get=function(e){return u[e.replace(/^\.\//,"")]},t.helper=function(e,t){g[e]=t},e.exports=t}()},function(e,exports){e.exports={SOURCE:"http://7xsolp.com1.z0.glb.clouddn.com/",BANNER_NUM:6,FLOOR_NUM:4}},function(e,exports){var t={fixTop:function(){$(window).scrollTop()>$(".total-product").offset().top+40?$(".fix-top-wrap").show():$(".fix-top-wrap").hide()},initBtns:function(){var e=this;$(window).scroll(function(){e.fixTop()})}};$(function(){t.fixTop(),t.initBtns()})},function(e,exports,t){var n=t(6),i=t(12),o=t(13);t(7);var r={cart:function(){n({url:"/api/v2/cart/brief",success:function(e){return $(".cart-num, .fix-cart-num").text(e.count),0==e.count?($(".cart-products-wrap").html(i()),1):void $(".cart-products-wrap").html(o(e))}})},deleteProduct:function(e){var t=this;n({type:"DELETE",url:"/api/v2/cart/delete?id="+e,success:function(e){0===e.result?t.cart():t.wrong(e)}})},wrong:function(e){5==e.result?alert("该资源不存在！"):6==e.result?alert("不支持该操作！"):8==e.result?alert("您没有权限操作，请联系管理员"):e.error_message?alert(e.error_message):1012==e.result?alert("提交频率过高，请稍后再试"):alert("出错了，请稍后重试"),location.reload()},initBtns:function(){var e=this;$(".cart, .fix-cart").bind("mouseenter",function(){e.cart()}),$(".cart-products-wrap").on("click",".delete-product",function(t){t.preventDefault(),e.deleteProduct($(this).attr("data-product-id"))})}};$(function(){r.initBtns()})},function(e,exports,t){var n=t(8);e.exports=n("src/tpl/common/cartEmpty",'<div class="cart-empty font14"> 购物车还没有商品,快去挑选心仪的商品吧! </div>')},function(e,exports,t){var n=t(8);e.exports=n("src/tpl/common/cart",function(e,t){"use strict";var n=this,i=n.$helpers,o=n.$each,r=e.items,a=(e.$value,e.$index,n.$escape),s="";return s+='<div class="products"> <span class="font12 block mb15">最新加入的商品:</span> <ul> ',o(r,function(e,t){s+=' <li class="mb20 clearFix"> <a class="floatLeft" href="/cart?id=',s+=a(e.product_id),s+="#",s+=a(e.brief),s+='"> <img src="',s+=a(i.getUrl(e.image_key)),s+='" width="38" height="38"/> </a> <a class="floatLeft ml10" href="/cart?id=',s+=a(e.product_id),s+="#",s+=a(e.brief),s+='"> <div class="product-title font14 bold">',s+=a(e.title),s+='</div> <div class="product-brief font12 ellipsis w160">',s+=a(e.brief),s+='</div> </a> <div class="floatRight"> <div class="red bold font16"> ',e.is_custom?s+=" 待定 ":(s+=" ",s+=a(i.processPrice(e.price)),s+=" x ",s+=a(e.quantity),s+=" "),s+=' </div> <div class="delete-product font12 pointer floatRight" data-product-id="',s+=a(e.id),s+='">删除</div> </div> </li> '}),s+=' </ul> <div class="see-cart floatRight font14 pointer">查看购物车 ></div> </div>',new String(s)})},function(e,exports){var t={callLater:function(e){ajax({type:"POST",url:"/api/v2/others/submit-contact",data:JSON.stringify({contact:e}),success:function(e){alert("稍后您将接到我们的电话，该通话对您完全免费，请放心接听！您也可以通过点击屏幕右侧的“联系客服”按钮直接QQ在线咨询。")}})},initBtns:function(){var e=this;$(".call-later-btn").click(function(){var t=$(".your-phone").val();/^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/.test(t)?e.callLater(t):alert("请您输入正确的号码，手机号码请直接输入，座机请加区号")}),$(".right-close").bind("click",function(){$(".call-later").removeClass("active").addClass("none")}),$(".right-phone").bind("mouseover",function(){$(".call-later").removeClass("none")}),$(".goTop").bind("click",function(){$("body, html").animate({scrollTop:0},300)})}};$(function(){t.initBtns()})}]);