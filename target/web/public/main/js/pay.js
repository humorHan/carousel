(function() {
    var order_id = getLinkParam('order_id');
    if (location.pathname.indexOf('success') > 0) {
        $("#see_order").attr("href", "/order?id=" + order_id);
        $("#pay_success_id").text(order_id);
        var i = 5;
        var time = setInterval(function() {
            i--;
            if (i == 1) {
                clearInterval(time)
                location.href = "/order?id=" + order_id;
            }
            $("#count").text(i);
        }, 1000)
    } else {
        getPayStatus();
    }
    $("#change_pay_method .pay-method").click(function(event) {
        var $target = $(event.target);
        $("#change_pay_method .pay-method").removeClass("selected");
        $target.addClass("selected");
    });
    $("#online_pay").click(function() {
        $selected = $("#change_pay_method").find(".selected");
        var type = $selected.attr("id");
        var data = {
            order_id: parseInt(order_id),
            payment: type
        };
        $http('/api/v2/orders/create-pingxx-charge').post(data, function(result) {
            if (result.charge && result.charge != null) {
                if (type === "ALIPAY_PC") {
                    pingppPc.createPayment(result.charge, function(result, error) {
                        if (result == "success") {
                            // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
                        } else if (result == "fail") {
                            // charge 不正确或者微信公众账号支付失败时会在此处返回
                            location.reload();
                        } else if (result == "cancel") {
                            location.href = "/order?id=" + order_id;
                        }
                    });
                } else {
                    var charge = JSON.parse(result.charge);
                    var qr_url = '';
                    if (type === "WECHAT_QR") {
                        qr_url = charge.credential.wx_pub_qr
                        $("#qr_pay_method").text("微信");
                    } else {
                        qr_url = charge.credential.alipay_qr
                        $("#qr_pay_method").text("支付宝");
                    }
                    $("#qr_pay_money").text($("#pay_money").text());
                    $("#qrcode_pay").html('').qrcode({
                        width: 280,
                        height: 280,
                        text: qr_url
                    });
                    $(".modal").width(360);
                    popUp.showPop();
                    var polling = setInterval(function() {
                        getPayStatus(polling);
                    }, 1000);
                    $(".close").click(function() {
                        clearInterval(polling);
                    });
                    $(".modal-layer").click(function() {
                        clearInterval(polling);
                    });
                }
            }
        })
    });

    function getPayStatus(polling) {
        var url = '/api/v2/orders/payment-detail?id=' + order_id;
        $http(url).get(function(result) {
            if (polling) {
                if (result.status === 'PAID') {
                    clearInterval(polling);
                    location.href = '/pay/success?order_id=' + result.id;
                }
            } else {
                if (result.status === "WAITING_PAYMENT") {
                    $("#pay_order_id").text(result.id);
                    $("#pay_money").text(processData.processPrice(result.total - result.paid_amount));
                    $("#pay_order_time").text(new Date(result.create_time).dateFormat());
                    $("#pay_order_detail").attr("href","/order?id=" + result.id);
                } else {
                    location.href = '/order?id=' + result.id;
                }
            }
        })
    }
})()
