/**
 * Created by humorHan on 16/10/31.
 */
require("common/base.less");
var testCarousel = require("component/carousel/carousel.js");



testCarousel({
    dom: 'dom1',
    data: data.banners,
    hasPreNext: true
});
