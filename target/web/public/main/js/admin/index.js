(function() {
    var limit = 15;
    var url = '/api/v2/admin/orders/list?limit=' + limit;
    if (getLinkParam('page')) {
        url += '&offset=' + (getLinkParam('page') - 1) * limit;
    }
    $http(url).get(function(result) {
        $("#template").tmpl(result).appendTo('#admin_order_list');
        $("#show_pagination").pagination({
            count: result.count,
            pageSize: limit,
        });
        $("#search_starttime").datetimepicker({
            format: "yyyy-mm-dd hh:ii",
            language: "zh-CN",
            todayHighlight: !0,
            autoclose: !0,
        });
        $("#search_endtime").datetimepicker({
            format: "yyyy-mm-dd hh:ii",
            language: "zh-CN",
            autoclose: !0,
        });
        $("#search_starttime").datetimepicker().on("changeDate", function(a) {
            var start_time = $("#search_starttime").val();
            $("#search_endtime").datetimepicker("setStartDate", start_time);
        });
        $("#search_endtime").datetimepicker().on("changeDate", function(a) {
            var end_time = $("#search_endtime").val();
            $("#search_starttime").datetimepicker("setEndDate", end_time);
        });
        /* 批量订单查询暂时不可用
        $(".search-query a").click(function(event){
            var $target = $(event.target);
            var id = $target.attr("id");
            $(".search-query a").removeClass("active");
            $target.addClass("active");
            $(".search-form").hide();
            $("#"+id+"_form").show();
            $("#admin_query_order").attr("data-status",id);
        })*/
        $("#query_order_id").change(function() {
            var orderId = $(this).val();
            if (orderId && /^\d+$/.test(orderId)) {
                $("#query_order_id_tip").hide();
            } else {
                $("#query_order_id_tip").show();
            }
        });
        $("#admin_query_order").click(function() {
            var status = $("#admin_query_order").attr("data-status");
            if (status == "query_num") {
                var orderId = $("#query_order_id").val();
                if (orderId && /^\d+$/.test(orderId)) {
                    var url = "/api/v2/admin/orders/search?id=" + orderId;
                    $http(url).get(function(data) {
                        showSearchResult(data);
                    })
                }
            }
        });
    });

    function showSearchResult(data) {
        $("#show_pagination").hide()
        var status_obj = {
            SUBMITTED: '订单已提交',
            DELIVERY_CONFIRMED: '商家已接单',
            DELIVERY_PAID: '付款成功',
            ONLINE_PAID: '付款成功',
            ONLINE_CONFIRMED: '商家已接单',
            FINISHED: '订单已完成',
            CANCELED: '订单已取消',
        }
        var str = "";
        data.price = "￥" + processData.processPrice(data.amount + data.freight);
        if (!data.is_priced) {
            data.price += "？";
        }
        str += "<tr><td>" + new Date(data.create_time).dateFormat() + "</td><td>" + data.id + "</td><td>" + data.price + "</td>" + "<td>货到付款</td><td>" + data.consignee_name + " " + data.consignee_phone + "<div>" + data.address + "</div></td><td>" + new Date(data.last_operate_time).dateFormat() + "</td>" + "<td class='status'><a>" + status_obj[data.status] + "</a>";
        if (data.is_file_uploaded) {
            str += "<a>全部已上传</a>";
        } else {
            str += "<a class='warning'>待上传</a>";
        }
        str += "<a class='link' href='/admin/order?id=" + data.id + "' target='_blank'>查看订单详情</a></td></tr>";
        $("#admin_order_list").html(str);
    }
})();
function changeTimeFormat(s){
    return new Date(s).dateFormat();
}
function status_t(status){
    var status_t = {
        SUBMITTED: '订单已提交',
        DELIVERY_CONFIRMED: '商家已接单',
        DELIVERY_PAID: '付款成功',
        ONLINE_PAID: '付款成功',
        ONLINE_CONFIRMED: '商家已接单',
        FINISHED: '订单已完成',
        CANCELED: '订单已取消',
    };
    return status_t[status];
}
function total(order){
    order.amount_t = processData.processPrice(order.amount) + (order.is_priced ? '' : ' + ？');
    order.total = order.is_priced ? processData.processPrice(order.amount + order.freight) : order.amount_t;
    return order.total;
}
