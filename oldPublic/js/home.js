(function() {
    var limit = 15;
    var count = 0;
    var status = '';
    //是否有状态
    if (getLinkParam('status')) {
        status = getLinkParam('status');
        var selected = $(".search-query").find("a[data-status=" + status + "]");
        if (status && selected.length != 0) {
            $(".search-query a").removeClass("active");
            selected.addClass("active");
        }
    }
    if (getLinkParam('page')) {
        renderOrderList(status, (getLinkParam('page') - 1) * limit);
    } else {
        renderOrderList(status);
    }

    //选择状态
    $(".search-query a").click(function(event) {
        var $target = $(event.target);
        var id = $target.attr("id");
        var status = $target.attr("data-status")
        var pathname = location.pathname
        location.href = pathname + "?status=" + status
    });
    //按需定制商品查看详情
    showDemandDetail($("#my_order_list"));

    function renderOrderList(status, offset) {
        var status_t = {
            SUBMITTED: '订单已提交',
            DELIVERY_CONFIRMED: '商家已接单',
            DELIVERY_PAID: '付款成功',
            ONLINE_PAID: '付款成功',
            ONLINE_CONFIRMED: '商家已接单',
            FINISHED: '订单已完成',
            CANCELED: '订单已取消',
        }
        var url = '/api/v2/orders/get-list?limit=' + limit;
        if (status) {
            url += "&status=" + status;
        }
        if (offset) {
            url += '&offset=' + offset;
        }
        $http(url).get(function(result) {
            var str = '';
            count = result.count;
            if (result.orders.length === 0) {
                return;
            }
            var payment_t = {
                ONLINE: '在线支付',
                CASH_ON_DELIVERY: '货到付款',
            }
            for (var i = 0; i < result.orders.length; i++) {
                str += '<div class="order-list-item"><div class="order-list-head">';
                str += '<div class="order-list-brief">订单编号：<span class="color">' + result.orders[i].id;
                str += '</span></div><div class="order-list-brief">下单时间：<span>' + new Date(result.orders[i].create_time).dateFormat();
                str += '</span></div><div class="order-list-brief">支付方式：<span class="color">' + payment_t[result.orders[i].payment];
                str += '</span></div><div class="order-list-brief">收货人：<a class="order-receiver">';
                str += '<span class="receiver-name">' + result.orders[i].consignee_name + '</span><div class="order-receiver-detail">';
                str += '<img class="order-receiver-triangle" src="/assets/img/triangle_top.png">';
                str += '<span>' + result.orders[i].consignee_name + '</span><span>' + result.orders[i].address + '</span>';
                str += '<span>' + result.orders[i].consignee_phone + '</span></div></a></div></div>';
                str += '<table class="order-list-table"><thead class="order-table-th"><td class="order-table-product">';
                str += '<div class="item-product-describe">商品信息</div></td><td>数量</td><td>印刷文件</td>';
                str += '<td>订单金额</td><td>订单状态</td></thead><tbody class="order-table-tb">';
                var items = result.orders[i].items;
                if (result.orders[i].item_count > 0) {
                    result.orders[i].count = result.orders[i].item_count < 4 ? result.orders[i].item_count : 3;
                    result.orders[i].total = '￥' + (result.orders[i].is_priced ? processData.processPrice(result.orders[i].freight + result.orders[i].amount) : (processData.processPrice(result.orders[i].amount) + ' + ？'));
                    str += '<tr data-id="' + items[0].id + '" data-detail=' + JSON.stringify(items[0].detail) + '><td class="order-table-product">';
                    str += '<div class="item-product-img">';
                    if (items[0].is_custom) {
                        str += '<a class="demand-pop">';
                    } else {
                        str += '<a href="/product?id=' + items[0].product_id + '#' + items[0].brief + '">';
                    }
                    str += '<img src="' + IMG_LINK + items[0].image_key + '?imageView2/1/w/80/h/80/"></a>';

                    str += '</div><div class="item-product-describe">';
                    if (items[0].is_custom) {
                        str += '<a class="demand-pop">';
                    } else {
                        str += '<a href="/product?id=' + items[0].product_id + '#' + items[0].brief + '">';
                    }
                    str += '<p class="title">' + items[0].title + '</p></a>';

                    str += '</div></td><td><div>x' + items[0].quantity + '</div></td>';
                    str += '<td class="divide upload-file">';
                    if (items[0].file) {
                        str += '<a class="had-file" href="' + IMG_LINK + items[0].file.file_key + '" title="' + items[0].file.file_name + '">' + items[0].file.file_name + '</a>';
                    } else {
                        str += '<a class="color">未上传</a>';
                    }
                    str += '</td>';
                    str += '<td class="divide order-price color" rowspan="' + result.orders[i].count + '">' + result.orders[i].total + '</td>';
                    str += '<td class="order-status" rowspan="' + result.orders[i].count + '">';
                    str += '<a class="' + (result.orders[i].status === 'CANCELED' ? 'order-cancel' : 'order-success') + '">' + status_t[result.orders[i].status] + '</a>';
                    str += '<a class="check-order-detail" href="/order?id=' + result.orders[i].id + '">查看订单详情 ></a></td>';
                }
                if (items.length > 1) {
                    for (var j = 1; j < items.length; j++) {
                        str += '<tr data-id="' + items[j].id + '" data-detail=' + JSON.stringify(items[j].detail) + '><td class="order-table-product">';
                        str += '<div class="item-product-img">';
                        if (items[j].is_custom) {
                            str += '<a class="demand-pop">';
                        } else {
                            str += '<a href="/product?id=' + items[j].product_id + '#' + items[j].brief + '">';
                        }
                        str += '<img src="' + IMG_LINK + items[j].image_key + '?imageView2/1/w/80/h/80/"></a>';

                        str += '</div><div class="item-product-describe">';
                        if (items[j].is_custom) {
                            str += '<a class="demand-pop">';
                        } else {
                            str += '<a href="/product?id=' + items[j].product_id + '#' + items[j].brief + '">';
                        }
                        str += '<p class="title">' + items[j].title + '</p></a>';

                        str += '</div></td><td><div>x' + items[j].quantity + '</div></td>';
                        str += '<td class="divide upload-file">';
                        if (items[j].file) {
                            str += '<a class="had-file" href="' + IMG_LINK + items[j].file.file_key + '" title="' + items[j].file.file_name + '">' + items[j].file.file_name + '</a>';
                        } else {
                            str += '<a class="color">未上传</a>';
                        }
                        str += '</td></tr>';
                    }
                }
                str += '</tbody></table>';
                if (result.orders[i].item_count > 3) {
                    str += '<a class="order-list-foot" href="/order?id=' + result.orders[i].id + '">查看更多></a>';
                }
                str += '</div>';
                $("#my_order_list").html(str);
                /*
                    分页初始化，必须放在main.js下面
                    参数有两个：
                    （必填）count：总条数
                    （非必填）pageSize：每页的条数，默认为15
                 */
                $("#show_pagination").pagination({
                    count: count,
                    pageSize: limit,
                });
            }
        })
    }
})()
