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
//点击效果
// $('.citys-item').click(function(){
//     $('.citys-item').css('color','#ff2d79!important');
//     $('.citys-item').css('border','1px solid #ff2d79!important');

// })
// $('citys-item').click(function(){
//     $('.citys-item').css('border-color','0');
// })


//获取goodsID
var goodsId =window.location.href.split('=')[1];
$.get({
    url:'../php/getGoodsInfo.php',
    data:{
        goodsId:goodsId,
    },
    dataType:'json',
    success:function(data){
        console.log(data)
        let htmlStr ="";
        // data.forEach(function(item,index,arr){
            htmlStr +=
            `
            
            <div class="cont-l-l">
            <img src="${data.goodsImg}" alt="">
        </div>
        <div class="cont-l-r">
            <span class="cont-tit">${data.goodsName}</span>
            <div class="cont-address">
                <span>${data.goodsDesc}</span>
                <p>${data.beiyong1}</p>
            </div>
            <div class="cont-citys">
                <p>城市</p>
                <div class="citys-list">
                    <div class="citys-item cursor">${data.beiyong2}</div>
                    <div class="citys-item2 citys-item cursor active">${data.beiyong3}</div>
                </div>
            </div>
            <div class="notice-time">
                <img src="../imgs/Details10.jpg" alt="">场次时间均为演出当地时间
            </div>
            <div class="cont-session">
                <div class="session-l">场次</div>
                <div class="session-r">
                    <div class="session-r-list cursor active">${data.beiyong4}</div>
                    <div class="session-r-list cursor">${data.beiyong5}</div>
                </div>
            </div>
            <div class="cont-session cont-mar">
                <div class="session-l">票档</div>
                <div class="session-r">
                    <div class="session-r-lists cursor active">${data.beiyong6}</div>
                    <div class="session-r-lists cursor">${data.beiyong10}</div>
                    <div class="session-r-lists cursor">${data.beiyong8}</div>
                    <div class="session-r-lists cursor">${data.beiyong9}</div>
                    <div class="session-r-lists cursor">${data.beiyong7}</div>
                </div>
                <div class="cont-btn">选座购买</div>
            </div>
        </div>
        `
        $('.cont-l').html(htmlStr);
        // })
    }
})