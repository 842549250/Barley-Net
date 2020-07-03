$('.btn3').click(function(){
    if($(".login2txt").val()==""){
        alert("用户名不能为空");
    }
    if($("login2-text").val()==""){
        alert("密码不能为空");
    }
    $.ajax({
        type:'post',
        url:'../php/login.php',
        data:{
            "username": $(".login2txt").val(),
            "userpass": $(".login2-text").val()
        },
        success:function(data){
            if (data == 1){
                let count = 1;
                let myTimer = setInterval(()=>{
                    count--;
                    if(count==0){
                        window.clearInterval(myTimer);
                        location.href = './index.html'
                    }
                    alert('登录成功,三秒后跳转');
                    // $('#msg').css("color","green").html(`登录成功，${count}秒后，自动跳转到<a href='./index.html'>首页</a>`)
                },1000);
            }else if(data==0){
                alert("登录失败，用户名或者密码不正确");
            }else if(data == -1){
                alert("该用户名未注册");
            }
        }
    })
    // setCookie({
    //     key:'username',
    //     val:$('.login2txt').val(),
    //     days:7
    // })
})