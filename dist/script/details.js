"use strict";

//下载二维码
$('.header-dow').mouseenter(function () {
  $('.user-dow').css('display', 'block');
});
$('.header-dow').mouseleave(function () {
  $('.user-dow').css('display', 'none');
}); //登录

$('.header-login').mouseenter(function () {
  $('.user-list').css('display', 'block');
});
$('.header-login').mouseleave(function () {
  $('.user-list').css('display', 'none');
}); //点击搜索

$('.search-for').click(function () {
  $('.search-for').css('border-color', '#FF1268');
});
$('html').click(function () {
  $('.search-for').css('border-color', '0');
}); //侧边栏APP下载

$('.foot-dow').mouseenter(function () {
  $('.item-dow').css('display', 'block');
});
$('.foot-dow').mouseleave(function () {
  $('.item-dow').css('display', 'none');
}); //点击效果
// $('.citys-item').click(function(){
//     $('.citys-item').css('color','#ff2d79!important');
//     $('.citys-item').css('border','1px solid #ff2d79!important');
// })
// $('citys-item').click(function(){
//     $('.citys-item').css('border-color','0');
// })
//获取goodsID

var goodsId = window.location.href.split('=')[1];
$.get({
  url: '../php/getGoodsInfo.php',
  data: {
    goodsId: goodsId
  },
  dataType: 'json',
  success: function success(data) {
    console.log(data);
    var htmlStr = ""; // data.forEach(function(item,index,arr){

    htmlStr += "\n            \n            <div class=\"cont-l-l\">\n            <img src=\"".concat(data.goodsImg, "\" alt=\"\">\n        </div>\n        <div class=\"cont-l-r\">\n            <span class=\"cont-tit\">").concat(data.goodsName, "</span>\n            <div class=\"cont-address\">\n                <span>").concat(data.goodsDesc, "</span>\n                <p>").concat(data.beiyong1, "</p>\n            </div>\n            <div class=\"cont-citys\">\n                <p>\u57CE\u5E02</p>\n                <div class=\"citys-list\">\n                    <div class=\"citys-item cursor\">").concat(data.beiyong2, "</div>\n                    <div class=\"citys-item2 citys-item cursor active\">").concat(data.beiyong3, "</div>\n                </div>\n            </div>\n            <div class=\"notice-time\">\n                <img src=\"../imgs/Details10.jpg\" alt=\"\">\u573A\u6B21\u65F6\u95F4\u5747\u4E3A\u6F14\u51FA\u5F53\u5730\u65F6\u95F4\n            </div>\n            <div class=\"cont-session\">\n                <div class=\"session-l\">\u573A\u6B21</div>\n                <div class=\"session-r\">\n                    <div class=\"session-r-list cursor active\">").concat(data.beiyong4, "</div>\n                    <div class=\"session-r-list cursor\">").concat(data.beiyong5, "</div>\n                </div>\n            </div>\n            <div class=\"cont-session cont-mar\">\n                <div class=\"session-l\">\u7968\u6863</div>\n                <div class=\"session-r\">\n                    <div class=\"session-r-lists cursor active\">").concat(data.beiyong6, "</div>\n                    <div class=\"session-r-lists cursor\">").concat(data.beiyong10, "</div>\n                    <div class=\"session-r-lists cursor\">").concat(data.beiyong8, "</div>\n                    <div class=\"session-r-lists cursor\">").concat(data.beiyong9, "</div>\n                    <div class=\"session-r-lists cursor\">").concat(data.beiyong7, "</div>\n                </div>\n                <div class=\"cont-btn\">\u9009\u5EA7\u8D2D\u4E70</div>\n            </div>\n        </div>\n        ");
    $('.cont-l').html(htmlStr); // })
  }
});