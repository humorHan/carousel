/**
 * Created by humorHan on 16/11/15.
 */
require('newIndex.scss');
var ajax = require('util/ajax.js');
var carousel = require("components/carousel/carousel.js");
var fe = require("config/config.js");
var partners = require("config/partners.js");
var activityTpl = require("index/activity.tpl");
var floorTpl = require("index/floor.tpl");
var partnerTpl = require("index/partners.tpl");
require("template-helper.js");

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