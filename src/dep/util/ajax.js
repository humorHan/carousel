/**
 * Created by humorHan on 16/11/17.
 */
module.exports = function (options) {
    $.ajaxSetup({
        cache: false
    });
    $.ajax({
        type: options.type || 'GET',
        url: options.url,
        data: options.data || {},
        dataType: options.dataType || 'json',
        contentType: options.contentType || 'application/json',
        success: function(data){
            options.success(data);
        },
        error: function(){
            // TODO 错误处理和强制跳转等
            if (options.error) {
                options.error();
            }
        }
    })
};