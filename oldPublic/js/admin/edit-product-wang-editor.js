(function() {
    var imgWidth = 838;
    // 初始化七牛上传
    function uploadInit() {
        // this 即 editor 对象
        var editor = this;
        // 触发选择文件的按钮的id
        var btnId = editor.customUploadBtnId;
        // 触发选择文件的按钮的父容器的id
        var containerId = editor.customUploadContainerId;

        // 创建上传对象
        var uploader = Qiniu.uploader({
            //上传模式，依次退化
            runtimes: 'html5,flash,html4',
            //上传选择的点选按钮，**必需**  
            browse_button: btnId,
            //Ajax请求upToken的Url，**强烈建议设置**（服务端提供） 
            //uptoken : '',
            //设置上传文件的时候是否每次都重新获取新的uptoken      
            uptoken_url: '/api/v2/others/uptoken-without-key',
            //若未指定uptoken_url，则必须指定 uptoken，uptoken由其他程序生成
            //在需要获取uptoken时，该方法会被调用
            //uptoken_func: function(file) {
            //},
            //设置上传文件的时候是否每次都重新获取新的uptoken
            get_new_uptoken: true,
            //默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
            unique_names: false,
            //默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
            save_key: true,
            //bucket 域名，下载资源时用到，**必需**
            domain: 'http://source.soyyin.com/',
            //上传区域DOM ID，默认是browser_button的父元素，
            container: containerId,
            //最大文件体积限制   
            max_file_size: '100mb',
            //引入flash，相对路径        
            flash_swf_url: 'https://cdn.staticfile.org/Plupload/2.1.1/Moxie.swf',  
            filters: {
                mime_types: [
                  //只允许上传图片文件 （注意，extensions中，逗号后面不要加空格）
                  { title: "图片文件", extensions: "jpg,gif,png,bmp,jpeg" }
                ]
            },
            //上传失败最大重试次数
            max_retries: 3,
            //开启可拖曳上传 
            dragdrop: true,
            //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传     
            drop_element: 'form-body',
            //分块上传时，每片的体积
            chunk_size: '4mb', 
            //选择文件后自动上传，若关闭需要自己绑定事件触发上传          
            auto_start: true,                 
            init: {
                'FilesAdded': function(up, files) {
                    plupload.each(files, function(file) {
                        // 文件添加进队列后,处理相关的事情
                    });
                },
                'BeforeUpload': function(up, file) {
                    // 每个文件上传前,处理相关的事情
                },
                'UploadProgress': function(up, file) {
                    // 显示进度条
                    editor.showUploadProgress(file.percent);
                },
                'FileUploaded': function(up, file, info) {
                    // 每个文件上传成功后，处理相关的事情
                    // 其中 info 是文件上传成功后，服务端返回的json，形式如
                    // {
                    //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                    //    "key": "gogopher.jpg"
                    //  }
                    var domain = up.getOption('domain');
                    var res = $.parseJSON(info);
                    var sourceLink = domain + res.key; //获取上传成功后的文件的Url

                    
                    // 插入图片到editor
                    editor.command(null, 'insertHtml', '<img src="' + sourceLink + '?imageView/2/w/' + imgWidth + '"/>')
                },
                'Error': function(up, err, errTip) {
                    alert(errTip);
                },
                'UploadComplete': function() {
                    //队列文件处理完毕后,处理相关的事情
                    
                    // 隐藏进度条
                    editor.hideUploadProgress();
                },
                //'Key': function(up, file) {
                    // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                    // 该配置必须要在 unique_names: false , save_key: false 时才生效
                //    return key;
                //}
            }
        });
    }

    var editor = new wangEditor('editor-trigger');
    editor.config.menus = [
        'source',
        '|',
        'bold',
        'underline',
        'italic',
        'strikethrough',
        'eraser',
        'forecolor',
        'bgcolor',
        '|',
        'quote',
        'fontfamily',
        'fontsize',
        'head',
        'unorderlist',
        'orderlist',
        'alignleft',
        'aligncenter',
        'alignright',
        '|',
        'link',
        'unlink',
        'anchor',
        'table',
        '|',
        'img',
        '|',
        'lineheight',
        'indent',
        '|',
        'undo',
        'redo',
        'fullscreen'
    ];
    // 关闭菜单栏fixed
    editor.config.menuFixed = false;
    // 取消粘贴过滤
    editor.config.pasteFilter = false;
    editor.config.customUpload = true;  // 设置自定义上传的开关
    editor.config.customUploadInit = uploadInit;  // 配置自定义上传初始化事件，uploadInit方法在上面定义了
    editor.create();
    editor.$txt.html('');

    var order_id = getLinkParam('id');
    var url = '/api/v2/admin/products/detail?id=' + order_id;
    $http(url).get(function(result) {
        $("#product_template").tmpl(result).appendTo('#edit_product');
        editor.$txt.html(result.detail);
        $("#update_product_detail").click(function() {
            var content = editor.$txt.html();
            var url = "/api/v2/admin/products/update-detail?id=" + order_id;
            $http(url).put({ content: content }, function() {
                alert("修改成功");
            })
        })
    })
})()
