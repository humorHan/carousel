! function() {
    var order_id = getLinkParam("id");
    var container = $("#admin_order_container");
    var status_t = {
        SUBMITTED: '订单已提交',
        DELIVERY_CONFIRMED: '商家已接单',
        DELIVERY_PAID: '付款成功',
        ONLINE_PAID: '付款成功',
        ONLINE_CONFIRMED: '商家已接单',
        FINISHED: '订单已完成',
        CANCELED: '订单已取消',

    };
    var payment_t = {
        ONLINE: '在线支付',
        CASH_ON_DELIVERY: '货到付款',
    };
    $http('/api/v2/admin/orders/detail?id=' + order_id).get(function(result) {
        result.status_t = status_t[result.status];
        result.payment_t = payment_t[result.payment];
        result.img_link = IMG_LINK;
        result.process = '';
        result.is_edit = result.status === 'SUBMITTED' || result.status === 'DELIVERY_CONFIRMED' ? true : false;
        result.amount_t = processData.processPrice(result.amount) + (result.is_priced ? '' : ' + ？');
        result.freight_t = result.amount >= 20000 ? '0.00' : (result.is_priced ? processData.processPrice(result.freight) : '？');
        result.total = calculateTotal(result.amount, result.freight, result.is_priced);
        var length = result.histories.length;
        var history = {};
        for (var i = 0; i < length; i++) {
            result.process += '<span class="circle finished-circle">' + (i + 1) + '</span>';
            result.process += '<span class="status finished-status"><span class="operate-time">';
            result.process += new Date(result.histories[i].create_time).dateFormat() + '</span>';
            result.process += status_t[result.histories[i].status] + '</span>';
            if (result.histories[i].status !== 'FINISHED' && result.histories[i].status !== "CANCELED") {
                result.process += '<span class="arrow finished-arrow"></span>';
                history[result.histories[i].status] = i + 1;
            }
        }
        if (result.histories[length - 1].status !== "FINISHED" && result.histories[length - 1].status !== 'CANCELED') {
            if (result.payment === "ONLINE") {
                var step = [
                    { status: 'SUBMITTED' },
                    { status: 'ONLINE_PAID' },
                    { status: 'ONLINE_CONFIRMED' },
                    { status: 'FINISHED' },
                ];
            } else {
                var step = [
                    { status: 'SUBMITTED' },
                    { status: 'DELIVERY_CONFIRMED' },
                    { status: 'DELIVERY_PAID' },
                    { status: 'FINISHED' },
                ];
            }
            for (var i = length; i < step.length; i++) {
                result.process += '<span class="circle">' + (i + 1) + '</span>';
                result.process += '<span class="status"><span class="operate-time"></span>' + status_t[step[i].status] + '</span>';
                if (i !== step.length - 1) {
                    result.process += '<span class="arrow"></span>';
                }
            }
        }
        result.change_status_btn = '<span class="order-op">';
        if (result.status === 'SUBMITTED' && result.payment === "CASH_ON_DELIVERY" && !result.is_priced) {
            result.change_status_btn += '<a class="unable"><span class="prompt">需要先确定了订单金额才能接单哦~</span>确认订单></a></span>';
        } else {
            result.change_status_btn += '<a id="change_status" href="javascript:;" data-status="';
            switch (result.status) {
                case 'SUBMITTED':
                    if (result.is_priced && result.payment !== 'ONLINE') {
                        result.change_status_btn += 'DELIVERY_CONFIRMED">确认订单></a></span>';
                    } else {
                        result.change_status_btn = '';
                    }
                    break;
                case 'ONLINE_PAID':
                    result.change_status_btn += 'ONLINE_CONFIRMED">确认订单></a></span>';
                    break;
                case 'DELIVERY_CONFIRMED':
                    result.change_status_btn += 'DELIVERY_PAID">确认付款></a></span>';
                    break;
                case 'ONLINE_CONFIRMED':
                case 'DELIVERY_PAID':
                    result.change_status_btn += 'FINISHED">完成订单></a></span>';
                    break;
                default:
                    result.change_status_btn = '';
                    break;
            }
        }
        $("#admin_template").tmpl(result).appendTo('#admin_order_container');
    })
    container.delegate(".add-file", "change", function(event) {
        uploadComp.uploadFile(event);
    });
    container.delegate(".delete-file", "click", function(event) {
        uploadComp.deleteFile(event);
    });
    //查看按需定制详情
    showDemandDetail(container);

    //取消订单并退款
    container.delegate("#admin_cancel_order_refund", "click", function() {
        popUp.showPop("#admin_cancel_order_modal");
        $("#admin_cancel_order_modal .right").click(function() {
            var url = "/api/v2/admin/orders/cancel-paid-order?id=" + order_id;
            $http(url).put({}, function() {
                location.reload();
            });
        });
    });
    var baseUrl = "/api/v2/admin/orders/update-status?id=" + order_id + "&status=";
    //取消订单
    container.delegate("#admin_cancel_order", "click", function() {
        popUp.showPop("#admin_cancel_order_modal");
        $("#admin_cancel_order_modal .right").click(function() {
            var url = baseUrl + "CANCELED";
            $http(url).put({}, function() {
                location.reload();
            });
        });
    });
    //修改订单状态
    container.delegate("#change_status", "click", function() {
        var tips = {
            DELIVERY_CONFIRMED: '确定接单吗？',
            DELIVERY_PAID: '确定该订单已付款成功吗？',
            ONLINE_CONFIRMED: '确定接单吗？',
            FINISHED: '确定完成该订单吗？',
        }
        var status = $("#change_status").attr("data-status");
        $("#change_status_modal .sad-tip").text(tips[status]);
        popUp.showPop("#change_status_modal");
        $("#change_status_modal .right").click(function() {
            var url = baseUrl + status;
            $http(url).put({}, function() {
                location.reload();
            });
        });
    });
    container.delegate("#delivery_time", "change", function() {
        var delivery_time = $("#delivery_time").val();
        checkInputCondition("delivery_time", (delivery_time.length <= 50));
    });
    container.delegate("#support", "change", function() {
        var support = $("#support").val();
        checkInputCondition("support", (support.length <= 50));
    });
    container.delegate("#supplier", "change", function() {
        var supplier = $("#supplier").val();
        checkInputCondition("supplier", (supplier.length <= 50));
    });
    container.delegate("#admin_remark", "change", function() {
        var admin_remark = $("#admin_remark").val();
        checkInputCondition("admin_remark", (admin_remark.length <= 500));
    });
    //更新订单的管理员信息
    container.delegate("#confirm_update", "click", function() {
        var delivery_time = $("#delivery_time").val();
        if (!checkInputCondition("delivery_time", (delivery_time.length <= 50))) {
            return;
        }
        var support = $("#support").val();
        if (!checkInputCondition("support", (support.length <= 50))) {
            return;
        }
        var supplier = $("#supplier").val();
        if (!checkInputCondition("supplier", (supplier.length <= 50))) {
            return;
        }
        var admin_remark = $("#admin_remark").val();
        if (!checkInputCondition("admin_remark", (admin_remark.length <= 500))) {
            return;
        }
        var url = "/api/v2/admin/orders/update-admin-info?id=" + order_id;
        var data = {
            delivery_time: $("#delivery_time").val(),
            support: $("#support").val(),
            supplier: $("#supplier").val(),
            admin_remark: $("#admin_remark").val(),
        };
        $http(url).put(data, function() {
            alert("修改成功！");
        });
    });
}();
