/**
 * Created by humorHan on 16/10/31.
 */
require("./carousel.less");
var $ = require("jquery-2.2.4.js");
var carouselTpl = require('./tpl/carousel.tpl');

function Carousel(dom, carouselSum, hasCarouselNav, style, changeTime, animationTime) {
    this.dom = $("." + dom);
    this.carouselSum = carouselSum;
    this.hasOwnProperty = hasCarouselNav;
    this.style = style;
    this.changeTime = changeTime || 3000;
    this.animationTime = animationTime || 500;
    this.index = 0; //显示图片的索引
    this.timer = null; //定时器
    this.initDom();
    this.initBtns();
}

Carousel.prototype = {
    //不参与逻辑点
    initStatic: function () {
        this.dom.find(".carousel-img").css({
            'width': this.carouselSum * this.style.width
        });
    },
    initDom: function () {
        this.dom.html(carouselTpl([1, 2, 3]));
        this.dom.find(".carousel-wrapper").css(this.style);
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
                background: 'url(/test/bundle/img/' + (this.carouselSum) + '.jpeg)'
            });
            this.dom.find(".carousel-img").css("left", this.style.width);
        }
        this.changeNav();
        this.dom.find(".carousel-img").stop().animate({
            'left': -this.style.width * this.index
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
                background: 'url(/test/bundle/img/' + 1 + '.jpeg)'
            });
            this.dom.find(".carousel-img").css("left", -this.style.width * (this.index + 1));
        }
        this.changeNav();
        this.dom.find(".carousel-img").stop().animate({
            'left': -this.style.width * this.index
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
            'left': -this.style.width * this.index
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
 * @param carouselSum       轮播图有几张
 * @param hasCarouselNav    轮播图是否存在下面的---焦点切换
 * @param style             轮播图宽高 (obj)
 * @param changeTime        轮播图切换时间间隔 (默认3000 ms)
 * @param animationTime     轮播图切换动画时间 (默认300 ms)
 */

//TODO 传参data 赋值图片地址到tpl内li上 无缝处理取值赋值
//TODO 甚至传参data后 轮播图的张数已经确定 所以传data替代张数参数也可以
module.exports = function (dom, carouselSum, hasCarouselNav, style, changeTime, animationTime) {
    return new Carousel(dom, carouselSum, hasCarouselNav, style, changeTime, animationTime);
};