/**
 * Created by humorHan on 16/10/31.
 */
require("common/base.less");
var testCarousel = require("component/carousel/carousel.js");

testCarousel("dom1", 3, true, {
    "width": 100,
    "height": 80
}, 30000, 500);

testCarousel("dom2", 3, true, {
    "width": 100,
    "height": 80
}, 2000, 500);