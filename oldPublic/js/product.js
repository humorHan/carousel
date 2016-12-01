(function() {
    addOption.bindEvent();
    imgZoom.bindEvent();
    /*
        判断是否有维度的参数
     */
    var selectStr = decodeURI(location.hash.substr(1));
    if (!selectStr) {
        initSelected();
    } else {
        changeProductItem(selectStr);
    }
    getRecommdProduct();
    //修改维度事件
    $(".vals").delegate(".val", "click", function(event) {
        var target = event.target;
        if (target.className.indexOf('dis') !== -1) {
            return;
        }
        var vals = target.parentNode;
        $(vals).find(".val").removeClass("sel");
        $(target).addClass("sel");
        var queryStr = getProductItem();
        changeProductPrice(queryStr);
        changeNonOption(queryStr);
    });
    //添加购物车
    $("#add_to_cart").click(function() {
        var truthId = $.cookie("truthid");
        var userId = $.cookie("userid");
        if (!truthId || !userId) {
            login.showPop(function() {
                addToCart();
            })
        } else {
            addToCart();
        }
    });
    $(".custom-input").keyup(function(e) {
        var type = $(this).attr('data-type');
        var value = $(this).attr('data-value');
        var current = value;
        if ($(this).attr('data-current') !== undefined) {
            current = $(this).attr('data-current');
        }
        if (e.key == 'Backspace') {
            $(this).parents(".customs").removeClass("ok");
            $(this).attr('data-current', $(this).val());
            current = $(this).val();
        } else {
            if (type === 'int') {
                if (/[0-9]/.test(e.key)) {
                    $(this).parents(".customs").removeClass("ok");
                    $(this).attr('data-current', $(this).val());
                    current = $(this).val();
                } else {
                    $(this).val(current);
                }
            } else if (type === 'float') {
                if (/[0-9|.]/.test(e.key)) {
                    $(this).parents(".customs").removeClass("ok");
                    $(this).attr('data-current', $(this).val());
                    current = $(this).val();
                } else {
                    $(this).val(current);
                }
            } else {
                if (e.key !== " ") {

                }
                $(this).parents(".customs").removeClass("ok");
                $(this).attr('data-current', $(this).val());
                current = $(this).val();
            }
        }
    });
    $(".confirm-btn").click(function() {
        if ($(this).parents(".customs").hasClass('ok')) {
            return;
        }
        var input = $(this).parents(".customs").find('.custom-input');
        for (var i = 0; i < input.length; i++) {
            if (!checkInput(input[i])) {
                return;
            } else {
                $(input[i]).attr("data-value", $(input[i]).val());
            }
        }
        $(this).parents(".customs").addClass('ok');
        getCustomPrice();

    });
    //获取自定义属性的值
    function getCustomValues() {
        var custom = $(".product-body").children('.product-custom');
        var fields = [];
        for (var i = 0; i < custom.length; i++) {
            var name = $(custom[i]).find(".attr").text();
            name = name.substr(0, name.length - 1);
            var values = [];
            var isOk = $(custom[i]).find('.customs').hasClass("ok");
            var inputs = $(custom[i]).find('.custom-input');
            for (var j = 0; j < inputs.length; j++) {
                if (isOk) {
                    values.push($(inputs[j]).val());
                } else {
                    values.push($(inputs[j]).attr('data-value'));
                }
            }
            fields.push({
                name: name,
                values: values
            });
        }
        return fields;
    }

    function checkInput(node) {
        var isNeed = $(node).parents('.product-custom').attr('data-need');
        var type = $(node).attr('data-type');
        var max = parseFloat($(node).attr('data-max'));
        var min = parseFloat($(node).attr('data-min'));
        var value = $.trim($(node).val());
        var tag = $(node).prev().text();
        if (!value && isNeed === 'false') {
            $(node).val(value);
            return true;
        } else {
            if (!value) {
                $("#error_tip").text('请填写' + tag).show();
                setTimeout(function() {
                    $("#error_tip").hide();
                }, 2000);
                return false;
            }
            if (type === "int") {
                max = parseInt(max);
                min = parseInt(min);
                value = parseInt(value);
                if (value > max) {
                    $("#error_tip").text(tag + "不能大于" + max).show();
                    setTimeout(function() {
                        $("#error_tip").hide();
                    }, 2000);
                    return false;
                } else if (value < min) {
                    $("#error_tip").text(tag + "不能小于" + min).show();
                    setTimeout(function() {
                        $("#error_tip").hide();
                    }, 2000);
                    return false;
                } else {
                    $(node).val(value);
                    return true;
                }
            } else if (type === "float") {
                value = parseFloat(value);
                if (value > max) {
                    $("#error_tip").text(tag + "不能大于" + max).show();
                    setTimeout(function() {
                        $("#error_tip").hide();
                    }, 2000);
                    return false;
                } else if (value < min) {
                    $("#error_tip").text(tag + "不能小于" + min).show();
                    setTimeout(function() {
                        $("#error_tip").hide();
                    }, 2000);
                    return false;
                } else {
                    if ((value + "").indexOf('.') === -1) {
                        value += ".0";
                    }
                    $(node).val(value);
                    return true;
                }
            } else {
                max = parseInt(max);
                min = parseInt(min);
                if (value.length > max) {
                    $("#error_tip").text(tag + "字数不能超过" + max).show();
                    setTimeout(function() {
                        $("#error_tip").hide();
                    }, 2000);
                    return false;
                } else if (value.length < min) {
                    $("#error_tip").text(tag + "字数不能少于" + min).show();
                    setTimeout(function() {
                        $("#error_tip").hide();
                    }, 2000);
                    return false;
                } else {
                    $(node).val(value);
                    return true;
                }
            }
        }
    }

    function getRecommdProduct() {
        var IMG_LINK = 'http://source.soyyin.com/';
        var recommds = [{
            id: 12,
            img_key: 'shoutidai_rexiao.png',
            name: '手提袋',
            brief: '每一个都是您的移动广告'
        }, {
            id: 15,
            img_key: 'huace_rexiao.png',
            name: '画册',
            brief: '企业品牌形象经典展现'
        }, {
            id: 11,
            img_key: 'zheye_rexiao.png',
            name: '折页',
            brief: '能让客户主动带走的纸'
        }, {
            id: 34,
            img_key: 'buganjiaotie_rexiao.png ',
            name: '不干胶贴',
            brief: '短小精悍神通广大'
        }, {
            id: 26,
            img_key: 'tshirt_rexiao.png',
            name: '文化衫',
            brief: '团队建设的不二之选'
        }, {
            id: 27,
            img_key: 'fanbudai_rexiao.png',
            name: '帆布袋',
            brief: '环保时尚经久耐用'
        }, ];
        var lists = '';
        for (var i = 0; i < recommds.length; i++) {
            lists += '<li class="product-recommend-item"><a href="/product?id=' + recommds[i].id + '">';
            lists += '<img src="' + IMG_LINK + recommds[i].img_key + '"><p class="product-recommend-title">';
            lists += '<span class="product-recommend-title-right">' + recommds[i].brief + '</span>';
            lists += '<span class="product-recommend-title-left">' + recommds[i].name + '</span></p></a></li>';
        }
        $(".product-recommend-list").html(lists);
    }

    function addToCart() {
        var custom = $(".product-body").children('.product-custom');
        for (var i = 0; i < custom.length; i++) {
            var input = $(custom[i]).find('.custom-input');
            for (var j = 0; j < input.length; j++) {
                if (!checkInput(input[j])) {
                    return;
                } else {
                    $(input[j]).attr("data-value", $(input[j]).val());
                }
            }
            if (!$(custom[i]).find('.customs').hasClass("ok")) {
                popUp.showPop("#no_confirm");
                return;
            }
        }
        var url = "/api/v2/cart/add";
        var data = {
            price_id: $("#add_to_cart").attr("data-id") * 1,
            quantity: $("#product_num").val() * 1,
            fields: getCustomValues(),
        }
        $http(url).post(data, function(result) {
            popUp.showPop("#add_cart");
            /* 商品成功加入购物车后，右上角购物车数据刷新 */
            $("#add_cart .no-stay").click(function() {
                //getShowCartBtn();
                location.reload();
            });
            $("#add_cart .close").click(function() {
                //getShowCartBtn();
                location.reload();
            })
        })
    }

    //缺省项维度置为不可点击
    function changeNonOption(queryStr) {
        var dimension = $(".product-body").children('.product-type');
        for (var i = 0; i < dimension.length - 1; i++) {
            var options = $(dimension[i]).find(".vals").children();
            for (var j = 0; j < options.length; j++) {
                var arr = queryStr.split('_');
                arr[i] = $(options[j]).attr("value");
                var newStr = arr.join('_');
                if (productMap[newStr]) {
                    $(options[j]).removeClass('dis').addClass('val');
                } else {
                    $(options[j]).removeClass('val').addClass('dis');
                }
            }
        }
    }
    //首次加载选中维度的第一项
    function initSelected() {
        var vals = $(".vals");
        $(".vals .val").removeClass("sel");
        for (var i = 0; i < vals.length - 1; i++) {
            var first = $($(vals[i]).children("a")[0]);
            first.addClass("sel");
        }
        var queryStr = getProductItem();
        changeProductPrice(queryStr);
        changeNonOption(queryStr);
    }
    //把选中的维度拼接成字符串
    function getProductItem() {
        var allSelect = $(".vals .sel");
        var queryArr = [];
        for (var i = 0; i < allSelect.length; i++) {
            queryArr.push($(allSelect[i]).text());
        }
        var queryStr = queryArr.join("_");
        return queryStr;
    }
    //根据选中的维度修改价格和图片
    function changeProductPrice(queryStr) {
        var item = productMap[queryStr];
        if (item) {
            // $("#product_price").text(processData.processPrice(item.price));
            $("#product_num").attr("min-num", item.min_num).val(item.min_num);
            if (item.max_num) {
                $("#product_num").attr("max-num", item.max_num);
            }
            $("#add_to_cart").attr("data-id", item.id);
            var lis = '';
            for (var i = 0; i < item.image_keys.length; i++) {
                lis += '<li><img src="' + IMG_LINK + item.image_keys[i] + '"></li>';
            }
            $("#imageList").html(lis);
            imgZoom.showImg();
            getCustomPrice();
            return item.id;
        } else {
            popUp.showPop("#no_product");
            $(".modal-foot .right").click(function(event) {
                popUp.hidePop("#no_product");
                initSelected();
            });
            $(".modal-layer").click(function() {
                initSelected();
            })
        }
    }
    //根据拼接维度字符串修改维度
    function changeProductItem(selectStr) {
        var selectArr = selectStr.split("_");
        var allItem = $(".vals .val");
        allItem.removeClass("sel");
        var itemArr = [];
        var items = $(".product-body").children(".product-item");
        for (var i = 0; i < items.length; i++) {
            if ($(items[i]).hasClass("product-type")) {
                allItem.filter("a[value='" + selectArr[i] + "']").addClass("sel");
                itemArr.push(selectArr[i]);
            } else {
                var inputs = $(items[i]).find('.custom-input');
                if (inputs.length > 1) {
                    selectArr[i] = selectArr[i].split("*");
                    for (var j = 0; j < inputs.length; j++) {
                        $(inputs[j]).attr('data-current', selectArr[i][j]);
                        $(inputs[j]).val(selectArr[i][j]);
                    }
                } else {
                    $(inputs).attr('data-current', selectArr[i]);
                    $(inputs).val(selectArr[i]);
                }

            }
        }
        var itemStr = itemArr.join('_');
        changeProductPrice(itemStr);
        changeNonOption(itemStr);
    }

    function getCustomPrice() {
        var url = "/api/v2/products/new-price";
        var data = {
            price_id: $("#add_to_cart").attr("data-id") * 1,
            fields: getCustomValues(),
        }
        $http(url).post(data, function(result) {
            $("#product_price").text(processData.processPrice(result.price));
        })
    }
})()
