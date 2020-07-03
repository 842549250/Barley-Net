var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    effect : 'fade',
    fadeEffect: {
        crossFade: true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        },
  })
 

//下载二维码
$('.header-dow').mouseenter(function(){
    $('.user-dow').css('display','block');
})
$('.header-dow').mouseleave(function(){
    $('.user-dow').css('display','none');
})
//登录
$('.header-login').mouseenter(function(){
    $('.user-list').css('display','block');
})
$('.header-login').mouseleave(function(){
    $('.user-list').css('display','none');
})
//点击搜索
$('.search-for').click(function(){
    $('.search-for').css('border-color','#FF1268');
})
$('html').click(function(){
    $('.search-for').css('border-color','0');
})
//侧边栏APP下载
$('.foot-dow').mouseenter(function(){
    $('.item-dow').css('display','block');
})
$('.foot-dow').mouseleave(function(){
    $('.item-dow').css('display','none');
})

//获取typeId
var typeId =window.location.href.split('=')[1];
$.get({
    url:'../php/getGoodsList.php',
    data:{
        typeId:typeId,
    },
    dataType:'json',
    success:function(data){
        console.log(data)
        let htmlStr ="";
        data.forEach(function(item,index,arr){
            htmlStr +=
            `
            <a class="box-left" href="./details.html?goodsId=${item['goodsId']}" >
                <img class="box-left_bg" src="${item['goodsImg']}" alt="">
                <div class="box-left_info">
                    <div class="title">${item['goodsName']}</div>
                    <div class="details">
                        ${item['goodsPrice']}
                        <span>起</span>
                    </div>
                </div>
            </a>
            `
            $('.content .box').html(htmlStr);
        })
    }
})