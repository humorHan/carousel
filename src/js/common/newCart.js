/**
 * Created by humorHan on 16/11/24.
 */
var ajax = require("util/ajax.js");
var cartEmptyTpl = require("common/cartEmpty.tpl");
var cartTpl = require("common/cart.tpl");
require("template-helper.js");

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