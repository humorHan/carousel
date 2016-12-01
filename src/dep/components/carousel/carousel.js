/**
 * Created by humorHan on 16/10/31.
 */
require("./carousel.scss");
require('template-helper.js');
var config = require("config/config.js");
var carouselTpl = require('./carousel.tpl');

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