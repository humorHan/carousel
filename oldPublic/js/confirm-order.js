(function() {
    //配送区域select插件初始化
    $("#receiver_province").chosen({
        width: "124px",
        search_contains: true,
        no_results_text: "无匹配结果"
    });
    $("#receiver_city").chosen({
        width: "124px",
        search_contains: true,
        no_results_text: "无匹配结果"
    });
    $("#receiver_county").chosen({
        width: "124px",
        search_contains: true,
        no_results_text: "无匹配结果"
    });
    /*
        初始化获取省级列表
     */
    var container = $("#product_item");
    $http('/api/v2/others/get-address').get(function(result) {
        if (result.consignee_name) {
            $("#receiver_name").val(result.consignee_name);
            $("#receiver_address").val(result.address);
            $("#receiver_phone").val(result.consignee_phone);
            $("#receiver_code").val(result.post_code);
            get_provice_regions(result.regions[0].id);
            set_provice_city(result.regions[0].id, result.regions[1].id);
            set_city_county(result.regions[1].id, result.regions.length === 3 ? result.regions[2].id : "");

            var show_phone = result.consignee_phone.substring(0, 3) + '****' + result.consignee_phone.substring(7, 11);
            $("#display_receiver_name").text(result.consignee_name);
            $("#display_receiver_phone").text(show_phone);
            $("#display_receiver_address").text(result.address);
            $("#display_receiver_province").text(result.regions[0].name);
            $("#display_receiver_city").text(result.regions[1].name);
            result.regions.length === 3 && $("#display_receiver_county").text(result.regions[2].name);

            $("#confirm_msg").text(result.consignee_name + " " + show_phone);
            $("#confirm_receiver_address").text(result.address);
            $("#confirm_receiver_province").text(result.regions[0].name);
            $("#confirm_receiver_city").text(result.regions[1].name);
            result.regions.length === 3 && $("#confirm_receiver_county").text(result.regions[2].name);

            $("#edit_receiver_box").hide();
            $("#display_receiver_box").show();
        } else {
            get_provice_regions('110100');
            set_provice_city('110100');
        }
    }, false);
    var url = '/api/v2/cart/confirm-data' + location.search;
    $http(url).get(function(result) {
        if (result === 5) {
            location.href = '/';
        } else {
            result.img_link = IMG_LINK;
            result.item_prices = 0;
            if (result.items.length > 0) {
                var items = result.items;
                for (var i = 0; i < items.length; i++) {
                    result.item_prices += items[i].price * items[i].quantity;
                }
            }
            result.amount = '￥' + processData.processPrice(result.item_prices);
            if (result.custom_items.length > 0) {
                if (result.item_prices >= 20000) {
                    result.freight = '￥0.00';
                    result.freightTip = '（商品金额已满200元免运费）';
                } else {
                    result.freight = '￥ ？';
                    result.freightTip = '（商品金额满200元即可免运费）';
                }
                result.amount += ' +？';
                result.total = result.amount;
            } else {
                if (result.item_prices >= 20000) {
                    result.freight = '￥ 0.00';
                    result.freightTip = '（商品金额已满200元免运费）';
                    result.total = result.amount;
                } else {
                    result.freight_price = 20000 - result.item_prices;
                    result.freight = '￥ 10.00';
                    result.freightTip = '（还差' + processData.processPrice(result.freight_price) + '元即可免运费）';
                    result.total = '￥' + processData.processPrice(result.item_prices + 1000);
                }
            }
            $("#product_template").tmpl(result).appendTo('#product_item');
            $("#confirm_amount").text(result.amount);
            $("#confirm_freight").html(result.freight + '<span class="item-tip">' + result.freightTip + '</span>');
            $("#confirm_total").text(result.total);
            $("#confirm_total_show").text(result.total);
        }
    }, false);

    container.delegate(".add-file", "change", function(event) {
        uploadComp.uploadFile(event);
    });
    container.delegate(".delete-file", "click", function(event) {
        uploadComp.deleteFile(event);
    });
    //修改配送信息
    $("#edit_receiver_btn").click(function() {
        $("#edit_receiver_box").show();
        $("#display_receiver_box").hide();
    });
    //保存配送信息
    $("#save_receiver_btn").click(function() {
        var name = $("#receiver_name").val();
        if (!checkInputCondition("receiver_name", (/^.{1,25}$/.test(name) && $.trim(name) !== ""))) {
            return;
        }
        if (!checkReceiverRegion()) {
            return;
        }
        var address = $("#receiver_address").val();
        if (!checkInputCondition("receiver_address", (/^[\s\S]{1,50}$/.test(address) && $.trim(address) !== ""))) {
            return;
        }
        var phone = $("#receiver_phone").val();
        if (!checkInputCondition("receiver_phone", (/^\d{11}$/.test(phone)))) {
            return;
        }
        var code = $("#receiver_code").val();
        if (!checkInputCondition("receiver_code", (/^[0-9]{0,6}$/.test(code)))) {
            return;
        }
        //保存时修改显示状态的内容和页面底部提交时的内容
        var name = $.trim($("#receiver_name").val());
        var phone = $("#receiver_phone").val();
        var address = $.trim($("#receiver_address").val());
        var province = $("#receiver_province").find(":checked").text();
        var city = $("#receiver_city").find(":checked").text();
        var county = $("#receiver_county").find(":checked").text();
        var data = {
            consignee_name: name,
            region_id: parseInt($("#receiver_county").val() ? $("#receiver_county").val() : $("#receiver_city").val()),
            address: address,
            post_code: $("#receiver_code").val(),
            consignee_phone: phone
        }
        $http('/api/v2/others/save-address').post(data, function() {
            var show_phone = phone.substring(0, 3) + '****' + phone.substring(7, 11);

            $("#display_receiver_name").text(name);
            $("#display_receiver_phone").text(show_phone);
            $("#display_receiver_address").text(address);
            $("#display_receiver_province").text(province);
            $("#display_receiver_city").text(city);
            $("#display_receiver_county").text(county);

            $("#confirm_msg").text(name + " " + show_phone);
            $("#confirm_receiver_address").text(address);
            $("#confirm_receiver_province").text(province);
            $("#confirm_receiver_city").text(city);
            $("#confirm_receiver_county").text(county);

            $("#edit_receiver_box").hide();
            $("#display_receiver_box").show();
        })

    });
    //填写配送信息内容判断
    $("#receiver_name").change(function() {
        var name = $(this).val();
        checkInputCondition("receiver_name", (/^.{1,25}$/.test(name) && $.trim(name) !== ""));
    });
    $("#receiver_phone").change(function() {
        var phone = $(this).val();
        checkInputCondition("receiver_phone", (/^\d{11}$/.test(phone)));
    });
    $("#receiver_address").change(function() {
        var address = $(this).val();
        checkInputCondition("receiver_address", (/^[\s\S]{1,50}$/.test(address) && $.trim(address) !== ""));
    });
    $("#receiver_province").change(function() {
        var id = $("#receiver_province").val();
        set_provice_city(id);
    });
    $("#receiver_city").change(function() {
        checkReceiverRegion();
        var id = $("#receiver_city").val();
        set_city_county(id);
    });
    $("#receiver_county").change(function() {
        checkReceiverRegion();
    });
    $("#contact_name").change(function() {
        var name = $(this).val();
        checkInputCondition("contact_name", (/^.{0,25}$/.test(name) && $.trim(name) !== ""));
    });
    $("#contact_phone").change(function() {
        var phone = $(this).val();
        checkInputCondition("contact_phone", (phone == "" || /^\d{11}$/.test(phone)));
    });
    $("#receiver_code").change(function() {
        var code = $(this).val();
        checkInputCondition("receiver_code", (/^[0-9]{0,6}$/.test(code)));
    });
    $("#contact_qq").change(function() {
        var qq = $(this).val();
        checkInputCondition("contact_qq", (/^[0-9]{0,10}$/.test(qq)));
    });
    $("#receiver_invoice").change(function() {
        var invoice = $(this).val();
        checkInputCondition("receiver_invoice", (/^[\s\S]{0,50}$/.test(invoice) && $.trim(invoice) !== ""));
    });
    $("#receiver_remark").change(function() {
        var remark = $(this).val();
        checkInputCondition("receiver_remark", (/^[\s\S]{0,500}$/.test(remark) && $.trim(remark) !== ""));
    });
    //改变支付方式事件
    $("#change_pay_method .pay-method").click(function(event) {
        var target = event.target;
        $("#change_pay_method .pay-method").removeClass("selected");
        $(target).addClass("selected");
    });
    //是否需要添加需求联系人
    $("#need_contact").click(function(event) {
        var $target;
        if (event.target.nodeName.toLowerCase() !== "a") {
            $target = $(event.target).parent();
        } else {
            $target = $(event.target);
        }
        if ($target.hasClass("checked")) {
            $target.removeClass("checked");
            $("#need_contact_detail").show();
        } else {
            $target.addClass("checked");
            $("#need_contact_detail").hide();
        }
        /* 
         * IE浏览器取消事件处理，IE9，IE10已解决
         * 这里如果不作处理，点击span元素会同时触发span和a各走一遍逻辑，最终结果是没变
         * 然而IE11下没起作用，没办法解决了，不过问题不大，不影响使用
         */
        window.event.returnValue = false;
        // window.event.cancelBubble = true;
    });
    //是否需要发票
    $("#need_invoice").click(function(event) {
        var $target;
        if (event.target.nodeName.toLowerCase() !== "a") {
            $target = $(event.target).parent();
        } else {
            $target = $(event.target);
        }
        if ($target.hasClass("checked")) {
            $target.removeClass("checked");
            $("#need_invoice_detail").hide();
        } else {
            $target.addClass("checked");
            $("#need_invoice_detail").show();
        }
        window.event.returnValue = false;
    });
    //按需定制商品查看详情
    showDemandDetail(container);
    //提交订单
    $("#create_order").click(function() {
        if (!$("#edit_receiver_box").is(":hidden")) {
            alert("请先保存收货地址");
            return;
        }
        var qq = $("#contact_qq").val();
        if (!checkInputCondition("contact_qq", (/^[0-9]{0,10}$/.test(qq)))) {
            return;
        }
        var contact = false;
        if (!$("#need_contact").hasClass("checked")) {
            contact = true;
            var name = $("#contact_name").val();
            if (!checkInputCondition("contact_name", (/^.{1,25}$/.test(name) && $.trim(name) !== ""))) {
                return;
            }
            var phone = $("#contact_phone").val();
            if (!checkInputCondition("contact_phone", (/^\d{11}$/.test(phone)))) {
                return;
            }
        }
        var remark = $("#receiver_remark").val();
        if (!checkInputCondition("receiver_remark", (/^[\s\S]{0,500}$/.test(remark)))) {
            return;
        }
        var url = "/api/v2/orders/create";
        var data = {
            consignee_name: $.trim($("#receiver_name").val()),
            address: $.trim($("#receiver_address").val()),
            post_code: $("#receiver_code").val(),
            consignee_phone: $("#receiver_phone").val(),
            contact_name: contact ? $.trim($("#contact_name").val()) : $.trim($("#receiver_name").val()),
            contact_phone: contact ? $("#contact_phone").val() : $("#receiver_phone").val(),
            contact_qq: $("#contact_qq").val(),
            remark: $.trim($("#receiver_remark").val()),
            payment: $($("#change_pay_method").children(".selected")[0]).attr("data-value"),
        };
        var search = location.search.substr(1).split("&");
        item_ids = [];
        for (var i = 0; i < search.length; i++) {
            item_ids.push(search[i].replace("id=", "") * 1)
        }
        data.item_ids = item_ids;
        data.region_id = ($("#receiver_county").val() ? $("#receiver_county").val() : $("#receiver_city").val()) * 1;
        if ($("#need_invoice").hasClass("checked")) {
            var invoice = $("#receiver_invoice").val();
            if (!checkInputCondition("receiver_invoice", (/^[\s\S]{1,50}$/.test(invoice) && $.trim(invoice) !== ""))) {
                return;
            } else {
                data.invoice_title = $("#receiver_invoice").val();
            }
        }
        $http(url).post(data, function(result) {
            if (data.payment === "ONLINE") {
                location.href = "/pay?order_id=" + result.id;
            } else {
                location.href = "/order?id=" + result.id;
            }
        })
    });

})()
