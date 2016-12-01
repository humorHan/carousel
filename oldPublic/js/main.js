//项目中的图片链接
try {
    var IMG_LINK = qiniuCdnHost + '/';
} catch (e) {
    var IMG_LINK = "http://7xsexg.com2.z0.glb.qiniucdn.com/";
}
/*/!* 获取右上角购物车数据 *!/
function getShowCartBtn() {
    if (showCart) {
        $("#showCartBtn").show();
        /!* 右上角购物车获取数据 *!/
        $http('/api/v2/cart/brief').get(function(data) {
            if (data.count > 0) {
                var items = data.items;
                var str = '';
                for (var i = 0; i < items.length; i++) {
                    if (items[i].is_custom) {
                        items[i].productUrl = '/cart';
                    } else {
                        items[i].productUrl = '/product?id=' + items[i].product_id + '#' + items[i].brief;
                    }
                    str += '<div class="cart-list-item"><div class="cart-item-left"><a href="' + items[i].productUrl + '">';
                    str += '<img src="' + IMG_LINK + items[i].image_key + '?imageView2/1/w/80/h/80/"></a></div><div class="cart-item-center">';
                    if (items[i].is_custom) {
                        str += '<div class="cart-item-line"><span class="cart-item-right">待定</span>';
                    } else {
                        str += '<div class="cart-item-line"><span class="cart-item-right">￥' + processData.processPrice(items[i].price) + 'x' + items[i].quantity + '</span>';
                    }
                    str += '<a class="cart-item-name" href="' + items[i].productUrl + '">' + items[i].title + '</a></div>';
                    str += '<div class="cart-item-line"><a class="cart-item-right cart-item-opreation" data-id="' + items[i].id + '">删除</a>';
                    str += '<a class="cart-item-det" href="' + items[i].productUrl + '">' + items[i].brief + '</a></div></div></div>';
                }
                /!* 右上角购物车商品数量最多显示99 *!/
                if (data.count < 100) {
                    $("#cart_item_count").text(data.count).show();
                } else {
                    $("#cart_item_count").html('99<sup>+</sup>').show();
                }
                $("#no_cart_item").hide();
                $("#cart_item_list").show();
                $("#cart_item_content").html(str);
            } else {
                $("#cart_item_count").hide();
                $("#no_cart_item").show();
                $("#cart_item_list").hide();
            }
        });
    } else {
        $("#showCartBtn").hide();
    }
}*/

function getLinkParam(key) {
    if (location.params) {
        return location.params[key];
    }
    location.params = {};
    var search = location.search.substr(1);
    var paramArr = search.split("&");
    for (var i = 0; i < paramArr.length; i++) {
        var param = paramArr[i].split("=");
        location.params[param[0]] = param[1];
    }
    return location.params[key];
}
/*
    ajax数据交互
 */
function $http(url) {

    // A small example of object
    var core = {
        // Method that performs the ajax request
        ajaxGet: function(method, url, callback, alertWhenSuccess) {
            var self = this;
            $.ajax({
                url: url,
                type: method,
                contentType: 'application/json',
                dataType: 'json',
                processData: false,
                async: true,
                success: function(result) {
                    if (!result.result || result.result === 0) {
                        callback(result);
                    } else {
                        if (alertWhenSuccess === false) {
                            callback(result);
                        } else {
                            self.successDeal(result);
                        }
                    }
                },
                error: function(err) {
                    self.errorDeal(err);
                }
            });
        },
        ajaxPost: function(method, url, data, callback, alertWhenSuccess) {
            var self = this;
            $.ajax({
                url: url,
                type: method,
                contentType: 'application/json',
                dataType: 'json',
                processData: false,
                data: JSON.stringify(data),
                async: true,
                success: function(result) {
                    if (!result.result || result.result === 0) {
                        callback(result);
                    } else {
                        if (alertWhenSuccess === false) {
                            callback(result);
                        } else {
                            self.successDeal(result);
                        }
                    }
                },
                error: function(err) {
                    self.errorDeal(err);
                }
            });
        },
        successDeal: function(data) {
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
        errorDeal: function(err) {
            if (err.status == 403) {
                alert("用户身份验证失败");
                location.href = "/#showLogin";
            } else if (err.status == 503) {
                alert("Opps！酱油服务器正在维护中，请耐心等待，很快就好哦！");
                location.href = "/";
            } else {
                alert("出错了，" + err.status + err.statusText);
                location.href = "/";
            }
        },
    };

    // Adapter pattern
    return {
        'get': function(callback, alertWhenSuccess) {
            return core.ajaxGet('GET', url, callback, alertWhenSuccess);
        },
        'delete': function(callback, alertWhenSuccess) {
            return core.ajaxGet('DELETE', url, callback, alertWhenSuccess);
        },
        'post': function(data, callback, alertWhenSuccess) {
            return core.ajaxPost('POST', url, data, callback, alertWhenSuccess);
        },
        'put': function(data, callback, alertWhenSuccess) {
            return core.ajaxPost('PUT', url, data, callback, alertWhenSuccess);
        },
    };
}
//处理价格，浮点数转整数、整数转浮点数
var processData = {
    //39.00变成3900
    processRealProce: function(s) {
        if (s.indexOf(".") == -1) {
            s += ".00";
        }
        var arr = s.split(".");
        if (arr[1].length == 1) {
            arr[1] += "0"
        } else if (arr[1].length > 2) {
            arr[1] = arr[1].substr(0, 2)
        }
        var show = arr.join("");
        return show * 1;
    },
    //3900变成39.00
    processPrice: function(p) {
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
    },
};

function calculateTotal(amount, freight, is_priced) {
    var total = '';
    if (is_priced) {
        if (amount > 20000) {
            total = processData.processPrice(amount);
        } else {
            total = processData.processPrice(amount + freight);
        }
    } else {
        total = processData.processPrice(amount) + '+？';
    }
    return total;
}
Date.prototype.dateFormat = function() {
    var y = this.getFullYear();
    var m = String(this.getMonth() + 1);
    var d = String(this.getDate());
    var H = this.getHours();
    var M = this.getMinutes();
    var S = this.getSeconds();
    var h = String(H);
    var i = String(M);
    var s = String(S);
    if (m.length == 1) {
        m = "0" + m;
    }
    if (d.length == 1) {
        d = "0" + d;
    }
    if (h.length == 1) {
        h = "0" + h;
    }
    if (i.length == 1) {
        i = "0" + i;
    }
    if (s.length == 1) {
        s = "0" + s;
    }
    var format = y + "-" + m + "-" + d + " " + h + ":" + i + ":" + s;
    return format;
};
//分页插件
(function($, window, document, undefined) {
    var Pagination = function(ele, opt) {
        this.$element = ele;
        this.defaults = {
            count: 0,
            pageSize: 15
        };
        this.options = $.extend({}, this.defaults, opt);
        //总页数
        this.totalPage = 0;
        //当前页码，默认为1
        this.pageIndex = 1;
        //网页链接
        this.location = window.location.valueOf()
    }

    Pagination.prototype = {
        init: function() {
            if (this.options.count == 0) {
                return;
            }
            this.totalPage = Math.ceil(this.options.count / this.options.pageSize);
            if (isNaN(this.totalPage) || this.totalPage <= 1) {
                return;
            }
            var search = this.location.search.substr(1);
            this.location.paramArr = search.split("&");
            for (var i = 0; i < this.location.paramArr.length; i++) {
                if (this.location.paramArr[i].indexOf("page") >= 0) {
                    this.location.i = i;
                    this.pageIndex = 1 * (this.location.paramArr[i].split("=")[1]);
                } else {
                    this.location.i = this.location.paramArr.length;
                }
            }
            if (this.pageIndex > this.totalPage) {
                location.href = this.setLink(1);
            }
            this.setPagination();
        },
        //设置分页按钮的链接
        setLink: function(num) {
            var i = this.location.i;
            if (i === this.location.paramArr.length) {
                this.location.paramArr[i] = "page=" + num;
            } else {
                this.location.paramArr[this.location.i] = "page=" + num;
            }
            var href = this.location.pathname + "?" + this.location.paramArr.join("&");
            return href;
        },
        //显示分页
        setPagination: function() {
            var pagination = $("#show_pagination");
            var str = "";
            //当前页为第一页，则前一页不能点击
            if (this.pageIndex == 1) {
                str = "<ul><li class='disabled'><a>&lt;</a></li>";
            } else {
                str = "<ul><li><a href=" + this.setLink(this.pageIndex - 1) + ">&lt;</a></li>";
                if (this.pageIndex > 2) {
                    str += "<li><a href=" + this.setLink(1) + ">1</a></li>";
                    if (this.pageIndex > 3) {
                        if (this.pageIndex == this.totalPage && this.pageIndex - 2 == 2) {
                            str += "<li><a href=" + this.setLink(this.pageIndex - 2) + ">" + (this.pageIndex - 2) + "</a></li>";
                        } else if (this.pageIndex == this.totalPage && this.pageIndex - 2 != 2) {
                            str += "<li>...</li><li><a href=" + this.setLink(this.pageIndex - 2) + ">" + (this.pageIndex - 2) + "</a></li>";
                        } else {
                            str += "<li>...</li>";
                        }
                    }
                }
                str += "<li><a href=" + this.setLink(this.pageIndex - 1) + ">" + (this.pageIndex - 1) + "</a></li>";
            }
            str += "<li class='active'><a>" + this.pageIndex + "</a></li>";
            if (this.pageIndex == this.totalPage) {
                str += "<li class='disabled'><a>&gt;</a></li></ul>";
            } else {
                if (this.pageIndex < this.totalPage - 1) {
                    str += "<li><a href=" + this.setLink(this.pageIndex + 1) + ">" + (this.pageIndex + 1) + "</a></li>";
                    if (this.pageIndex < this.totalPage - 2) {
                        if (this.pageIndex == 1 && this.pageIndex + 2 == this.totalPage - 1) {
                            str += "<li><a href=" + this.setLink(3) + ">" + (3) + "</a></li>";
                        } else if (this.pageIndex == 1 && this.pageIndex + 2 !== this.totalPage - 1) {
                            str += "<li><a href=" + this.setLink(3) + ">" + (3) + "</a></li><li>...</li>";
                        } else {
                            str += "<li>...</li>";
                        }
                    }
                }
                str += "<li><a href=" + this.setLink(this.totalPage) + ">" + this.totalPage + "</a></li><li><a href=" + this.setLink(this.pageIndex + 1) + ">&gt;</a></li></ul>";
            }
            this.$element.html(str);
        },
    }

    $.fn.pagination = function(options) {
        return this.each(function() {
            var pag = new Pagination($(this), options);
            return pag.init();
        })
    }
})(jQuery, window, document);
