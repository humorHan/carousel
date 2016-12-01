! function() {
    var order_id = getLinkParam("id");
    var container = $("#order_container");
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
    $http('/api/v2/orders/detail?id=' + order_id).get(function(result) {
        result.status_t = status_t[result.status];
        result.payment_t = payment_t[result.payment];
        result.img_link = IMG_LINK;
        result.process = '';
        result.amount_t = processData.processPrice(result.amount) + (result.is_priced ? '' : ' + ？');
        result.freight_t = result.is_priced ? processData.processPrice(result.freight) : '？';
        result.total = result.is_priced ? processData.processPrice(result.freight + result.amount) : (processData.processPrice(result.amount) + ' + ？');
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
        $("#template").tmpl(result).appendTo('#order_container');
    })
    container.delegate(".add-file", "change", function(event) {
        uploadComp.uploadFile(event);
    });
    container.delegate(".delete-file", "click", function(event) {
        uploadComp.deleteFile(event);
    });
    //取消订单
    container.delegate("#cancel_order", "click", function() {
        popUp.showPop("#cancel_order_modal");
    });
    $("#cancel_order_modal .right").click(function() {
        var url = "/api/v2/orders/cancel?id=" + order_id;
        $http(url).delete(function() {
            location.reload();
        });
    });

    //查看按需定制详情
    showDemandDetail(container);
}();
