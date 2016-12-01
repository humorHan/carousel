webpackJsonp([1,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by humorHan on 16/11/15.
	 */
	__webpack_require__(13);
	var ajax = __webpack_require__(4);
	var carousel = __webpack_require__(14);
	var fe = __webpack_require__(7);
	var partners = __webpack_require__(17);
	var activityTpl = __webpack_require__(18);
	var floorTpl = __webpack_require__(19);
	var partnerTpl = __webpack_require__(24);
	__webpack_require__(5);
	
	var index = {
	    init: function () {
	        this.initActivity();
	        this.initCarousel();
	        this.standardFloor();
	        this.cooperativePartner();
	        this.initBtns();
	    },
	    initActivity: function () {
	        $(".activity-wrap").html(activityTpl());
	    },
	    initCarousel: function () {
	        ajax({
	            url: '/api/v2/others/banners',
	            data: {
	                limit: fe.BANNER_NUM
	            },
	            success: function (data) {
	                carousel({
	                    dom: 'index-banner',
	                    data: data.banners,
	                    hasPreNext: true
	                });
	            }
	        });
	    },
	    standardFloor: function () {
	        ajax({
	            url: '/api/v2/others/floors',
	            data: {
	                limit: fe.FLOOR_NUM
	            },
	            success: function (data) {
	                $(".standard-floor").html(floorTpl(data));
	                $(".floor-carousel-flag").each(function(i, $item){
	                    carousel({
	                        dom: $($item).attr("data-carousel-class"),
	                        data: data.floors[$($item).closest(".floor").index()].items[$($item).closest(".item").index()].data
	                    });
	                });
	            }
	        });
	    },
	    cooperativePartner: function () {
	       $(".cooperative-partner").html(partnerTpl(partners));
	    },
	    initBtns: function () {
	        var tThis = this;
	        //关闭活动
	        $(".activity-wrap").on("click", ".close-activity", function () {
	            $(".activity-wrap").fadeOut('normal', function () {
	                $(".activity-wrap").html('');
	            })
	        });
	    }
	};
	
	$(function () {
	    index.init();
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by humorHan on 2016/11/18.
	 */
	var art = __webpack_require__(6);
	var config = __webpack_require__(7);
	
	//时间戳转化方法
	art.helper('dateFormat', function (date, format) {
	    date = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10));
	    date = new Date(date);
	    var map = {
	        "Y": date.getYear(),
	        "M": date.getMonth() + 1, //月份
	        "d": date.getDate(), //日
	        "h": date.getHours(), //小时
	        "m": date.getMinutes(), //分
	        "s": date.getSeconds(), //秒
	        "q": Math.floor((date.getMonth() + 3) / 3), //季度
	        "S": date.getMilliseconds() //毫秒
	    };
	    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
	        var v = map[t];
	        if (v !== undefined) {
	            if (all.length > 1) {
	                v = '0' + v;
	                v = v.substr(v.length - 2);
	            }
	            return v;
	        }
	        else if (t === 'y') {
	            return (date.getFullYear() + '').substr(4 - all.length);
	        }
	        return all;
	    });
	    return format;
	});
	
	//得到图片地址
	art.helper('getUrl',function(url){
	    return config.SOURCE + url;
	});
	
	//处理价格 3900变成39.00
	art.helper('processPrice', function(p){
	    var str = p + "";
	    var arr = str.split("");
	    if (arr.length === 1) {
	        arr.unshift("0", "0");
	    } else if (arr.length === 2) {
	        arr.unshift("0");
	    }
	    arr.splice(arr.length - 2, 0, ".");
	    var real = arr.join("");
	    return real;
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	/*TMODJS:{}*/
	!function () {
		function a(a, b) {
			return (/string|function/.test(typeof b) ? h : g)(a, b)
		}
	
		function b(a, c) {
			return "string" != typeof a && (c = typeof a, "number" === c ? a += "" : a = "function" === c ? b(a.call(a)) : ""), a
		}
	
		function c(a) {
			return l[a]
		}
	
		function d(a) {
			return b(a).replace(/&(?![\w#]+;)|[<>"']/g, c)
		}
	
		function e(a, b) {
			if (m(a))for (var c = 0, d = a.length; d > c; c++)b.call(a, a[c], c, a); else for (c in a)b.call(a, a[c], c)
		}
	
		function f(a, b) {
			var c = /(\/)[^\/]+\1\.\.\1/, d = ("./" + a).replace(/[^\/]+$/, ""), e = d + b;
			for (e = e.replace(/\/\.\//g, "/"); e.match(c);)e = e.replace(c, "/");
			return e
		}
	
		function g(b, c) {
			var d = a.get(b) || i({filename: b, name: "Render Error", message: "Template not found"});
			return c ? d(c) : d
		}
	
		function h(a, b) {
			if ("string" == typeof b) {
				var c = b;
				b = function () {
					return new k(c)
				}
			}
			var d = j[a] = function (c) {
				try {
					return new b(c, a) + ""
				} catch (d) {
					return i(d)()
				}
			};
			return d.prototype = b.prototype = n, d.toString = function () {
				return b + ""
			}, d
		}
	
		function i(a) {
			var b = "{Template Error}", c = a.stack || "";
			if (c)c = c.split("\n").slice(0, 2).join("\n"); else for (var d in a)c += "<" + d + ">\n" + a[d] + "\n\n";
			return function () {
				return "object" == typeof console && console.error(b + "\n\n" + c), b
			}
		}
	
		var j = a.cache = {}, k = this.String, l = {
			"<": "&#60;",
			">": "&#62;",
			'"': "&#34;",
			"'": "&#39;",
			"&": "&#38;"
		}, m = Array.isArray || function (a) {
				return "[object Array]" === {}.toString.call(a)
			}, n = a.utils = {
			$helpers: {}, $include: function (a, b, c) {
				return a = f(c, a), g(a, b)
			}, $string: b, $escape: d, $each: e
		}, o = a.helpers = n.$helpers;
		a.get = function (a) {
			return j[a.replace(/^\.\//, "")]
		}, a.helper = function (a, b) {
			o[a] = b
		}, module.exports = a
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by humorHan on 16/11/18.
	 */
	module.exports = {
	    //七牛
	    //SOURCE: 'http://source.soyyin.com/',
	    //测试服 发布正式版要更改
	    SOURCE: 'http://7xsolp.com1.z0.glb.clouddn.com/',
	    //请求首页banner的数量
	    BANNER_NUM: 6,
	    //楼层数
	    FLOOR_NUM: 4
	};

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by humorHan on 16/10/31.
	 */
	__webpack_require__(15);
	__webpack_require__(5);
	var config = __webpack_require__(7);
	var carouselTpl = __webpack_require__(16);
	
	function Carousel(options) {
	    this.dom = $("." + options.dom);
	    this.data = options.data;
	    this.carouselSum = options.data.length;
	    this.height = this.dom.outerHeight();
	    this.width = this.dom.outerWidth();
	    this.hasNav = options.hasNav || true;
	    this.hasPreNext = options.hasPreNext || false;
	    this.changeTime = options.changeTime || 4000;
	    this.animationTime = options.animationTime || 500;
	    this.index = 0; //显示图片的索引
	    this.timer = null; //定时器
	    this.initDom();
	    this.initBtns();
	}
	
	Carousel.prototype = {
	    //不参与逻辑点
	    initStatic: function () {
	        this.dom.find(".carousel-wrapper").css({
	            height: this.height,
	            width: this.width
	        });
	        this.dom.find(".carousel-img").css({
	            // 临时修订方案
	            'width': this.carouselSum * (this.width % 10 >= 9 ? this.width + 1 : this.width)
	        });
	    },
	    initDom: function () {
	        if (this.dom.length === 0) {
	            console.log('没有找到要初始化轮播图的节点');
	            return false;
	        }
	        this.dom.html(carouselTpl({
	            data: this.data,
	            hasNav: this.hasNav,
	            hasPreNext: this.hasPreNext
	        }));
	        this.initStatic();
	        this.initTimer();
	    },
	    initTimer: function () {
	        var tThis = this;
	        tThis.timer = setInterval(function () {
	            tThis.next();
	            tThis.changeNav();
	        }, tThis.changeTime)
	    },
	    /**
	     * 下一页
	     * @param isClick 是否是通过点击下一页按钮触发
	     */
	    next: function (isClick) {
	        this.index++;
	        if (isClick){
	            clearInterval(this.timer);
	            this.initTimer();
	        }
	        if (this.index == this.carouselSum) {
	            this.index = 0;
	            //无缝处理
	            this.dom.find(".carousel-wrapper").css({
	                background: 'url(' + config.SOURCE + this.data[this.data.length - 1].image_key + ')'
	            });
	            this.dom.find(".carousel-img").css("left", this.width);
	        }
	        this.changeNav();
	        //直接执行到末尾状态并清空队列
	        this.dom.find(".carousel-img").stop(true, true).animate({
	            'left': -this.width * this.index
	        }, this.animationTime);
	    },
	    previous: function () {
	        this.index--;
	        clearInterval(this.timer);
	        this.initTimer();
	        if (this.index == -1) {
	            this.index = this.carouselSum - 1;
	            //无缝处理
	            this.dom.find(".carousel-wrapper").css({
	                background: 'url(' + config.SOURCE + this.data[0].image_key + ')'
	            });
	            this.dom.find(".carousel-img").css("left", -this.width * (this.index + 1));
	        }
	        this.changeNav();
	        this.dom.find(".carousel-img").stop().animate({
	            'left': -this.width * this.index
	        }, this.animationTime);
	    },
	    //显示要显示的nav
	    changeNav: function () {
	        var temp = this.dom.find(".carousel-nav");
	        temp.find(".active").removeClass("active");
	        temp.find("li").eq(this.index).addClass("active");
	    },
	    // 点击carousel-nav li
	    goTo: function () {
	        clearInterval(this.timer);
	        this.dom.find(".carousel-img").stop().animate({
	            'left': -this.width * this.index
	        }, this.animationTime, this.initTimer());
	    },
	    initBtns: function () {
	        var tThis = this;
	        // previous + next + 划过img + 轮播nav
	        tThis.dom.delegate(".previous", "click", function () {
	            tThis.previous();
	        }).delegate(".next", "click", function () {
	            tThis.next(true);
	        }).delegate(".carousel-img", "mouseover", function () {
	            clearInterval(tThis.timer);
	        }).delegate(".carousel-img", "mouseout", function () {
	            tThis.initTimer();
	        }).delegate(".carousel-nav li", "click", function () {
	            tThis.index = $(this).index();
	            tThis.changeNav();
	            tThis.goTo();
	        });
	    }
	};
	
	/**
	 * 轮播图
	 * @param dom               轮播图节点
	 * @param data              轮播图数据
	 * @param hasNav            轮播图下面的焦点切换 (默认存在)
	 * @param hasPreNext        轮播图上一页下一页切换 (默认不存在)
	 * @param changeTime        轮播图切换时间间隔 (默认3500 ms)
	 * @param animationTime     轮播图切换动画时间 (默认500 ms)
	 */
	
	/*
	module.exports = function (dom, data, hasNav, hasPreNext, changeTime, animationTime) {
	    return new Carousel(dom, data, hasNav, hasPreNext, changeTime, animationTime);
	};*/
	
	module.exports = function (options) {
	    return new Carousel(options);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(6);
	module.exports=template('src/dep/components/carousel/carousel',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,hasPreNext=$data.hasPreNext,hasNav=$data.hasNav,$out='';$out+='<div class="carousel-wrapper"> <ul class="carousel-img"> ';
	$each(data,function($value,$index){
	$out+=' <li> <a class="block" href="';
	$out+=$escape($value.url);
	$out+='"> <img src="';
	$out+=$escape($helpers. getUrl($value.image_key ));
	$out+='"> </a> </li> ';
	});
	$out+=' </ul> ';
	if(hasPreNext){
	$out+=' <div class="previous-next"> <span class="previous"> <i class="middle"></i> </span> <span class="next"> <i class="middle"></i> </span> </div> ';
	}
	$out+=' ';
	if(hasNav){
	$out+=' <ul class="carousel-nav"> ';
	$each(data,function($value,$index){
	$out+=' ';
	if($index == 0){
	$out+=' <li class="active"></li> ';
	}else{
	$out+=' <li></li> ';
	}
	$out+=' ';
	});
	$out+=' </ul> ';
	}
	$out+=' </div>';
	return new String($out);
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Created by humorHan on 16/11/22.
	 */
	module.exports = [
	    {
	        name: '乐纯',
	        url: '/assets/img/partners/partner-lc.png'
	    }, {
	        name: '每日优鲜',
	        url: '/assets/img/partners/partner-mryx.png'
	    }, {
	        name: '摩拜单车',
	        url: '/assets/img/partners/partner-mbdc.png'
	    }, {
	        name: '税客',
	        url: '/assets/img/partners/partner-shk.png'
	    }, {
	        name: '51社保',
	        url: '/assets/img/partners/partner-shb.png'
	    }
	];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(6);
	module.exports=template('src/tpl/index/activity','<a href=\'/activities/998\' class="block w1200"> <img class="activity w1200 auto" src="http://source.soyyin.com/activities/998/998_entry_in_index_page.png"> </a> <span class="close-activity"></span>');

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(6);__webpack_require__(20);__webpack_require__(21);__webpack_require__(22);__webpack_require__(23);
	module.exports=template('src/tpl/index/floor',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,floors=$data.floors,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$each(floors,function($value,$index){
	$out+=' <div class="floor mt40"> <div class="floor-title mb10 font18"> ';
	$out+=$escape($index + 1);
	$out+='F ';
	$out+=$escape($value.title);
	$out+=' </div> ';
	if($value.style == 1){
	$out+=' ';
	include('./floorStyle1',$value);
	$out+='  ';
	}else if($value.style == 2){
	$out+=' ';
	include('./floorStyle2',$value);
	$out+='  ';
	}else if($value.style == 3){
	$out+='  ';
	include('./floorStyle3',$value);
	$out+=' ';
	}else{
	$out+='  ';
	include('./floorStyle4',$value);
	$out+=' ';
	}
	$out+=' </div> ';
	});
	return new String($out);
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(6);
	module.exports=template('src/tpl/index/floorStyle1',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,items=$data.items,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<ul class="floor-content clearFix"> ';
	$each(items,function($value,$index){
	$out+=' ';
	if($index == 0){
	$out+=' <li class="floatLeft box-shadow"> <a href="';
	$out+=$escape($value.data['0'].url);
	$out+='"> <img src="';
	$out+=$escape($helpers. getUrl($value.data['0'].image_key ));
	$out+='" /> </a> </li> ';
	}else{
	$out+=' <li class="floatLeft box-shadow borderL"> <a href="';
	$out+=$escape($value.data['0'].url);
	$out+='"> <img src="';
	$out+=$escape($helpers. getUrl($value.data['0'].image_key ));
	$out+='" /> </a> </li> ';
	}
	$out+=' ';
	});
	$out+=' </ul>';
	return new String($out);
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(6);
	module.exports=template('src/tpl/index/floorStyle2',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,items=$data.items,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,id=$data.id,$out='';$out+='<ul class="floor-content clearFix"> ';
	$each(items,function($value,$index){
	$out+=' ';
	if($index === 0){
	$out+=' ';
	if($value.type == 'HORIZONTAL_CAROUSEL'){
	$out+=' <li class="floatLeft w480 item box-shadow"> <div class="floor-carousel-flag carousel';
	$out+=$escape(id);
	$out+='" data-carousel-class="carousel';
	$out+=$escape(id);
	$out+='"></div> </li> ';
	}else{
	$out+=' <li class="floatLeft box-shadow"> <a href="';
	$out+=$escape($value.data['0'].url);
	$out+='"> <img src="';
	$out+=$escape($helpers. getUrl($value.data['0'].image_key ));
	$out+='" /> </a> </li> ';
	}
	$out+=' ';
	}else{
	$out+=' ';
	if($value.type == 'HORIZONTAL_CAROUSEL'){
	$out+=' <li class="floatLeft box-shadow w480 borderL item"> <div class="floor-carousel-flag carousel';
	$out+=$escape(id);
	$out+='" data-carousel-class="carousel';
	$out+=$escape(id);
	$out+='"></div> </li> ';
	}else{
	$out+=' <li class="floatLeft box-shadow borderL"> <a href="';
	$out+=$escape($value.data['0'].url);
	$out+='"> <img src="';
	$out+=$escape($helpers. getUrl($value.data['0'].image_key ));
	$out+='" /> </a> </li> ';
	}
	$out+=' ';
	}
	$out+=' ';
	});
	$out+=' </ul>';
	return new String($out);
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(6);
	module.exports=template('src/tpl/index/floorStyle3',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,items=$data.items,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$out='';$out+='<div class="floor-content floor-style3 clearFix"> <div class="floatLeft box-shadow"> <a href="';
	$out+=$escape(items['0'].data['0'].url);
	$out+='"> <img style="width: 240px; height: 482px;" src="';
	$out+=$escape($helpers. getUrl(items['0'].data['0'].image_key ));
	$out+='" /> </a> </div> <ul class="floatLeft" style="width: 960px;"> ';
	$each(items,function($value,$index){
	$out+=' ';
	if($index > 0 && $index <= 4){
	$out+=' <li class="floatLeft borderL border-box borderB box-shadow"> <a href="';
	$out+=$escape($value.data['0'].url);
	$out+='"> <img src="';
	$out+=$escape($helpers. getUrl($value.data['0'].image_key ));
	$out+='" /> </a> </li> ';
	}else if($index > 0 && $index > 4){
	$out+=' <li class="floatLeft borderL border-box box-shadow"> <a href="';
	$out+=$escape($value.data['0'].url);
	$out+='"> <img src="';
	$out+=$escape($helpers. getUrl($value.data['0'].image_key ));
	$out+='" /> </a> </li> ';
	}
	$out+=' ';
	});
	$out+=' </ul> </div>';
	return new String($out);
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(6);
	module.exports=template('src/tpl/index/floorStyle4',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,items=$data.items,$each=$utils.$each,$value=$data.$value,$index=$data.$index,id=$data.id,$out='';$out+='<div class="floor-content floor-style3 clearFix"> <div class="floatLeft box-shadow"> <a href="';
	$out+=$escape(items['0'].data['0'].url);
	$out+='"> <img style="width: 240px; height: 482px;" src="';
	$out+=$escape($helpers. getUrl(items['0'].data['0'].image_key ));
	$out+='" /> </a> </div> <ul class="floatLeft item" style="width: 960px;"> ';
	$each(items,function($value,$index){
	$out+=' ';
	if($index > 0 && $index <= 3){
	$out+=' ';
	if($index == 1){
	$out+=' <li class="floatLeft borderL border-box box-shadow" style="width: 480px; height: 240px;"> <div class="floor-carousel-flag carousel';
	$out+=$escape(id);
	$out+='" data-carousel-class="carousel';
	$out+=$escape(id);
	$out+='" style="width: 479px; height: 240px;"></div> </li> ';
	}else{
	$out+=' <li class="floatLeft borderL border-box box-shadow"> <a href="';
	$out+=$escape($value.data['0'].url);
	$out+='"> <img src="';
	$out+=$escape($helpers. getUrl($value.data['0'].image_key ));
	$out+='" /> </a> </li> ';
	}
	$out+=' ';
	}else if($index > 0 && $index > 3){
	$out+=' <li class="floatLeft borderL border-box borderT box-shadow"> <a href="';
	$out+=$escape($value.data['0'].url);
	$out+='"> <img src="';
	$out+=$escape($helpers. getUrl($value.data['0'].image_key ));
	$out+='" /> </a> </li> ';
	}
	$out+=' ';
	});
	$out+=' </ul> </div>';
	return new String($out);
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(6);
	module.exports=template('src/tpl/index/partners',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$each($data,function($value,$index){
	$out+=' ';
	if($index == 0){
	$out+=' <li class="floatLeft white-bg"> <img src="';
	$out+=$escape($value.url);
	$out+='"/> </li> ';
	}else{
	$out+=' <li class="floatLeft white-bg ml10"> <img src="';
	$out+=$escape($value.url);
	$out+='"/> </li> ';
	}
	$out+=' ';
	});
	return new String($out);
	});

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbmV3SW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcC91dGlsL2FqYXguanM/Mzc0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGVwL3RlbXBsYXRlLWhlbHBlci5qcz9kZjMwIiwid2VicGFjazovLy8uL34vdG1vZGpzLWxvYWRlci9ydW50aW1lLmpzPzg5NjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcC9jb25maWcvY29uZmlnLmpzPzQ0MDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbmV3SW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVwL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnRwbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGVwL2NvbmZpZy9wYXJ0bmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHBsL2luZGV4L2FjdGl2aXR5LnRwbCIsIndlYnBhY2s6Ly8vLi9zcmMvdHBsL2luZGV4L2Zsb29yLnRwbCIsIndlYnBhY2s6Ly8vLi9zcmMvdHBsL2luZGV4L2Zsb29yU3R5bGUxLnRwbCIsIndlYnBhY2s6Ly8vLi9zcmMvdHBsL2luZGV4L2Zsb29yU3R5bGUyLnRwbCIsIndlYnBhY2s6Ly8vLi9zcmMvdHBsL2luZGV4L2Zsb29yU3R5bGUzLnRwbCIsIndlYnBhY2s6Ly8vLi9zcmMvdHBsL2luZGV4L2Zsb29yU3R5bGU0LnRwbCIsIndlYnBhY2s6Ly8vLi9zcmMvdHBsL2luZGV4L3BhcnRuZXJzLnRwbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQSxHOzs7Ozs7QUNsSkEsMEM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsbU1BQW1NO0FBQ2hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDL0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3BCQTtBQUNBLDRQOzs7Ozs7QUNEQSxxQ0FBOEMsd0JBQTZCLHdCQUE2Qix3QkFBNkI7QUFDckk7QUFDQTtBQUNBLGNBQWEsK0tBQStLLGlCQUFpQixrREFBa0QsV0FBVyxhQUFhLFNBQVM7QUFDaFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLEVBQUMsRTs7Ozs7O0FDN0JEO0FBQ0E7QUFDQTtBQUNBLGNBQWEscUpBQXFKO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDdkJEO0FBQ0E7QUFDQTtBQUNBLGNBQWEsaUtBQWlLO0FBQzlLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUMzQ0Q7QUFDQTtBQUNBO0FBQ0EsY0FBYSxxSkFBcUo7QUFDbEs7QUFDQSxvQ0FBbUMsZUFBZTtBQUNsRDtBQUNBLG1FQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQzNCRDtBQUNBO0FBQ0E7QUFDQSxjQUFhLGlLQUFpSztBQUM5SztBQUNBLG9DQUFtQyxlQUFlO0FBQ2xEO0FBQ0Esd0VBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBZ0YsZUFBZTtBQUMvRjtBQUNBO0FBQ0E7QUFDQSw4QkFBNkIsZUFBZTtBQUM1QyxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDckNEO0FBQ0E7QUFDQTtBQUNBLGNBQWEsbUlBQW1JO0FBQ2hKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLEVBQUMsRSIsImZpbGUiOiJqcy9uZXdJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAxNi8xMS8xNS5cbiAqL1xucmVxdWlyZSgnbmV3SW5kZXguc2NzcycpO1xudmFyIGFqYXggPSByZXF1aXJlKCd1dGlsL2FqYXguanMnKTtcbnZhciBjYXJvdXNlbCA9IHJlcXVpcmUoXCJjb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmpzXCIpO1xudmFyIGZlID0gcmVxdWlyZShcImNvbmZpZy9jb25maWcuanNcIik7XG52YXIgcGFydG5lcnMgPSByZXF1aXJlKFwiY29uZmlnL3BhcnRuZXJzLmpzXCIpO1xudmFyIGFjdGl2aXR5VHBsID0gcmVxdWlyZShcImluZGV4L2FjdGl2aXR5LnRwbFwiKTtcbnZhciBmbG9vclRwbCA9IHJlcXVpcmUoXCJpbmRleC9mbG9vci50cGxcIik7XG52YXIgcGFydG5lclRwbCA9IHJlcXVpcmUoXCJpbmRleC9wYXJ0bmVycy50cGxcIik7XG5yZXF1aXJlKFwidGVtcGxhdGUtaGVscGVyLmpzXCIpO1xuXG52YXIgaW5kZXggPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluaXRBY3Rpdml0eSgpO1xuICAgICAgICB0aGlzLmluaXRDYXJvdXNlbCgpO1xuICAgICAgICB0aGlzLnN0YW5kYXJkRmxvb3IoKTtcbiAgICAgICAgdGhpcy5jb29wZXJhdGl2ZVBhcnRuZXIoKTtcbiAgICAgICAgdGhpcy5pbml0QnRucygpO1xuICAgIH0sXG4gICAgaW5pdEFjdGl2aXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIuYWN0aXZpdHktd3JhcFwiKS5odG1sKGFjdGl2aXR5VHBsKCkpO1xuICAgIH0sXG4gICAgaW5pdENhcm91c2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2FwaS92Mi9vdGhlcnMvYmFubmVycycsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGltaXQ6IGZlLkJBTk5FUl9OVU1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhcm91c2VsKHtcbiAgICAgICAgICAgICAgICAgICAgZG9tOiAnaW5kZXgtYmFubmVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YS5iYW5uZXJzLFxuICAgICAgICAgICAgICAgICAgICBoYXNQcmVOZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc3RhbmRhcmRGbG9vcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBhamF4KHtcbiAgICAgICAgICAgIHVybDogJy9hcGkvdjIvb3RoZXJzL2Zsb29ycycsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGltaXQ6IGZlLkZMT09SX05VTVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJChcIi5zdGFuZGFyZC1mbG9vclwiKS5odG1sKGZsb29yVHBsKGRhdGEpKTtcbiAgICAgICAgICAgICAgICAkKFwiLmZsb29yLWNhcm91c2VsLWZsYWdcIikuZWFjaChmdW5jdGlvbihpLCAkaXRlbSl7XG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbTogJCgkaXRlbSkuYXR0cihcImRhdGEtY2Fyb3VzZWwtY2xhc3NcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLmZsb29yc1skKCRpdGVtKS5jbG9zZXN0KFwiLmZsb29yXCIpLmluZGV4KCldLml0ZW1zWyQoJGl0ZW0pLmNsb3Nlc3QoXCIuaXRlbVwiKS5pbmRleCgpXS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNvb3BlcmF0aXZlUGFydG5lcjogZnVuY3Rpb24gKCkge1xuICAgICAgICQoXCIuY29vcGVyYXRpdmUtcGFydG5lclwiKS5odG1sKHBhcnRuZXJUcGwocGFydG5lcnMpKTtcbiAgICB9LFxuICAgIGluaXRCdG5zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0VGhpcyA9IHRoaXM7XG4gICAgICAgIC8v5YWz6Zet5rS75YqoXG4gICAgICAgICQoXCIuYWN0aXZpdHktd3JhcFwiKS5vbihcImNsaWNrXCIsIFwiLmNsb3NlLWFjdGl2aXR5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCIuYWN0aXZpdHktd3JhcFwiKS5mYWRlT3V0KCdub3JtYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChcIi5hY3Rpdml0eS13cmFwXCIpLmh0bWwoJycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuJChmdW5jdGlvbiAoKSB7XG4gICAgaW5kZXguaW5pdCgpO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbmV3SW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDE2LzExLzE3LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgJC5hamF4U2V0dXAoe1xuICAgICAgICBjYWNoZTogZmFsc2VcbiAgICB9KTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBvcHRpb25zLnR5cGUgfHwgJ0dFVCcsXG4gICAgICAgIHVybDogb3B0aW9ucy51cmwsXG4gICAgICAgIGRhdGE6IG9wdGlvbnMuZGF0YSB8fCB7fSxcbiAgICAgICAgZGF0YVR5cGU6IG9wdGlvbnMuZGF0YVR5cGUgfHwgJ2pzb24nLFxuICAgICAgICBjb250ZW50VHlwZTogb3B0aW9ucy5jb250ZW50VHlwZSB8fCAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIFRPRE8g6ZSZ6K+v5aSE55CG5ZKM5by65Yi26Lez6L2s562JXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RlcC91dGlsL2FqYXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENyZWF0ZWQgYnkgaHVtb3JIYW4gb24gMjAxNi8xMS8xOC5cbiAqL1xudmFyIGFydCA9IHJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xudmFyIGNvbmZpZyA9IHJlcXVpcmUoXCJjb25maWcvY29uZmlnLmpzXCIpO1xuXG4vL+aXtumXtOaIs+i9rOWMluaWueazlVxuYXJ0LmhlbHBlcignZGF0ZUZvcm1hdCcsIGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQpIHtcbiAgICBkYXRlID0gbmV3IERhdGUocGFyc2VJbnQoZGF0ZS5yZXBsYWNlKFwiL0RhdGUoXCIsIFwiXCIpLnJlcGxhY2UoXCIpL1wiLCBcIlwiKSwgMTApKTtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgdmFyIG1hcCA9IHtcbiAgICAgICAgXCJZXCI6IGRhdGUuZ2V0WWVhcigpLFxuICAgICAgICBcIk1cIjogZGF0ZS5nZXRNb250aCgpICsgMSwgLy/mnIjku71cbiAgICAgICAgXCJkXCI6IGRhdGUuZ2V0RGF0ZSgpLCAvL+aXpVxuICAgICAgICBcImhcIjogZGF0ZS5nZXRIb3VycygpLCAvL+Wwj+aXtlxuICAgICAgICBcIm1cIjogZGF0ZS5nZXRNaW51dGVzKCksIC8v5YiGXG4gICAgICAgIFwic1wiOiBkYXRlLmdldFNlY29uZHMoKSwgLy/np5JcbiAgICAgICAgXCJxXCI6IE1hdGguZmxvb3IoKGRhdGUuZ2V0TW9udGgoKSArIDMpIC8gMyksIC8v5a2j5bqmXG4gICAgICAgIFwiU1wiOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8v5q+r56eSXG4gICAgfTtcbiAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvKFt5TWRobXNxU10pKy9nLCBmdW5jdGlvbiAoYWxsLCB0KSB7XG4gICAgICAgIHZhciB2ID0gbWFwW3RdO1xuICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoYWxsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB2ID0gJzAnICsgdjtcbiAgICAgICAgICAgICAgICB2ID0gdi5zdWJzdHIodi5sZW5ndGggLSAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHQgPT09ICd5Jykge1xuICAgICAgICAgICAgcmV0dXJuIChkYXRlLmdldEZ1bGxZZWFyKCkgKyAnJykuc3Vic3RyKDQgLSBhbGwubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxsO1xuICAgIH0pO1xuICAgIHJldHVybiBmb3JtYXQ7XG59KTtcblxuLy/lvpfliLDlm77niYflnLDlnYBcbmFydC5oZWxwZXIoJ2dldFVybCcsZnVuY3Rpb24odXJsKXtcbiAgICByZXR1cm4gY29uZmlnLlNPVVJDRSArIHVybDtcbn0pO1xuXG4vL+WkhOeQhuS7t+agvCAzOTAw5Y+Y5oiQMzkuMDBcbmFydC5oZWxwZXIoJ3Byb2Nlc3NQcmljZScsIGZ1bmN0aW9uKHApe1xuICAgIHZhciBzdHIgPSBwICsgXCJcIjtcbiAgICB2YXIgYXJyID0gc3RyLnNwbGl0KFwiXCIpO1xuICAgIGlmIChhcnIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGFyci51bnNoaWZ0KFwiMFwiLCBcIjBcIik7XG4gICAgfSBlbHNlIGlmIChhcnIubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGFyci51bnNoaWZ0KFwiMFwiKTtcbiAgICB9XG4gICAgYXJyLnNwbGljZShhcnIubGVuZ3RoIC0gMiwgMCwgXCIuXCIpO1xuICAgIHZhciByZWFsID0gYXJyLmpvaW4oXCJcIik7XG4gICAgcmV0dXJuIHJlYWw7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kZXAvdGVtcGxhdGUtaGVscGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLypUTU9ESlM6e30qL1xyXG4hZnVuY3Rpb24gKCkge1xyXG5cdGZ1bmN0aW9uIGEoYSwgYikge1xyXG5cdFx0cmV0dXJuICgvc3RyaW5nfGZ1bmN0aW9uLy50ZXN0KHR5cGVvZiBiKSA/IGggOiBnKShhLCBiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYihhLCBjKSB7XHJcblx0XHRyZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSAmJiAoYyA9IHR5cGVvZiBhLCBcIm51bWJlclwiID09PSBjID8gYSArPSBcIlwiIDogYSA9IFwiZnVuY3Rpb25cIiA9PT0gYyA/IGIoYS5jYWxsKGEpKSA6IFwiXCIpLCBhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjKGEpIHtcclxuXHRcdHJldHVybiBsW2FdXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkKGEpIHtcclxuXHRcdHJldHVybiBiKGEpLnJlcGxhY2UoLyYoPyFbXFx3I10rOyl8Wzw+XCInXS9nLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZShhLCBiKSB7XHJcblx0XHRpZiAobShhKSlmb3IgKHZhciBjID0gMCwgZCA9IGEubGVuZ3RoOyBkID4gYzsgYysrKWIuY2FsbChhLCBhW2NdLCBjLCBhKTsgZWxzZSBmb3IgKGMgaW4gYSliLmNhbGwoYSwgYVtjXSwgYylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoYSwgYikge1xyXG5cdFx0dmFyIGMgPSAvKFxcLylbXlxcL10rXFwxXFwuXFwuXFwxLywgZCA9IChcIi4vXCIgKyBhKS5yZXBsYWNlKC9bXlxcL10rJC8sIFwiXCIpLCBlID0gZCArIGI7XHJcblx0XHRmb3IgKGUgPSBlLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7IGUubWF0Y2goYyk7KWUgPSBlLnJlcGxhY2UoYywgXCIvXCIpO1xyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoYiwgYykge1xyXG5cdFx0dmFyIGQgPSBhLmdldChiKSB8fCBpKHtmaWxlbmFtZTogYiwgbmFtZTogXCJSZW5kZXIgRXJyb3JcIiwgbWVzc2FnZTogXCJUZW1wbGF0ZSBub3QgZm91bmRcIn0pO1xyXG5cdFx0cmV0dXJuIGMgPyBkKGMpIDogZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChhLCBiKSB7XHJcblx0XHRpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYikge1xyXG5cdFx0XHR2YXIgYyA9IGI7XHJcblx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBrKGMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBkID0galthXSA9IGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBiKGMsIGEpICsgXCJcIlxyXG5cdFx0XHR9IGNhdGNoIChkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGkoZCkoKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGQucHJvdG90eXBlID0gYi5wcm90b3R5cGUgPSBuLCBkLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYiArIFwiXCJcclxuXHRcdH0sIGRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGkoYSkge1xyXG5cdFx0dmFyIGIgPSBcIntUZW1wbGF0ZSBFcnJvcn1cIiwgYyA9IGEuc3RhY2sgfHwgXCJcIjtcclxuXHRcdGlmIChjKWMgPSBjLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCJcXG5cIik7IGVsc2UgZm9yICh2YXIgZCBpbiBhKWMgKz0gXCI8XCIgKyBkICsgXCI+XFxuXCIgKyBhW2RdICsgXCJcXG5cXG5cIjtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IoYiArIFwiXFxuXFxuXCIgKyBjKSwgYlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGogPSBhLmNhY2hlID0ge30sIGsgPSB0aGlzLlN0cmluZywgbCA9IHtcclxuXHRcdFwiPFwiOiBcIiYjNjA7XCIsXHJcblx0XHRcIj5cIjogXCImIzYyO1wiLFxyXG5cdFx0J1wiJzogXCImIzM0O1wiLFxyXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcclxuXHRcdFwiJlwiOiBcIiYjMzg7XCJcclxuXHR9LCBtID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xyXG5cdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB7fS50b1N0cmluZy5jYWxsKGEpXHJcblx0XHR9LCBuID0gYS51dGlscyA9IHtcclxuXHRcdCRoZWxwZXJzOiB7fSwgJGluY2x1ZGU6IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcblx0XHRcdHJldHVybiBhID0gZihjLCBhKSwgZyhhLCBiKVxyXG5cdFx0fSwgJHN0cmluZzogYiwgJGVzY2FwZTogZCwgJGVhY2g6IGVcclxuXHR9LCBvID0gYS5oZWxwZXJzID0gbi4kaGVscGVycztcclxuXHRhLmdldCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRyZXR1cm4galthLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKV1cclxuXHR9LCBhLmhlbHBlciA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRvW2FdID0gYlxyXG5cdH0sIG1vZHVsZS5leHBvcnRzID0gYVxyXG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAxNi8xMS8xOC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy/kuIPniZtcbiAgICAvL1NPVVJDRTogJ2h0dHA6Ly9zb3VyY2Uuc295eWluLmNvbS8nLFxuICAgIC8v5rWL6K+V5pyNIOWPkeW4g+ato+W8j+eJiOimgeabtOaUuVxuICAgIFNPVVJDRTogJ2h0dHA6Ly83eHNvbHAuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vJyxcbiAgICAvL+ivt+axgummlumhtWJhbm5lcueahOaVsOmHj1xuICAgIEJBTk5FUl9OVU06IDYsXG4gICAgLy/mpbzlsYLmlbBcbiAgICBGTE9PUl9OVU06IDRcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGVwL2NvbmZpZy9jb25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvbmV3SW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDE2LzEwLzMxLlxuICovXG5yZXF1aXJlKFwiLi9jYXJvdXNlbC5zY3NzXCIpO1xucmVxdWlyZSgndGVtcGxhdGUtaGVscGVyLmpzJyk7XG52YXIgY29uZmlnID0gcmVxdWlyZShcImNvbmZpZy9jb25maWcuanNcIik7XG52YXIgY2Fyb3VzZWxUcGwgPSByZXF1aXJlKCcuL2Nhcm91c2VsLnRwbCcpO1xuXG5mdW5jdGlvbiBDYXJvdXNlbChvcHRpb25zKSB7XG4gICAgdGhpcy5kb20gPSAkKFwiLlwiICsgb3B0aW9ucy5kb20pO1xuICAgIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICB0aGlzLmNhcm91c2VsU3VtID0gb3B0aW9ucy5kYXRhLmxlbmd0aDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZG9tLm91dGVySGVpZ2h0KCk7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZG9tLm91dGVyV2lkdGgoKTtcbiAgICB0aGlzLmhhc05hdiA9IG9wdGlvbnMuaGFzTmF2IHx8IHRydWU7XG4gICAgdGhpcy5oYXNQcmVOZXh0ID0gb3B0aW9ucy5oYXNQcmVOZXh0IHx8IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlVGltZSA9IG9wdGlvbnMuY2hhbmdlVGltZSB8fCA0MDAwO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IG9wdGlvbnMuYW5pbWF0aW9uVGltZSB8fCA1MDA7XG4gICAgdGhpcy5pbmRleCA9IDA7IC8v5pi+56S65Zu+54mH55qE57Si5byVXG4gICAgdGhpcy50aW1lciA9IG51bGw7IC8v5a6a5pe25ZmoXG4gICAgdGhpcy5pbml0RG9tKCk7XG4gICAgdGhpcy5pbml0QnRucygpO1xufVxuXG5DYXJvdXNlbC5wcm90b3R5cGUgPSB7XG4gICAgLy/kuI3lj4LkuI7pgLvovpHngrlcbiAgICBpbml0U3RhdGljOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZG9tLmZpbmQoXCIuY2Fyb3VzZWwtd3JhcHBlclwiKS5jc3Moe1xuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRvbS5maW5kKFwiLmNhcm91c2VsLWltZ1wiKS5jc3Moe1xuICAgICAgICAgICAgLy8g5Li05pe25L+u6K6i5pa55qGIXG4gICAgICAgICAgICAnd2lkdGgnOiB0aGlzLmNhcm91c2VsU3VtICogKHRoaXMud2lkdGggJSAxMCA+PSA5ID8gdGhpcy53aWR0aCArIDEgOiB0aGlzLndpZHRoKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGluaXREb206IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9tLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+ayoeacieaJvuWIsOimgeWIneWni+WMlui9ruaSreWbvueahOiKgueCuScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9tLmh0bWwoY2Fyb3VzZWxUcGwoe1xuICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgICAgICAgaGFzTmF2OiB0aGlzLmhhc05hdixcbiAgICAgICAgICAgIGhhc1ByZU5leHQ6IHRoaXMuaGFzUHJlTmV4dFxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuaW5pdFN0YXRpYygpO1xuICAgICAgICB0aGlzLmluaXRUaW1lcigpO1xuICAgIH0sXG4gICAgaW5pdFRpbWVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0VGhpcyA9IHRoaXM7XG4gICAgICAgIHRUaGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdFRoaXMubmV4dCgpO1xuICAgICAgICAgICAgdFRoaXMuY2hhbmdlTmF2KCk7XG4gICAgICAgIH0sIHRUaGlzLmNoYW5nZVRpbWUpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDkuIvkuIDpobVcbiAgICAgKiBAcGFyYW0gaXNDbGljayDmmK/lkKbmmK/pgJrov4fngrnlh7vkuIvkuIDpobXmjInpkq7op6blj5FcbiAgICAgKi9cbiAgICBuZXh0OiBmdW5jdGlvbiAoaXNDbGljaykge1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIGlmIChpc0NsaWNrKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLmluaXRUaW1lcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmluZGV4ID09IHRoaXMuY2Fyb3VzZWxTdW0pIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICAgICAgLy/ml6DnvJ3lpITnkIZcbiAgICAgICAgICAgIHRoaXMuZG9tLmZpbmQoXCIuY2Fyb3VzZWwtd3JhcHBlclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd1cmwoJyArIGNvbmZpZy5TT1VSQ0UgKyB0aGlzLmRhdGFbdGhpcy5kYXRhLmxlbmd0aCAtIDFdLmltYWdlX2tleSArICcpJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRvbS5maW5kKFwiLmNhcm91c2VsLWltZ1wiKS5jc3MoXCJsZWZ0XCIsIHRoaXMud2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlTmF2KCk7XG4gICAgICAgIC8v55u05o6l5omn6KGM5Yiw5pyr5bC+54q25oCB5bm25riF56m66Zif5YiXXG4gICAgICAgIHRoaXMuZG9tLmZpbmQoXCIuY2Fyb3VzZWwtaW1nXCIpLnN0b3AodHJ1ZSwgdHJ1ZSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAnbGVmdCc6IC10aGlzLndpZHRoICogdGhpcy5pbmRleFxuICAgICAgICB9LCB0aGlzLmFuaW1hdGlvblRpbWUpO1xuICAgIH0sXG4gICAgcHJldmlvdXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbmRleC0tO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLmluaXRUaW1lcigpO1xuICAgICAgICBpZiAodGhpcy5pbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuY2Fyb3VzZWxTdW0gLSAxO1xuICAgICAgICAgICAgLy/ml6DnvJ3lpITnkIZcbiAgICAgICAgICAgIHRoaXMuZG9tLmZpbmQoXCIuY2Fyb3VzZWwtd3JhcHBlclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd1cmwoJyArIGNvbmZpZy5TT1VSQ0UgKyB0aGlzLmRhdGFbMF0uaW1hZ2Vfa2V5ICsgJyknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZG9tLmZpbmQoXCIuY2Fyb3VzZWwtaW1nXCIpLmNzcyhcImxlZnRcIiwgLXRoaXMud2lkdGggKiAodGhpcy5pbmRleCArIDEpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZU5hdigpO1xuICAgICAgICB0aGlzLmRvbS5maW5kKFwiLmNhcm91c2VsLWltZ1wiKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAnbGVmdCc6IC10aGlzLndpZHRoICogdGhpcy5pbmRleFxuICAgICAgICB9LCB0aGlzLmFuaW1hdGlvblRpbWUpO1xuICAgIH0sXG4gICAgLy/mmL7npLropoHmmL7npLrnmoRuYXZcbiAgICBjaGFuZ2VOYXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRlbXAgPSB0aGlzLmRvbS5maW5kKFwiLmNhcm91c2VsLW5hdlwiKTtcbiAgICAgICAgdGVtcC5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgdGVtcC5maW5kKFwibGlcIikuZXEodGhpcy5pbmRleCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSxcbiAgICAvLyDngrnlh7tjYXJvdXNlbC1uYXYgbGlcbiAgICBnb1RvOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuZG9tLmZpbmQoXCIuY2Fyb3VzZWwtaW1nXCIpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgICdsZWZ0JzogLXRoaXMud2lkdGggKiB0aGlzLmluZGV4XG4gICAgICAgIH0sIHRoaXMuYW5pbWF0aW9uVGltZSwgdGhpcy5pbml0VGltZXIoKSk7XG4gICAgfSxcbiAgICBpbml0QnRuczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdFRoaXMgPSB0aGlzO1xuICAgICAgICAvLyBwcmV2aW91cyArIG5leHQgKyDliJLov4dpbWcgKyDova7mkq1uYXZcbiAgICAgICAgdFRoaXMuZG9tLmRlbGVnYXRlKFwiLnByZXZpb3VzXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdFRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgfSkuZGVsZWdhdGUoXCIubmV4dFwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRUaGlzLm5leHQodHJ1ZSk7XG4gICAgICAgIH0pLmRlbGVnYXRlKFwiLmNhcm91c2VsLWltZ1wiLCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRUaGlzLnRpbWVyKTtcbiAgICAgICAgfSkuZGVsZWdhdGUoXCIuY2Fyb3VzZWwtaW1nXCIsIFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdFRoaXMuaW5pdFRpbWVyKCk7XG4gICAgICAgIH0pLmRlbGVnYXRlKFwiLmNhcm91c2VsLW5hdiBsaVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRUaGlzLmluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xuICAgICAgICAgICAgdFRoaXMuY2hhbmdlTmF2KCk7XG4gICAgICAgICAgICB0VGhpcy5nb1RvKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8qKlxuICog6L2u5pKt5Zu+XG4gKiBAcGFyYW0gZG9tICAgICAgICAgICAgICAg6L2u5pKt5Zu+6IqC54K5XG4gKiBAcGFyYW0gZGF0YSAgICAgICAgICAgICAg6L2u5pKt5Zu+5pWw5o2uXG4gKiBAcGFyYW0gaGFzTmF2ICAgICAgICAgICAg6L2u5pKt5Zu+5LiL6Z2i55qE54Sm54K55YiH5o2iICjpu5jorqTlrZjlnKgpXG4gKiBAcGFyYW0gaGFzUHJlTmV4dCAgICAgICAg6L2u5pKt5Zu+5LiK5LiA6aG15LiL5LiA6aG15YiH5o2iICjpu5jorqTkuI3lrZjlnKgpXG4gKiBAcGFyYW0gY2hhbmdlVGltZSAgICAgICAg6L2u5pKt5Zu+5YiH5o2i5pe26Ze06Ze06ZqUICjpu5jorqQzNTAwIG1zKVxuICogQHBhcmFtIGFuaW1hdGlvblRpbWUgICAgIOi9ruaSreWbvuWIh+aNouWKqOeUu+aXtumXtCAo6buY6K6kNTAwIG1zKVxuICovXG5cbi8qXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb20sIGRhdGEsIGhhc05hdiwgaGFzUHJlTmV4dCwgY2hhbmdlVGltZSwgYW5pbWF0aW9uVGltZSkge1xuICAgIHJldHVybiBuZXcgQ2Fyb3VzZWwoZG9tLCBkYXRhLCBoYXNOYXYsIGhhc1ByZU5leHQsIGNoYW5nZVRpbWUsIGFuaW1hdGlvblRpbWUpO1xufTsqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBDYXJvdXNlbChvcHRpb25zKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGVwL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGVwL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ3NyYy9kZXAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsZGF0YT0kZGF0YS5kYXRhLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLGhhc1ByZU5leHQ9JGRhdGEuaGFzUHJlTmV4dCxoYXNOYXY9JGRhdGEuaGFzTmF2LCRvdXQ9Jyc7JG91dCs9JzxkaXYgY2xhc3M9XCJjYXJvdXNlbC13cmFwcGVyXCI+IDx1bCBjbGFzcz1cImNhcm91c2VsLWltZ1wiPiAnO1xuJGVhY2goZGF0YSxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPGxpPiA8YSBjbGFzcz1cImJsb2NrXCIgaHJlZj1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS51cmwpO1xuJG91dCs9J1wiPiA8aW1nIHNyYz1cIic7XG4kb3V0Kz0kZXNjYXBlKCRoZWxwZXJzLiBnZXRVcmwoJHZhbHVlLmltYWdlX2tleSApKTtcbiRvdXQrPSdcIj4gPC9hPiA8L2xpPiAnO1xufSk7XG4kb3V0Kz0nIDwvdWw+ICc7XG5pZihoYXNQcmVOZXh0KXtcbiRvdXQrPScgPGRpdiBjbGFzcz1cInByZXZpb3VzLW5leHRcIj4gPHNwYW4gY2xhc3M9XCJwcmV2aW91c1wiPiA8aSBjbGFzcz1cIm1pZGRsZVwiPjwvaT4gPC9zcGFuPiA8c3BhbiBjbGFzcz1cIm5leHRcIj4gPGkgY2xhc3M9XCJtaWRkbGVcIj48L2k+IDwvc3Bhbj4gPC9kaXY+ICc7XG59XG4kb3V0Kz0nICc7XG5pZihoYXNOYXYpe1xuJG91dCs9JyA8dWwgY2xhc3M9XCJjYXJvdXNlbC1uYXZcIj4gJztcbiRlYWNoKGRhdGEsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nICc7XG5pZigkaW5kZXggPT0gMCl7XG4kb3V0Kz0nIDxsaSBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+ICc7XG59ZWxzZXtcbiRvdXQrPScgPGxpPjwvbGk+ICc7XG59XG4kb3V0Kz0nICc7XG59KTtcbiRvdXQrPScgPC91bD4gJztcbn1cbiRvdXQrPScgPC9kaXY+JztcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGVwL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwudHBsXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIENyZWF0ZWQgYnkgaHVtb3JIYW4gb24gMTYvMTEvMjIuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ+S5kOe6rycsXG4gICAgICAgIHVybDogJy9hc3NldHMvaW1nL3BhcnRuZXJzL3BhcnRuZXItbGMucG5nJ1xuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ+avj+aXpeS8mOmynCcsXG4gICAgICAgIHVybDogJy9hc3NldHMvaW1nL3BhcnRuZXJzL3BhcnRuZXItbXJ5eC5wbmcnXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAn5pGp5ouc5Y2V6L2mJyxcbiAgICAgICAgdXJsOiAnL2Fzc2V0cy9pbWcvcGFydG5lcnMvcGFydG5lci1tYmRjLnBuZydcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICfnqI7lrqInLFxuICAgICAgICB1cmw6ICcvYXNzZXRzL2ltZy9wYXJ0bmVycy9wYXJ0bmVyLXNoay5wbmcnXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnNTHnpL7kv50nLFxuICAgICAgICB1cmw6ICcvYXNzZXRzL2ltZy9wYXJ0bmVycy9wYXJ0bmVyLXNoYi5wbmcnXG4gICAgfVxuXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kZXAvY29uZmlnL3BhcnRuZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnc3JjL3RwbC9pbmRleC9hY3Rpdml0eScsJzxhIGhyZWY9XFwnL2FjdGl2aXRpZXMvOTk4XFwnIGNsYXNzPVwiYmxvY2sgdzEyMDBcIj4gPGltZyBjbGFzcz1cImFjdGl2aXR5IHcxMjAwIGF1dG9cIiBzcmM9XCJodHRwOi8vc291cmNlLnNveXlpbi5jb20vYWN0aXZpdGllcy85OTgvOTk4X2VudHJ5X2luX2luZGV4X3BhZ2UucG5nXCI+IDwvYT4gPHNwYW4gY2xhc3M9XCJjbG9zZS1hY3Rpdml0eVwiPjwvc3Bhbj4nKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90cGwvaW5kZXgvYWN0aXZpdHkudHBsXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7cmVxdWlyZSgnLi9mbG9vclN0eWxlMS50cGwnKTtyZXF1aXJlKCcuL2Zsb29yU3R5bGUyLnRwbCcpO3JlcXVpcmUoJy4vZmxvb3JTdHlsZTMudHBsJyk7cmVxdWlyZSgnLi9mbG9vclN0eWxlNC50cGwnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdzcmMvdHBsL2luZGV4L2Zsb29yJyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCxmbG9vcnM9JGRhdGEuZmxvb3JzLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLGluY2x1ZGU9ZnVuY3Rpb24oZmlsZW5hbWUsZGF0YSl7ZGF0YT1kYXRhfHwkZGF0YTt2YXIgdGV4dD0kdXRpbHMuJGluY2x1ZGUoZmlsZW5hbWUsZGF0YSwkZmlsZW5hbWUpOyRvdXQrPXRleHQ7cmV0dXJuICRvdXQ7fSwkb3V0PScnOyRlYWNoKGZsb29ycyxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgPGRpdiBjbGFzcz1cImZsb29yIG10NDBcIj4gPGRpdiBjbGFzcz1cImZsb29yLXRpdGxlIG1iMTAgZm9udDE4XCI+ICc7XG4kb3V0Kz0kZXNjYXBlKCRpbmRleCArIDEpO1xuJG91dCs9J0YgJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLnRpdGxlKTtcbiRvdXQrPScgPC9kaXY+ICc7XG5pZigkdmFsdWUuc3R5bGUgPT0gMSl7XG4kb3V0Kz0nICc7XG5pbmNsdWRlKCcuL2Zsb29yU3R5bGUxJywkdmFsdWUpO1xuJG91dCs9JyAgJztcbn1lbHNlIGlmKCR2YWx1ZS5zdHlsZSA9PSAyKXtcbiRvdXQrPScgJztcbmluY2x1ZGUoJy4vZmxvb3JTdHlsZTInLCR2YWx1ZSk7XG4kb3V0Kz0nICAnO1xufWVsc2UgaWYoJHZhbHVlLnN0eWxlID09IDMpe1xuJG91dCs9JyAgJztcbmluY2x1ZGUoJy4vZmxvb3JTdHlsZTMnLCR2YWx1ZSk7XG4kb3V0Kz0nICc7XG59ZWxzZXtcbiRvdXQrPScgICc7XG5pbmNsdWRlKCcuL2Zsb29yU3R5bGU0JywkdmFsdWUpO1xuJG91dCs9JyAnO1xufVxuJG91dCs9JyA8L2Rpdj4gJztcbn0pO1xucmV0dXJuIG5ldyBTdHJpbmcoJG91dCk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90cGwvaW5kZXgvZmxvb3IudHBsXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnc3JjL3RwbC9pbmRleC9mbG9vclN0eWxlMScsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsaXRlbXM9JGRhdGEuaXRlbXMsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskb3V0Kz0nPHVsIGNsYXNzPVwiZmxvb3ItY29udGVudCBjbGVhckZpeFwiPiAnO1xuJGVhY2goaXRlbXMsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nICc7XG5pZigkaW5kZXggPT0gMCl7XG4kb3V0Kz0nIDxsaSBjbGFzcz1cImZsb2F0TGVmdCBib3gtc2hhZG93XCI+IDxhIGhyZWY9XCInO1xuJG91dCs9JGVzY2FwZSgkdmFsdWUuZGF0YVsnMCddLnVybCk7XG4kb3V0Kz0nXCI+IDxpbWcgc3JjPVwiJztcbiRvdXQrPSRlc2NhcGUoJGhlbHBlcnMuIGdldFVybCgkdmFsdWUuZGF0YVsnMCddLmltYWdlX2tleSApKTtcbiRvdXQrPSdcIiAvPiA8L2E+IDwvbGk+ICc7XG59ZWxzZXtcbiRvdXQrPScgPGxpIGNsYXNzPVwiZmxvYXRMZWZ0IGJveC1zaGFkb3cgYm9yZGVyTFwiPiA8YSBocmVmPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLmRhdGFbJzAnXS51cmwpO1xuJG91dCs9J1wiPiA8aW1nIHNyYz1cIic7XG4kb3V0Kz0kZXNjYXBlKCRoZWxwZXJzLiBnZXRVcmwoJHZhbHVlLmRhdGFbJzAnXS5pbWFnZV9rZXkgKSk7XG4kb3V0Kz0nXCIgLz4gPC9hPiA8L2xpPiAnO1xufVxuJG91dCs9JyAnO1xufSk7XG4kb3V0Kz0nIDwvdWw+JztcbnJldHVybiBuZXcgU3RyaW5nKCRvdXQpO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdHBsL2luZGV4L2Zsb29yU3R5bGUxLnRwbFxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ3NyYy90cGwvaW5kZXgvZmxvb3JTdHlsZTInLGZ1bmN0aW9uKCRkYXRhLCRmaWxlbmFtZVxuLyoqLykge1xuJ3VzZSBzdHJpY3QnO3ZhciAkdXRpbHM9dGhpcywkaGVscGVycz0kdXRpbHMuJGhlbHBlcnMsJGVhY2g9JHV0aWxzLiRlYWNoLGl0ZW1zPSRkYXRhLml0ZW1zLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkZXNjYXBlPSR1dGlscy4kZXNjYXBlLGlkPSRkYXRhLmlkLCRvdXQ9Jyc7JG91dCs9Jzx1bCBjbGFzcz1cImZsb29yLWNvbnRlbnQgY2xlYXJGaXhcIj4gJztcbiRlYWNoKGl0ZW1zLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyAnO1xuaWYoJGluZGV4ID09PSAwKXtcbiRvdXQrPScgJztcbmlmKCR2YWx1ZS50eXBlID09ICdIT1JJWk9OVEFMX0NBUk9VU0VMJyl7XG4kb3V0Kz0nIDxsaSBjbGFzcz1cImZsb2F0TGVmdCB3NDgwIGl0ZW0gYm94LXNoYWRvd1wiPiA8ZGl2IGNsYXNzPVwiZmxvb3ItY2Fyb3VzZWwtZmxhZyBjYXJvdXNlbCc7XG4kb3V0Kz0kZXNjYXBlKGlkKTtcbiRvdXQrPSdcIiBkYXRhLWNhcm91c2VsLWNsYXNzPVwiY2Fyb3VzZWwnO1xuJG91dCs9JGVzY2FwZShpZCk7XG4kb3V0Kz0nXCI+PC9kaXY+IDwvbGk+ICc7XG59ZWxzZXtcbiRvdXQrPScgPGxpIGNsYXNzPVwiZmxvYXRMZWZ0IGJveC1zaGFkb3dcIj4gPGEgaHJlZj1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5kYXRhWycwJ10udXJsKTtcbiRvdXQrPSdcIj4gPGltZyBzcmM9XCInO1xuJG91dCs9JGVzY2FwZSgkaGVscGVycy4gZ2V0VXJsKCR2YWx1ZS5kYXRhWycwJ10uaW1hZ2Vfa2V5ICkpO1xuJG91dCs9J1wiIC8+IDwvYT4gPC9saT4gJztcbn1cbiRvdXQrPScgJztcbn1lbHNle1xuJG91dCs9JyAnO1xuaWYoJHZhbHVlLnR5cGUgPT0gJ0hPUklaT05UQUxfQ0FST1VTRUwnKXtcbiRvdXQrPScgPGxpIGNsYXNzPVwiZmxvYXRMZWZ0IGJveC1zaGFkb3cgdzQ4MCBib3JkZXJMIGl0ZW1cIj4gPGRpdiBjbGFzcz1cImZsb29yLWNhcm91c2VsLWZsYWcgY2Fyb3VzZWwnO1xuJG91dCs9JGVzY2FwZShpZCk7XG4kb3V0Kz0nXCIgZGF0YS1jYXJvdXNlbC1jbGFzcz1cImNhcm91c2VsJztcbiRvdXQrPSRlc2NhcGUoaWQpO1xuJG91dCs9J1wiPjwvZGl2PiA8L2xpPiAnO1xufWVsc2V7XG4kb3V0Kz0nIDxsaSBjbGFzcz1cImZsb2F0TGVmdCBib3gtc2hhZG93IGJvcmRlckxcIj4gPGEgaHJlZj1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5kYXRhWycwJ10udXJsKTtcbiRvdXQrPSdcIj4gPGltZyBzcmM9XCInO1xuJG91dCs9JGVzY2FwZSgkaGVscGVycy4gZ2V0VXJsKCR2YWx1ZS5kYXRhWycwJ10uaW1hZ2Vfa2V5ICkpO1xuJG91dCs9J1wiIC8+IDwvYT4gPC9saT4gJztcbn1cbiRvdXQrPScgJztcbn1cbiRvdXQrPScgJztcbn0pO1xuJG91dCs9JyA8L3VsPic7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RwbC9pbmRleC9mbG9vclN0eWxlMi50cGxcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdzcmMvdHBsL2luZGV4L2Zsb29yU3R5bGUzJyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsaXRlbXM9JGRhdGEuaXRlbXMsJGVhY2g9JHV0aWxzLiRlYWNoLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCwkb3V0PScnOyRvdXQrPSc8ZGl2IGNsYXNzPVwiZmxvb3ItY29udGVudCBmbG9vci1zdHlsZTMgY2xlYXJGaXhcIj4gPGRpdiBjbGFzcz1cImZsb2F0TGVmdCBib3gtc2hhZG93XCI+IDxhIGhyZWY9XCInO1xuJG91dCs9JGVzY2FwZShpdGVtc1snMCddLmRhdGFbJzAnXS51cmwpO1xuJG91dCs9J1wiPiA8aW1nIHN0eWxlPVwid2lkdGg6IDI0MHB4OyBoZWlnaHQ6IDQ4MnB4O1wiIHNyYz1cIic7XG4kb3V0Kz0kZXNjYXBlKCRoZWxwZXJzLiBnZXRVcmwoaXRlbXNbJzAnXS5kYXRhWycwJ10uaW1hZ2Vfa2V5ICkpO1xuJG91dCs9J1wiIC8+IDwvYT4gPC9kaXY+IDx1bCBjbGFzcz1cImZsb2F0TGVmdFwiIHN0eWxlPVwid2lkdGg6IDk2MHB4O1wiPiAnO1xuJGVhY2goaXRlbXMsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nICc7XG5pZigkaW5kZXggPiAwICYmICRpbmRleCA8PSA0KXtcbiRvdXQrPScgPGxpIGNsYXNzPVwiZmxvYXRMZWZ0IGJvcmRlckwgYm9yZGVyLWJveCBib3JkZXJCIGJveC1zaGFkb3dcIj4gPGEgaHJlZj1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5kYXRhWycwJ10udXJsKTtcbiRvdXQrPSdcIj4gPGltZyBzcmM9XCInO1xuJG91dCs9JGVzY2FwZSgkaGVscGVycy4gZ2V0VXJsKCR2YWx1ZS5kYXRhWycwJ10uaW1hZ2Vfa2V5ICkpO1xuJG91dCs9J1wiIC8+IDwvYT4gPC9saT4gJztcbn1lbHNlIGlmKCRpbmRleCA+IDAgJiYgJGluZGV4ID4gNCl7XG4kb3V0Kz0nIDxsaSBjbGFzcz1cImZsb2F0TGVmdCBib3JkZXJMIGJvcmRlci1ib3ggYm94LXNoYWRvd1wiPiA8YSBocmVmPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLmRhdGFbJzAnXS51cmwpO1xuJG91dCs9J1wiPiA8aW1nIHNyYz1cIic7XG4kb3V0Kz0kZXNjYXBlKCRoZWxwZXJzLiBnZXRVcmwoJHZhbHVlLmRhdGFbJzAnXS5pbWFnZV9rZXkgKSk7XG4kb3V0Kz0nXCIgLz4gPC9hPiA8L2xpPiAnO1xufVxuJG91dCs9JyAnO1xufSk7XG4kb3V0Kz0nIDwvdWw+IDwvZGl2Pic7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RwbC9pbmRleC9mbG9vclN0eWxlMy50cGxcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdzcmMvdHBsL2luZGV4L2Zsb29yU3R5bGU0JyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsaXRlbXM9JGRhdGEuaXRlbXMsJGVhY2g9JHV0aWxzLiRlYWNoLCR2YWx1ZT0kZGF0YS4kdmFsdWUsJGluZGV4PSRkYXRhLiRpbmRleCxpZD0kZGF0YS5pZCwkb3V0PScnOyRvdXQrPSc8ZGl2IGNsYXNzPVwiZmxvb3ItY29udGVudCBmbG9vci1zdHlsZTMgY2xlYXJGaXhcIj4gPGRpdiBjbGFzcz1cImZsb2F0TGVmdCBib3gtc2hhZG93XCI+IDxhIGhyZWY9XCInO1xuJG91dCs9JGVzY2FwZShpdGVtc1snMCddLmRhdGFbJzAnXS51cmwpO1xuJG91dCs9J1wiPiA8aW1nIHN0eWxlPVwid2lkdGg6IDI0MHB4OyBoZWlnaHQ6IDQ4MnB4O1wiIHNyYz1cIic7XG4kb3V0Kz0kZXNjYXBlKCRoZWxwZXJzLiBnZXRVcmwoaXRlbXNbJzAnXS5kYXRhWycwJ10uaW1hZ2Vfa2V5ICkpO1xuJG91dCs9J1wiIC8+IDwvYT4gPC9kaXY+IDx1bCBjbGFzcz1cImZsb2F0TGVmdCBpdGVtXCIgc3R5bGU9XCJ3aWR0aDogOTYwcHg7XCI+ICc7XG4kZWFjaChpdGVtcyxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgJztcbmlmKCRpbmRleCA+IDAgJiYgJGluZGV4IDw9IDMpe1xuJG91dCs9JyAnO1xuaWYoJGluZGV4ID09IDEpe1xuJG91dCs9JyA8bGkgY2xhc3M9XCJmbG9hdExlZnQgYm9yZGVyTCBib3JkZXItYm94IGJveC1zaGFkb3dcIiBzdHlsZT1cIndpZHRoOiA0ODBweDsgaGVpZ2h0OiAyNDBweDtcIj4gPGRpdiBjbGFzcz1cImZsb29yLWNhcm91c2VsLWZsYWcgY2Fyb3VzZWwnO1xuJG91dCs9JGVzY2FwZShpZCk7XG4kb3V0Kz0nXCIgZGF0YS1jYXJvdXNlbC1jbGFzcz1cImNhcm91c2VsJztcbiRvdXQrPSRlc2NhcGUoaWQpO1xuJG91dCs9J1wiIHN0eWxlPVwid2lkdGg6IDQ3OXB4OyBoZWlnaHQ6IDI0MHB4O1wiPjwvZGl2PiA8L2xpPiAnO1xufWVsc2V7XG4kb3V0Kz0nIDxsaSBjbGFzcz1cImZsb2F0TGVmdCBib3JkZXJMIGJvcmRlci1ib3ggYm94LXNoYWRvd1wiPiA8YSBocmVmPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLmRhdGFbJzAnXS51cmwpO1xuJG91dCs9J1wiPiA8aW1nIHNyYz1cIic7XG4kb3V0Kz0kZXNjYXBlKCRoZWxwZXJzLiBnZXRVcmwoJHZhbHVlLmRhdGFbJzAnXS5pbWFnZV9rZXkgKSk7XG4kb3V0Kz0nXCIgLz4gPC9hPiA8L2xpPiAnO1xufVxuJG91dCs9JyAnO1xufWVsc2UgaWYoJGluZGV4ID4gMCAmJiAkaW5kZXggPiAzKXtcbiRvdXQrPScgPGxpIGNsYXNzPVwiZmxvYXRMZWZ0IGJvcmRlckwgYm9yZGVyLWJveCBib3JkZXJUIGJveC1zaGFkb3dcIj4gPGEgaHJlZj1cIic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZS5kYXRhWycwJ10udXJsKTtcbiRvdXQrPSdcIj4gPGltZyBzcmM9XCInO1xuJG91dCs9JGVzY2FwZSgkaGVscGVycy4gZ2V0VXJsKCR2YWx1ZS5kYXRhWycwJ10uaW1hZ2Vfa2V5ICkpO1xuJG91dCs9J1wiIC8+IDwvYT4gPC9saT4gJztcbn1cbiRvdXQrPScgJztcbn0pO1xuJG91dCs9JyA8L3VsPiA8L2Rpdj4nO1xucmV0dXJuIG5ldyBTdHJpbmcoJG91dCk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90cGwvaW5kZXgvZmxvb3JTdHlsZTQudHBsXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgdGVtcGxhdGU9cmVxdWlyZSgndG1vZGpzLWxvYWRlci9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cz10ZW1wbGF0ZSgnc3JjL3RwbC9pbmRleC9wYXJ0bmVycycsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskZWFjaCgkZGF0YSxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgJztcbmlmKCRpbmRleCA9PSAwKXtcbiRvdXQrPScgPGxpIGNsYXNzPVwiZmxvYXRMZWZ0IHdoaXRlLWJnXCI+IDxpbWcgc3JjPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLnVybCk7XG4kb3V0Kz0nXCIvPiA8L2xpPiAnO1xufWVsc2V7XG4kb3V0Kz0nIDxsaSBjbGFzcz1cImZsb2F0TGVmdCB3aGl0ZS1iZyBtbDEwXCI+IDxpbWcgc3JjPVwiJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlLnVybCk7XG4kb3V0Kz0nXCIvPiA8L2xpPiAnO1xufVxuJG91dCs9JyAnO1xufSk7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RwbC9pbmRleC9wYXJ0bmVycy50cGxcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=