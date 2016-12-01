(function() {
    $http('/api/v2/cart/full').get(function(data) {
        var items = data.items;
        var custom_items = data.custom_items;
        var items_l = items.length;
        var custom_items_l = custom_items.length;
        var count = items_l + custom_items_l;
        if (count === 0) {
            $("#empty_cart_box").show();
            $("#my_cart_box").hide();
        } else {
            $("#my_cart_count").text(count);
            $("#empty_cart_box").hide();
            $("#my_cart_box").show();
            var str = '';
            if (items_l > 0) {
                for (var i = 0; i < items.length; i++) {
                    items[i].productUrl = '/product?id=' + items[i].product_id + '#' + items[i].brief;
                    items[i].amount = processData.processPrice(items[i].price * items[i].quantity);
                    str += '<tr class="priced-product selected" data-id="' + items[i].id + '"><td class="item-select"><a class="check-box">';
                    str += '<input id="cart_product_' + items[i].id + '" type="checkbox"><label for="cart_product_' + items[i].id + '">';
                    str += '</label></a></td><td class="item-product"><div><div class="item-product-img"><a href="' + items[i].productUrl + '">';
                    str += '<img src="' + IMG_LINK + items[i].image_key + '?imageView2/1/w/80/h/80/">';
                    str += '</a></div><div class="item-product-describe"><a href="' + items[i].productUrl + '"><p class="title">' + items[i].title + '</p>';
                    str += '<p class="describe">' + items[i].brief + '</p></a></div></div></td><td class="item-price" data-price="' + items[i].price + '">';
                    str += '<div>' + processData.processPrice(items[i].price) + '</div></td><td class="item-num"><div class="add-num">';
                    if (items[i].min_quantity == items[i].quantity) {
                        str += '<span class="minus disabled">-</span>';
                    } else {
                        str += '<span class="minus">-</span>';
                    }
                    str += '<input max-num="100000" min-num="' + items[i].min_quantity + '" value="' + items[i].quantity + '" class="value">';
                    str += '<span class="plus">+</span></div></td><td class="item-total">' + items[i].amount + '</td>';
                    str += '<td class="item-deal"><a class="delete-product">删除</a></td></tr>';
                }
            }
            if (custom_items_l > 0) {
                str += '<tr class="on-demand"><td colspan="6"><div class="on-demand-title">按需定制商品';
                str += '<span>（该类商品暂无价格，提交订单后客服MM将与您进一步沟通并确定价格）</span></div></td></tr>';
                for (var i = 0; i < custom_items.length; i++) {
                    str += '<tr class="demand-product selected" data-id="' + custom_items[i].id + '" data-detail=' + JSON.stringify(custom_items[i].detail) + '><td class="item-select">';
                    str += '<a class="check-box"><input id="cart_product_' + custom_items[i].id + '" type="checkbox">';
                    str += '<label for="cart_product_' + custom_items[i].id + '"></label></a></td><td class="item-product">';
                    str += '<div><div class="item-product-img"><a class="demand-pop">';
                    str += '<img src="' + IMG_LINK + custom_items[i].image_key + '?imageView2/1/w/80/h/80/"></a>';
                    str += '</div><div class="item-product-describe"><a class="demand-pop">';
                    str += '<p class="title">' + custom_items[i].title + '</p><p class="describe">' + custom_items[i].brief + '</p>';
                    str += '</a></div></div></td><td class="item-price"><div>暂无</div></td>';
                    str += '<td class="item-num"><div>1</div></td><td class="item-total">暂无</td>';
                    str += '<td class="item-deal"><a class="edit-product">编辑</a>';
                    str += '<a class="delete-product">删除</a></td></tr>';
                }
            }
            $("#product_item").html(str);
            calculateTotalCost();
            addOption.bindEvent();
        }
    });
    var $table = $("#product_item");
    //选中某个商品
    $table.delegate(".check-box", "click", function(event) {
        var target = event.target;
        var parent = $(target).parent().parent("tr");
        if (parent.hasClass("selected")) {
            parent.removeClass("selected");
            $(".all-select .check-box").removeClass("checked");
        } else {
            parent.addClass("selected");
            if ($("#product_item .check-box").length == $("#product_item .selected").length) {
                $(".all-select .check-box").addClass("checked");
            }
        }
        calculateTotalCost();
    });
    //选中全选按钮
    $(".all-select .check-box").click(function(event) {
        var $taregt = $(event.target);
        if ($taregt.hasClass("checked")) {
            $(".all-select .check-box").removeClass("checked");
            $("#product_item tr").removeClass("selected");
        } else {
            $(".all-select .check-box").addClass("checked");
            $("#product_item tr").addClass("selected");
            $("#product_item .on-demand").removeClass("selected");
        }
        calculateTotalCost();
    });
    //删除商品
    $table.delegate(".delete-product", "click", function() {
        var id = $(this).parents("tr").attr("data-id");
        $("#delete_product .right").data("ids", [id]);
        popUp.showPop("#delete_product");
    });
    $("#delete_product .right").click(function() {
        var ids = $(this).data("ids");
        var url = "/api/v2/cart/delete?id=" + ids[0];
        if (ids.length > 1) {
            for (var i = 1; i < ids.length; i++) {
                url += '&id=' + ids[i];
            }
        }
        $http(url).delete(function(result) {
            location.reload();
        });
    });
    //删除选中商品
    $(".deleteSelect").click(function() {
        var selected = $table.children('.selected');
        var ids = [];
        if (selected.length === 0) {
            return;
        }
        for (var i = 0; i < selected.length; i++) {
            ids.push($(selected[i]).attr("data-id"));
        }
        $("#delete_product .right").data("ids", ids);
        popUp.showPop("#delete_product");
    });
    //查看按需定制商品
    showDemandDetail($table);
    //修改按需定制商品
    $table.delegate(".edit-product", "click", function(event) {
        var id = $(this).parents("tr").attr("data-id");
        var detail = JSON.parse($(this).parents("tr").attr("data-detail"));
        if (detail.name) {
            var data = detail;

            OnDemandProduct.setData(data.name, data.quantity, data.size, data.caizhi,
                data.others);

            popUp.showPop("#edit_demand_detail");
            $("#edit_demand_detail .right").data("id", id);
        }
    });

    $("#edit_demand_detail .right").click(function() {
        var id = $(this).data("id");
        var url = "/api/v2/cart/edit-custom?id=" + id;
        var data = {
            name: $("#on_demand_product_name_input").val(),
            category:'定制名片',
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
        $http(url).put(data, function() {
            location.reload();
        });
    });
    //修改数量
    $table.delegate(".value", "change", function(event) {
        changeProductNum(event, $(this).val());
    });
    $table.delegate(".plus", "click", function(event) {
        changeProductNum(event, $(this).prev().val());
    });
    $table.delegate(".minus", "click", function(event) {
        changeProductNum(event, $(this).next().val());
    });
    //去结算
    $("#go_to_confirm").click(function() {
        var selected = $table.find(".selected");
        var jumpLink = "/cart/confirm?id=";
        var length = selected.length;
        if (length == 0) {
            alert("请选择商品！");
        } else {
            for (var i = 0; i < length; i++) {
                jumpLink += $(selected[i]).attr("data-id");
                if (i != length - 1) {
                    jumpLink += "&id=";
                }
            }
            location.href = jumpLink;
        }
    });

    //修改商品数量
    function changeProductNum(event, val) {
        var $tr = $(event.target).parents("tr");
        var id = $tr.attr("data-id");
        var url = "/api/v2/cart/update-quantity?id=" + id + "&quantity=" + val;
        $http(url).put({}, function(result) {
            var price = $tr.find(".item-price").attr("data-price");
            var sum = price * val;
            var total = processData.processPrice(sum);
            $tr.find(".item-total").text(total);
            calculateTotalCost()
        })
    }
    //计算选中商品的总价钱
    function calculateTotalCost() {
        var $priced = $table.find(".priced-product");
        var totalPrice = 0;
        for (var i = 0; i < $priced.length; i++) {
            if ($($priced[i]).hasClass("selected")) {
                totalPrice += processData.processRealProce($($priced[i]).find(".item-total").text());
            }
        }
        totalPrice = processData.processPrice(totalPrice);
        if ($table.find(".demand-product").hasClass("selected")) {
            if (totalPrice === "0.00") {
                totalPrice = " ？";
            } else {
                totalPrice += " + ？";
            }
        }
        $("#total_price").text("￥" + totalPrice);
    }
})()
