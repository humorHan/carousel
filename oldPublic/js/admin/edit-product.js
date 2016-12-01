(function() {
    var order_id = getLinkParam('id');
    var url = '/api/v2/admin/products/detail?id=' + order_id;
    $http(url).get(function(result) {
        $("#product_template").tmpl(result).appendTo('#edit_product');
        RCEditor.editor.ready(function() {
            RCEditor.setContent(result.detail);
        });
        $("#update_product_detail").click(function() {
            var content = RCEditor.getContent();
            var url = "/api/v2/admin/products/update-detail?id=" + order_id;
            $http(url).put({ content: content }, function() {
                alert("修改成功");
            })
        })
    })
})()
