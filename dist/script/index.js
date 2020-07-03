"use strict";

var mySwiper = new Swiper('.swiper-container', {
  // direction: 'vertical', // 垂直切换选项
  loop: true,
  // 循环模式选项
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false
  }
}); //下载二维码

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
}); //获取typeId

var typeId = window.location.href.split('=')[1];
$.get({
  url: '../php/getGoodsList.php',
  data: {
    typeId: typeId
  },
  dataType: 'json',
  success: function success(data) {
    console.log(data);
    var htmlStr = "";
    data.forEach(function (item, index, arr) {
      htmlStr += "\n            <a class=\"box-left\" href=\"./details.html?goodsId=".concat(item['goodsId'], "\" >\n                <img class=\"box-left_bg\" src=\"").concat(item['goodsImg'], "\" alt=\"\">\n                <div class=\"box-left_info\">\n                    <div class=\"title\">").concat(item['goodsName'], "</div>\n                    <div class=\"details\">\n                        ").concat(item['goodsPrice'], "\n                        <span>\u8D77</span>\n                    </div>\n                </div>\n            </a>\n            ");
      $('.content .box').html(htmlStr);
    });
  }
});