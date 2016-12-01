var OnDemandProduct = {
    validateName: function(value) {
        if (value.length === 0) {
            return "请填写产品名称";
        } else if (value.length > 25) {
            return "产品名称不能超过25个字";
        }
        return;
    },
    validateQuantity: function(value) {
        var numberPattern = /^[0-9]{1,7}[^0-9]{1,2}$/;
        if (value.length === 0) {
            return "请填写数量";
        } else if (!numberPattern.test(value)) {
            return "请填写正确的数量";
        }
        return;
    },
    validateSize: function(value) {
        if (value.length > 50) {
            return "字数过多";
        }
        return;
    },
    validateCaizhi: function(value) {
        if (value.length > 50) {
            return "材质不能超过50个字";
        }
        return;
    },
    validateOthers: function(value) {
        if (value.length > 500) {
            return "其他要求不能超过500个字";
        }
        return;
    },
    setNameErrorHint: function(productName) {
        var value = productName.value;
        var formItem = $(productName).closest(".form-item");
        var hint = $(productName).siblings("i.msg")[0];
        var errorMsg = this.validateName(value);
        if (errorMsg) {
            if (!formItem.hasClass("error")) {
                formItem.addClass("error");
            }
            hint.innerText = errorMsg;
        } else {
            if (formItem.hasClass("error")) {
                formItem.removeClass("error");
            }
        }
    },
    setQuantityErrorHint: function(productQuantity) {
        var value = productQuantity.value;
        var formItem = $(productQuantity).closest(".form-item");
        var hint = $(productQuantity).siblings("i.msg")[0];
        var errorMsg = this.validateQuantity(value);
        if (errorMsg) {
            if (!formItem.hasClass("error")) {
                formItem.addClass("error");
            }
            hint.innerText = errorMsg;
        } else {
            if (formItem.hasClass("error")) {
                formItem.removeClass("error");
            }
        }
    },
    setSizeErrorHint: function(productSize) {
        var value = productSize.value;
        var formItem = $(productSize).closest(".form-item");
        var hint = $(productSize).siblings("i.msg")[0];
        var errorMsg = this.validateSize(value);
        if (errorMsg) {
            if (!formItem.hasClass("error")) {
                formItem.addClass("error");
            }
            hint.innerText = errorMsg;
        } else {
            if (formItem.hasClass("error")) {
                formItem.removeClass("error");
            }
        }
    },
    setCaizhiErrorHint: function(productCaizhi) {
        var value = productCaizhi.value;
        var formItem = $(productCaizhi).closest(".form-item");
        var hint = $(productCaizhi).siblings("i.msg")[0];
        var errorMsg = this.validateCaizhi(value);
        if (errorMsg) {
            if (!formItem.hasClass("error")) {
                formItem.addClass("error");
            }
            hint.innerText = errorMsg;
        } else {
            if (formItem.hasClass("error")) {
                formItem.removeClass("error");
            }
        }
    },
    setOthersErrorHint: function(productOthers) {
        var value = productOthers.value;
        var formItem = $(productOthers).closest(".form-item");
        var hint = $(productOthers).siblings("i.msg")[0];
        var errorMsg = this.validateOthers(value);
        if (errorMsg) {
            if (!formItem.hasClass("error")) {
                formItem.addClass("error");
            }
            hint.innerText = errorMsg;
        } else {
            if (formItem.hasClass("error")) {
                formItem.removeClass("error");
            }
        }
    },
    initData: function() {
        // 产品名称
        var productName = document.getElementById("on_demand_product_name_input");
        $(productName).siblings("input.placeholder, textarea.placeholder")[0].style.display = "inline-block";
        $(productName).val("");
        $(productName).closest(".form-item").removeClass("error");
        $(productName).siblings("i.msg")[0].innerText = "请填写产品名称";

        // 数量
        var productQuantity = document.getElementById("on_demand_product_quantity_input");
        $(productQuantity).siblings("input.placeholder, textarea.placeholder")[0].style.display = "inline-block";
        $(productQuantity).val("");
        $(productQuantity).closest(".form-item").removeClass("error");
        $(productQuantity).siblings("i.msg")[0].innerText = "请填写数量";

        // 产品尺寸
        var productSize = document.getElementById("on_demand_product_size_input");
        $(productSize).siblings("input.placeholder, textarea.placeholder")[0].style.display = "inline-block";
        $(productSize).val("");
        $(productSize).closest(".form-item").removeClass("error");
        $(productSize).siblings("i.msg")[0].innerText = "字数过多";

        // 材质
        var productCaizhi = document.getElementById("on_demand_product_caizhi_input");
        $(productCaizhi).siblings("input.placeholder, textarea.placeholder")[0].style.display = "inline-block";
        $(productCaizhi).val("");
        $(productCaizhi).closest(".form-item").removeClass("error");
        $(productCaizhi).siblings("i.msg")[0].innerText = "材质不能超过50个字";

        // 其他要求
        var productOthers = document.getElementById("on_demand_product_others_input");
        $(productOthers).siblings("input.placeholder, textarea.placeholder")[0].style.display = "inline-block";
        $(productOthers).val("");
        $(productOthers).closest(".form-item").removeClass("error");
        $(productOthers).siblings("i.msg")[0].innerText = "其他要求不能超过500个字";
    },
    setData: function(name, quantity, size, caizhi, others) {
        // 产品名称
        var productName = document.getElementById("on_demand_product_name_input");
        if (name && name.length !== 0) {
            $(productName).siblings("input.placeholder, textarea.placeholder")[0].style.display = "none";
            $(productName).val(name);
        } else {
            $(productName).siblings("input.placeholder, textarea.placeholder")[0].style.display = "inline-block";
            $(productName).val("");
        }
        this.setNameErrorHint(productName);

        // 数量
        var productQuantity = document.getElementById("on_demand_product_quantity_input");
        if (quantity && quantity.length !== 0) {
            $(productQuantity).siblings("input.placeholder, textarea.placeholder")[0].style.display = "none";
            $(productQuantity).val(quantity);
        } else {
            $(productQuantity).siblings("input.placeholder, textarea.placeholder")[0].style.display = "inline-block";
            $(productQuantity).val("");
        }
        this.setQuantityErrorHint(productQuantity);

        // 产品尺寸
        var productSize = document.getElementById("on_demand_product_size_input");
        if (size && size.length !== 0) {
            $(productSize).siblings("input.placeholder, textarea.placeholder")[0].style.display = "none";
            $(productSize).val(size);
        } else {
            $(productSize).siblings("input.placeholder, textarea.placeholder")[0].style.display = "inline-block";
            $(productSize).val("");
        }
        this.setSizeErrorHint(productSize);

        // 材质
        var productCaizhi = document.getElementById("on_demand_product_caizhi_input");
        if (caizhi && caizhi.length !== 0) {
            $(productCaizhi).siblings("input.placeholder, textarea.placeholder")[0].style.display = "none";
            $(productCaizhi).val(caizhi);
        } else {
            $(productCaizhi).siblings("input.placeholder, textarea.placeholder")[0].style.display = "inline-block";
            $(productCaizhi).val("");
        }
        this.setCaizhiErrorHint(productCaizhi);

        // 其他要求
        var productOthers = document.getElementById("on_demand_product_others_input");
        if (others && others.length !== 0) {
            $(productOthers).siblings("input.placeholder, textarea.placeholder")[0].style.display = "none";
            $(productOthers).val(others);
        } else {
            $(productOthers).siblings("input.placeholder, textarea.placeholder")[0].style.display = "inline-block";
            $(productOthers).val("");
        }
        this.setOthersErrorHint(productOthers);
    },
    bindOnDemandInputEvent: function() {
        var self = this;
        // placeholder
        $(".on-demand-body").delegate("input.placeholder, textarea.placeholder", "focus", function(e) {
            this.style.display = "none";
            this.blur();
            $(this).siblings("input.on-demand-item-content, textarea.on-demand-item-content").focus();
        });
        $(".on-demand-body").delegate("input.on-demand-item-content, textarea.on-demand-item-content", "focus", function(e) {
            if (this.value.length === 0) {
                $(this).siblings("input.placeholder, textarea.placeholder")[0].style.display = "none";
            }
        });

        // input, textarea失去焦点时的错误提示判断
        $(".on-demand-body").delegate("input.on-demand-item-content, textarea.on-demand-item-content", "blur", function(e) {
            if (this.value.length === 0) {
                $(this).siblings("input.placeholder, textarea.placeholder")[0].style.display = "inline-block";
            }

            if (this.id === "on_demand_product_name_input") {
                self.setNameErrorHint(this);
            } else if (this.id === "on_demand_product_quantity_input") {
                self.setQuantityErrorHint(this);
            } else if (this.id === "on_demand_product_size_input") {
                self.setSizeErrorHint(this);
            } else if (this.id === "on_demand_product_caizhi_input") {
                self.setCaizhiErrorHint(this);
            } else if (this.id === "on_demand_product_others_input") {
                self.setOthersErrorHint(this);
            }
        });

        // select选项改变时的错误提示判断
        $(".on-demand-body #on_demand_product_category_input").change(function(e) {
            var formItem = $(this).closest(".form-item");
            var value = $(this).val();
            if (value.length === 0) {
                if (!formItem.hasClass("error")) {
                    formItem.addClass("error");
                }
            } else {
                if (formItem.hasClass("error")) {
                    formItem.removeClass("error");
                }
            }
        });
    }
};

! function() {
    imgZoom.bindEvent();

    OnDemandProduct.bindOnDemandInputEvent();

    $("#add_to_cart").click(function() {
        var data = {
            name: $("#on_demand_product_name_input").val(),
            category: '定制名片',
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

        var url = "/api/v2/cart/add-custom";
        $http(url).post(data, function() {
            popUp.showPop("#add_to_cart_modal");
            /* 按需定制商品成功加入购物车后，右上角购物车数据刷新 */
            $("#add_to_cart_modal .close").click(function(){
                location.reload();
            })
        });
    });
}();
