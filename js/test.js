/**
 * Created by humorHan on 16/10/31.
 */
require("common/base.less");
var testCarousel = require("component/carousel/carousel.js");

var data = JSON.stringify('{"banners":[{"id":1,"image_key":"banner_tailidingzhi.png","url":"/product?id=23","title":"海报"},{"id":2,"image_key":"banner_lipinhedingzhi.png","url":"/product?id=62","title":"名片"}]}');
testCarousel({
    dom: 'dom1',
    data: data.banners,  //此处为ajax数据...
    hasPreNext: true
});
