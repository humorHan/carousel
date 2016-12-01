/*
    商品详情页数量加减操作
    addOption.bindEvent()
 */
var addOption = {
    bindEvent: function() {
        var self = this;
        $(".plus").click(function(event) {
            self.addOptionPlus(event);
        })
        $(".minus").click(function(event) {
            self.addOptionMinus(event);
        })
        $(".value").change(function(event) {
            self.addOptionValue(event);
        })
    },
    addOptionPlus: function(event) { //加1
        var target = $(event.target);
        var addOption = target.parent();
        var value = addOption.find(".value");
        if (!target.hasClass("disabled")) {
            var val = parseInt(value.val());
            var min = parseInt(value.attr("min-num"));
            var max = parseInt(value.attr("max-num"));
            var now = (val + 1) > max ? max : val + 1;
            if (!isNaN(min) && now > min) {
                addOption.find(".minus").removeClass("disabled");
            }
            if (!isNaN(max) && now >= max) {
                addOption.find(".plus").addClass("disabled");
            }
            value.val(now);
        }
    },
    addOptionMinus: function(event) { //减1
        var target = $(event.target);
        var addOption = target.parent();
        var value = addOption.find(".value");
        if (!target.hasClass("disabled")) {
            var val = parseInt(value.val());
            var min = parseInt(value.attr("min-num"));
            var max = parseInt(value.attr("max-num"));
            var now = (val - 1) < min ? min : val - 1;
            if (!isNaN(min) && now <= min) {
                value.val(min);
                addOption.find(".minus").addClass("disabled");
            }
            if (!isNaN(max) && now <= max) {
                addOption.find(".plus").removeClass("disabled");
            }
            value.val(now);
        }
    },
    addOptionValue: function(event) { //直接写入数值
        var target = $(event.target);
        var addOption = target.parent();
        var org_val = target.val() ? target.val() : min;
        var val = parseInt(target.val());
        var min = parseInt(target.attr("min-num"));
        var max = parseInt(target.attr("max-num"));
        if (isNaN(org_val)) {
            if (isNaN(val)) {
                val = min;
                target.val(min);
            } else {
                target.val(val);
            }

        } else if (org_val !== val) {
            target.val(val);
        }
        if (!isNaN(min) && val <= min) {
            target.val(min);
            addOption.find(".minus").addClass("disabled");
        } else {
            addOption.find(".minus").removeClass("disabled");
        }
        if (!isNaN(max) && val >= max) {
            target.val(max);
            addOption.find(".plus").addClass("disabled");
        } else {
            addOption.find(".plus").removeClass("disabled");
        }
    }
};
/**
    商品详情中图片放大镜和鼠标悬浮换图
 */
var imgZoom = {
    imgShow: $("#image_show"),
    imgSpan: $("#image_show span"),
    imgBig: $("#image_big"),
    bindEvent: function() {
        var self = this;
        this.showImg();
        $("#imageList").delegate("li", "mouseover", function(event) {
            self.changeImg(event);
        })
        self.imgShow.mouseover(function() {
            self.imgSpan.show();
            self.imgBig.show();
        })
        self.imgShow.mouseout(function() {
            self.imgSpan.hide();
            self.imgBig.hide();
        })
        self.imgShow.mousemove(function(event) {
            self.showBigImg(event);
        })
    },
    changeImg: function(event) {
        var target;
        $("#imageList li").removeClass("active");
        if (event.target.nodeName.toLowerCase() === "img") {
            target = $(event.target.parentNode);
        } else {
            target = $(event.target);
        }
        target.addClass("active");
        this.showImg(target);
    },
    showImg: function(target) {
        if (target) {
            var imgUrl = target.find("img").attr("src");
        } else {
            var first = $("#imageList li:first-child");
            first.addClass("active");
            var imgUrl = first.find("img").attr("src");
        }
        this.imgShow.find("img").attr("src", imgUrl);
        this.imgBig.find("img").attr("src", imgUrl);
    },
    showBigImg: function(event) {
        var imgOrg = this.imgBig.find("img");
        var scrollTop = $(document).scrollTop();
        var imgTop;
        if (scrollTop == 0) {
            imgTop = this.imgShow.offset().top;
        } else {
            imgTop = this.imgShow.offset().top - scrollTop;
        }
        var x = event.clientX - this.imgShow.offset().left - (this.imgSpan.width() / 2);
        var y = event.clientY - imgTop - (this.imgSpan.height() / 2);

        if (x < 0) {
            x = 0;
        } else if (x > this.imgShow.width() - this.imgSpan.width()) {
            x = this.imgShow.width() - this.imgSpan.width();
        }
        if (y < 0) {
            y = 0;
        } else if (y > this.imgShow.height() - this.imgSpan.height()) {
            y = this.imgShow.height() - this.imgSpan.height();
        }

        this.imgSpan.css({ left: x + "px", top: y + "px" });
        var percentX = x / (this.imgShow.width() - this.imgSpan.width());
        var percentY = y / (this.imgShow.height() - this.imgSpan.height());
        var left = -percentX * (imgOrg.width() - this.imgBig.width()) + 'px';
        var top = -percentY * (imgOrg.height() - this.imgBig.height()) + 'px';
        imgOrg.css({ left: left, top: top });
    },
};
/*
    弹窗事件
    打开弹窗用popUp.showPop()
 */
var popUp = {
    modal_layer: $(".modal-layer"),
    modal: $(".modal"),
    close: $(".modal .close"),
    bindEvent: function() {
        var self = this;
        this.close.click(function() {
            self.hidePop();
        });
        this.modal_layer.click(function() {
            self.hidePop();
        });
        $(".modal .no-stay").click(function() {
            popUp.hidePop();
        });
    },
    showPop: function(id) {
        if (id) {
            $(id).show();
        } else {
            this.modal.show();
        }
        this.modal_layer.show();
        this.bindEvent();
    },
    hidePop: function(id) {
        if (id) {
            $(id).hide();
        } else {
            this.modal.hide();
        }
        this.modal_layer.hide();
    },
};
/*
    上传文件组件
 */
var uploadComp = {
    isAdmin: location.pathname.indexOf("admin") > 0 ? true : false,
    fileSize: 1024 * 1048576, //文件大小限制，单位Byte
    bindEvent: function() {
        var self = this;
        $(".add-file").change(function(event) {
            self.uploadFile(event);
        });
        $(".delete-file").click(function(event) {
            self.deleteFile(event);
        });
    },
    deleteFile: function(event) {
        var $target = $(event.target).parent().parent("tr");
        var id = $target.attr("data-id");
        if (this.isAdmin) {
            var url = "/api/v2/admin/orders/delete-file?item_id=" + id;
        } else {
            var url = "/api/v2/orders/delete-file?item_id=" + id;
        }
        $http(url).delete(function() {
            $target.find(".upload-file").attr("href", "").text("").hide();
            $target.find(".delete-file").hide();
        })
    },
    loadCallback: function(blkRet, target_ele, f) {
        var id = target_ele.parent().parent("tr").attr("data-id");
        if (this.uploadComp.isAdmin) {
            var url = "/api/v2/admin/orders/update-file?item_id=" + id;
        } else {
            var url = "/api/v2/orders/update-file?item_id=" + id;
        }
        var data = {
            file_name: f.name,
            file_key: blkRet.key
        }
        $http(url).put(data, function(result) {
            var delete_ele = target_ele.nextAll(".delete-file");
            delete_ele.show();
            var link = IMG_LINK + blkRet.key;
            target_ele.attr({ "href": link, title: f.name }).text(f.name);
        })
    },
    uploadFile: function(event) {
        var f = $(event.target).prop("files");
        if (f && f[0] && f[0].size < this.fileSize) {
            var $target = $(event.target).parent().parent();
            var target_ele = $target.find(".upload-file");
            var name = f[0].name;
            var key_token = this.form_get_qiniu_token();
            if (key_token) {
                target_ele.text("正在上传，请稍等...").show();
                var key = key_token["key"];
                var uploadToken = key_token["token"];
                f = f[0];
                this.qiniuUploadAsync(f, uploadToken, key, this.loadCallback, target_ele,
                    function(target_ele, data) { target_ele.text("正在上传，" + data.percent + "%，速度：" + data.speed); });
            } else {
                alert("出错了，请稍后重试！");
            }
        } else {
            alert("文件太大了，请压缩后重新上传！");
        }
    },
    qiniuUploadAsync: function(f, token, key, callback, target_ele, progress) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "http://upload.qiniu.com", true);
        var formData, startDate;
        formData = new FormData();
        if (key !== null && key !== undefined) formData.append('key', key);
        formData.append('token', token);
        formData.append('file', f);
        var taking;
        xhr.upload.addEventListener("progress", function(evt) {
            if (evt.lengthComputable) {
                var nowDate = new Date().getTime();
                taking = nowDate - startDate;
                var x = (evt.loaded) / 1024;
                var y = taking / 1000;
                var uploadSpeed = (x / y);
                var formatSpeed;
                if (uploadSpeed > 1024) {
                    formatSpeed = (uploadSpeed / 1024).toFixed(2) + "Mb\/s";
                } else {
                    formatSpeed = uploadSpeed.toFixed(2) + "Kb\/s";
                }
                var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                progress(target_ele, {
                    "speed": formatSpeed,
                    "percent": percentComplete
                });
            }
        }, false);

        xhr.onreadystatechange = function(response) {
            if (xhr.readyState == 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    var blkRet = JSON.parse(xhr.responseText);
                    callback(blkRet, target_ele, f);
                } else {
                    alert("上传失败，请稍后重试");
                    target_ele.text("").hide();
                }
            }
        };
        startDate = new Date().getTime();
        xhr.send(formData);
    },
    form_get_qiniu_token: function() {
        var htmlobj = $.ajax({
            url: '/api/v2/others/upload-token',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            processData: false,
            cache: false,
            async: false
        });
        if (htmlobj["responseJSON"] && !htmlobj["responseJSON"]["error"]) {
            return htmlobj["responseJSON"];
        } else if (htmlobj["responseJSON"]["error"] == "unauthorized") {
            return false;
        } else {
            return false;
        }
    },
};

//判断用户输入符合条件
function checkInputCondition(item, condition) {
    if (condition) {
        $("#" + item + "_tip").hide();
        return true;
    } else {
        $("#" + item + "_tip").show();
        return false;
    }
}

function showDemandDetail(ele) {
    if (ele) {
        ele.delegate(".demand-pop", "click", function(event) {
            getData(event)
        });
    } else {
        $(".demand-pop").click(function(event) {
            getData(event)
        });
    }

    function getData(event) {
        var $target = $(event.target);
        var id = $target.parents("tr").attr("data-id");
        var detail = JSON.parse($target.parents("tr").attr("data-detail"));
        if (detail.name) {
            var data = detail;
            $("#demand_name").text(data.name);
            $("#demand_num").text(data.quantity);
            $("#demand_size").text(data.size);
            $("#demand_caizhi").text(data.caizhi);
            $("#demand_others").text(data.others);
            popUp.showPop("#demand_detail");
        }
    }
}
//判断配送区域是否填写
function checkReceiverRegion() {
    if ($("#receiver_province").val()) {
        if ($("#receiver_city").val()) {
            if (!$("#receiver_county").is(":hidden") && $("#receiver_county").val()) {
                $("#receiver_region_tip").show();
                return false;
            } else {
                $("#receiver_region_tip").hide();
                return true;
            }
        } else {
            $("#receiver_region_tip").show();
            return false;
        }
    } else {
        $("#receiver_region_tip").show();
        return false;
    }
}

//获取省级区域列表
function get_provice_regions(chosen) {
    var $province = $("#receiver_province");
    var provinces = JSON.parse(localStorage.getItem("ys_province_regions"));
    if (provinces) {
        str = '<option></option>';
        for (var i = 0; i < provinces.length; i++) {
            str += '<option value="' + provinces[i]['region_id'] + '">' + provinces[i]['name'] + '</option>';
        }
        $province.html(str);
        if (chosen) {
            $province.find("option[value='" + chosen + "']").attr("selected", true);
        }
        $province.trigger("chosen:updated");
    } else {
        var url = '/api/v2/web/locations/full-provinces';
        $http(url).get(function(result) {
            if (result.provinces) {
                localStorage.setItem("ys_province_regions", JSON.stringify(result.provinces));
                str = '<option></option>';
                for (var i = 0; i < result.provinces.length; i++) {
                    str += '<option value="' + result.provinces[i]['region_id'] + '">' + result.provinces[i]['name'] + '</option>';
                }
                $province.html(str);
                if (chosen) {
                    $province.find("option[value='" + chosen + "']").attr("selected", true);
                }
                $province.trigger("chosen:updated");
            }
        });
    }
}
//对应省份下的城市列表
function set_provice_city(id, chosen) {
    // $('#receiver_provice').val(id);
    var $city = $("#receiver_city");
    var str = '';
    var url = '/api/v2/web/locations/province-cities?province_id=' + id;
    $http(url).get(function(result) {
        if (result.cities) {
            str = '<option></option>';
            for (var i = 0; i < result.cities.length; i++) {
                str += '<option value="' + result.cities[i]['region_id'] + '">' + result.cities[i]['name'] + '</option>';
            }
        }
        $city.html(str);
        if (chosen) {
            $city.find("option[value='" + chosen + "']").attr("selected", true);
        }
        $city.trigger("chosen:updated");
    })
}
//对应城市下的区县列表
function set_city_county(id, chosen) {
    // $('#receiver_city').val(id);
    var $county = $("#receiver_county");
    var str = '';
    var url = '/api/v2/web/locations/city-counties?city_id=' + id;
    $http(url).get(function(result) {
        if (result.counties) {
            $("#receiver_county_chosen").show();
            str = '<option></option>';
            for (var i = 0; i < result.counties.length; i++) {
                str += '<option value="' + result.counties[i]['region_id'] + '">' + result.counties[i]['name'] + '</option>';
            }
            $county.html(str);
            if (chosen) {
                $county.find("option[value='" + chosen + "']").attr("selected", true);
            }
            $county.trigger("chosen:updated");
        } else {
            $("#display_receiver_county").text("");
            $("#receiver_county").val("");
            $("#receiver_county_chosen").hide();
        }
    })
}
