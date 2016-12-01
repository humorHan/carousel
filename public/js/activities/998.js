var clickToSelectHintText = "点击选购该商品";
var clickToUnselectHintText = "点击取消选择";
var unableToSelectHintText = "已选满3个商品，如想要继续选购此商品，请先取消其他商品";

var selectBtnObject = $(".optional-product div.btn");
var selectStatus = [false, false, false, false, false, false];
var selectStatusTextObject = $(".act-combo-table .act-combo-table-cell-status-unchecked");
var originCostObject = $(".original-cost");
var cartObject = $(".act-combo .add-cart-btn");
var optionalProductPrices = [144, 144, 150, 124, 140, 150];
var optionalProductName = ["海报12张", "名片8盒", "不干胶1000张", "横幅2条", "单页1000张", "胸牌30个"];
var selectedProductCount = 0;
var originalCost = 952;
var comboProductCustomName = "可选商品";

var comboProductPriceId = 3493;

function addToCart() {
	var values = [];
	for (var i = 0; i < 6; i++) {
		if (selectStatus[i]) {
			values.push(optionalProductName[i]);
		}
	}
	var fields = [{name: comboProductCustomName, values: values}];

	var url = "/api/v2/cart/add";
    var data = {
        price_id: comboProductPriceId,
        quantity: 1,
        fields: fields,
    };
    $http(url).post(data, function(result) {
        popUp.showPop("#add_cart");
        /* 商品成功加入购物车后，右上角购物车数据刷新 */
        $("#add_cart .no-stay").click(function() {
            getShowCartBtn();
        });
        $("#add_cart .close").click(function() {
            getShowCartBtn();
        });
    });
}

! function() {
	$(".act-998 .optional-product").delegate("div.btn", "click", function(e) {
		var index = selectBtnObject.index($(this));
		if (selectStatus[index]) {
			// 六选三中选购按钮
			$(this).removeClass("checked").addClass("unchecked");
			$(this).attr("title", clickToSelectHintText);
			if (selectedProductCount === 3) {
				for (var i = 0; i < 6; i++) {
					if (i !== index && selectStatus[i] === false) {
						$(selectBtnObject[i]).attr("title", clickToSelectHintText);
						$(selectBtnObject[i]).css("cursor", "pointer");
					}
				}
			}

			// 表格中选购情况文字
			selectStatusTextObject[index].innerHTML = "未选";
			$(selectStatusTextObject[index]).removeClass("act-combo-table-cell-status-checked").addClass("act-combo-table-cell-status-unchecked");

			// 原价
			originalCost = originalCost - optionalProductPrices[index];
			originCostObject[0].innerHTML = "原价：￥" + originalCost;

			// 购物车按钮
			if (selectedProductCount === 3) {
				cartObject.removeClass("enabled").addClass("disabled");
			}

			selectedProductCount--;
			selectStatus[index] = false;
	
		} else if (selectedProductCount < 3) {
			// 六选三中选购按钮
			$(this).removeClass("unchecked").addClass("checked");
			$(this).attr("title", clickToUnselectHintText);
			if (selectedProductCount === 2) {
				for (var i = 0; i < 6; i++) {
					if (i !== index && selectStatus[i] === false) {
						$(selectBtnObject[i]).attr("title", unableToSelectHintText);
						$(selectBtnObject[i]).css("cursor", "not-allowed");
					}
				}
			}

			// 表格中选购情况文字
			selectStatusTextObject[index].innerHTML = "已选";
			$(selectStatusTextObject[index]).removeClass("act-combo-table-cell-status-unchecked").addClass("act-combo-table-cell-status-checked");

			// 原价
			originalCost = originalCost + optionalProductPrices[index];
			originCostObject[0].innerHTML = "原价：￥" + originalCost;

			// 购物车按钮
			if (selectedProductCount === 2) {
				cartObject.removeClass("disabled").addClass("enabled");
			}

			selectedProductCount++;
			selectStatus[index] = true;
		}
	});
	$(".act-998 .act-combo").delegate("div.add-cart-btn", "click", function(e) {
		if (cartObject.hasClass("enabled")) {
			var truthId = $.cookie("truthid");
	        var userId = $.cookie("userid");
	        if (!truthId || !userId) {
	            login.showPop(function() {
	                addToCart();
	            });
	        } else {
	            addToCart();
	        }
		}
	});
}();