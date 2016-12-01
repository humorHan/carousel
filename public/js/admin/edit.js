(function() {
    var order_id = getLinkParam("id");
    var container = $("#edit_order_box");
    $http('/api/v2/admin/orders/detail?id=' + order_id).get(function(result) {
        result.img_link = IMG_LINK;
        if(!result.contact_name){
            result.contact_name = result.consignee_name;
        }
        if(!result.contact_phone){
            result.contact_phone = result.consignee_phone;
        }
        result.total = '￥' + calculateTotal(result.amount, result.freight, result.is_priced);
        $("#template").tmpl(result).appendTo('#edit_order_box');
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
        get_provice_regions(result.regions[0].id);
        set_provice_city(result.regions[0].id, result.regions[1].id);
        set_city_county(result.regions[1].id, result.regions[2] ? result.regions[2].id : '');
        showDemandDetail();
        if (result.invoice_title) {
            $("#need_invoice").addClass("checked");
            $("#need_invoice_detail").show();
        }
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
            checkInputCondition("contact_name", (/^.{1,25}$/.test(name) && $.trim(name) !== ""));
        });
        $("#contact_phone").change(function() {
            var phone = $(this).val();
            checkInputCondition("contact_phone", (/^\d{11}$/.test(phone)));
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
        //删除商品
        $(".delete-product").click(function() {
            var id = $(this).parents("tr").attr("data-id");
            $("#delete_product .right").data("id", id);
            popUp.showPop("#delete_product");
        });
        $("#delete_product .right").click(function() {
            var id = $(this).data("id");
            var url = "/api/v2/admin/orders/remove-item?item_id=" + id;
            $http(url).delete(function(result) {
                location.reload();
            });
        });
        //改变支付方式事件
        $("#change_pay_method .pay-method").click(function(event) {
            if (result.status === 'DELIVERY_CONFIRMED' && payment === 'CASH_ON_DELIVERY') {
                return;
            }
            var target = event.target;
            $("#change_pay_method .pay-method").removeClass("selected");
            $(target).addClass("selected");
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
        //修改按需定制商品
        $(".edit-product").click(function(event) {
            var id = $(this).parents("tr").attr("data-id");
            var detail = JSON.parse($(this).parents("tr").attr("data-detail"));
            if (detail.name) {
                var data = detail;

                OnDemandProduct.setData(data.name, data.quantity, data.size, data.caizhi, data.others);

                popUp.showPop("#edit_demand_detail");
                $("#edit_demand_detail_title").html("编辑按需定制商品");

                $("#edit_demand_detail .right").data("id", id);

                $("#edit_demand_detail .right").unbind();
                $("#edit_demand_detail .right").click(function() {
                    var id = $(this).data("id");
                    var url = "/api/v2/admin/orders/edit-custom-item?item_id=" + id;
                    addOrEditOnDemandProduct(url, 2);
                });
            }
        });

        //添加按需定制商品
        $("#admin_add_demand").click(function() {
            OnDemandProduct.initData();

            popUp.showPop("#edit_demand_detail");
            $("#edit_demand_detail_title").html("添加按需定制商品");

            $("#edit_demand_detail .right").unbind();
            $("#edit_demand_detail .right").click(function() {
                // TODO
                var url = "";
                addOrEditOnDemandProduct(url, 1);
            });
        });

        //提交订单
        $("#admin_create_order").click(function() {
            var receiver_name = $("#receiver_name").val();
            if (!checkInputCondition("receiver_name", (/^.{1,25}$/.test(receiver_name) && $.trim(receiver_name) !== ""))) {
                return;
            }
            if (!checkReceiverRegion()) {
                return;
            }
            var receiver_address = $("#receiver_address").val();
            if (!checkInputCondition("receiver_address", (/^[\s\S]{1,50}$/.test(receiver_address) && $.trim(receiver_address) !== ""))) {
                return;
            }
            var receiver_phone = $("#receiver_phone").val();
            if (!checkInputCondition("receiver_phone", (/^\d{11}$/.test(receiver_phone)))) {
                return;
            }
            var receiver_code = $("#receiver_code").val();
            if (!checkInputCondition("receiver_code", (/^[0-9]{0,6}$/.test(receiver_code)))) {
                return;
            }
            var contact_qq = $("#contact_qq").val();
            if (!checkInputCondition("contact_qq", (/^[0-9]{0,10}$/.test(contact_qq)))) {
                return
            }
            var contact_name = $("#contact_name").val();
            if (!checkInputCondition("contact_name", (/^.{1,25}$/.test(contact_name) && $.trim(contact_name) !== ""))) {
                return
            }
            var contact_phone = $("#contact_phone").val();
            if (!checkInputCondition("contact_phone", (/^\d{11}$/.test(contact_phone)))) {
                return
            }
            var receiver_remark = $("#receiver_remark").val();
            if (!checkInputCondition("receiver_remark", (/^[\s\S]{0,500}$/.test(receiver_remark)))) {
                return
            }
            var id = $(this).attr("data-id");
            var url = "/api/v2/admin/orders/edit?id=" + id;
            var data = {
                item_ids: [],
                consignee_name: $.trim($("#receiver_name").val()),
                address: $.trim($("#receiver_address").val()),
                post_code: $("#receiver_code").val(),
                consignee_phone: $("#receiver_phone").val(),
                contact_name: $.trim($("#contact_name").val()),
                contact_phone: $("#contact_phone").val(),
                contact_qq: $("#contact_qq").val(),
                remark: $.trim($("#receiver_remark").val()),
                payment: $($("#change_pay_method").children(".selected")[0]).attr("data-value"),
            };
            data.region_id = ($("#receiver_county").val() ? $("#receiver_county").val() : $("#receiver_city").val()) * 1;
            if ($("#need_invoice").hasClass("checked")) {
                var receiver_invoice = $("#receiver_invoice").val();
                if (!checkInputCondition("receiver_invoice", (/^[\s\S]{0,50}$/.test(receiver_invoice) && $.trim(receiver_invoice) !== ""))) {
                    return;
                } else {
                    data.invoice_title = $.trim($("#receiver_invoice").val());
                }
            } else {
                data.invoice_title = "";
            }
            $http(url).put(data, function(result) {
                location.href = "/admin/order?id=" + id;
            })
        });
        //修改订单数量价格
        $(".admin-edit-order").click(function(event) {
            var $target = $(event.target);
            var $display = $target.parent(".product-display");
            var $edit = $display.next(".product-edit");
            $display.hide();
            $edit.show();
        });
        //保存修改订单数量价格
        $(".admin-save-order").click(function(event) {
            var $target = $(event.target);
            var $input = $target.prev(".admin-input");
            var $edit = $target.parent(".product-edit");
            var $display = $edit.prev(".product-display");
            adminChangeOrder($edit, $display);
        });
        //取消修改订单数量价格
        $(".admin-cancel-order").click(function(event) {
            var $target = $(event.target);
            var $edit = $target.parent(".product-edit");
            var $display = $edit.prev(".product-display");
            $display.show();
            $edit.hide();
        });
        //价格必须是0.00的形式
        $(".admin-price").change(function() {
            var val = $(this).val();
            var price = parseFloat(val);
            var isPrice = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;
            if (!isPrice.test(val)) {
                var isTwo = /^([1-9][\d]{0,7}|0)(\.[\d]+)?$/;
                if (isTwo.test(val)) {
                    var index = val.indexOf(".");
                    var real = val.substr(0, index + 3);
                    $(this).val(real);
                } else {
                    $(this).val("");
                    return false
                }

            } else if (price > 1000000.00) {
                $(this).val("1000000.00")
            } else if (price < 0.00) {
                $(this).val("0.00")
            }
            return true
        });
        //数量必须是整数
        $(".admin-num").change(function() {
            var val = $(this).val();
            var num = parseInt(val);
            if (isNaN(num)) {
                $(this).val("")
                return false;
            } else if (val != num) {
                $(this).val(num)
            } else if (num > 100000) {
                $(this).val("100000")
            } else if (num < 0) {
                $(this).val("0")
            }
            return true
        });
    });

    function addOrEditOnDemandProduct(url, method) {
        var data = {
            name: $("#on_demand_product_name_input").val(),
            category: '定制名片',
            quantity: $("#on_demand_product_quantity_input").val(),
            size: $("#on_demand_product_size_input").val(),
            caizhi: $("#on_demand_product_caizhi_input").val(),
            others: $("#on_demand_product_others_input").val(),
        };

        var formItem;
        if (OnDemandProduct.validateName(data.name)) {
            formItem = $("#on_demand_product_name_input").closest(".form-item");
            if (!formItem.hasClass("error")) {
                formItem.addClass("error");
            }
            $("#on_demand_product_name_input").focus();
            return;
        }
        if (OnDemandProduct.validateQuantity(data.quantity)) {
            formItem = $("#on_demand_product_quantity_input").closest(".form-item");
            if (!formItem.hasClass("error")) {
                formItem.addClass("error");
            }
            $("#on_demand_product_quantity_input").focus();
            return;
        }

        if (OnDemandProduct.validateSize(data.size) || OnDemandProduct.validateCaizhi(data.caizhi) ||
            OnDemandProduct.validateOthers(data.others)) {
            return;
        }

        if (method == 2) {
            $http(url).put(data, function() {
                location.reload();
            });
        } else {
            $http(url).post(data, function() {
                location.reload();
            });
        }
    }

    function adminChangeOrder($edit, $display) {
        var $tr = $edit.parent().parent("tr");
        var id = $tr.attr("data-id");
        var $input = $edit.find(".admin-input");
        if ($input.hasClass("admin-price")) {
            var price = processData.processRealProce($input.val());
            if ($input.hasClass("admin-demand")) {
                var quantity = 1;
            } else {
                var quantity = $tr.find(".admin-num").val();
            }
        } else {
            var quantity = $input.val();
            var price = processData.processRealProce($tr.find(".admin-price").val());
        }
        if (!price || !quantity) {
            return;
        }
        var url = "/api/v2/admin/orders/update-item-price?item_id=" + id + "&price=" + price + "&quantity=" + quantity;
        $http(url).put({}, function() {
            // $display.show();
            // $display.find("span").text($input.val());
            // $edit.hide();
            location.reload();
        })
    }
})()
