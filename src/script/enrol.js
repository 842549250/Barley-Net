$('.regtxt').blur(function checkUser(cb){
    $.ajax({
        type:'get',
        url:'../php/checkUser.php',
        data:{
            username:$('.regtxt').val()
        },
        success:function(data){
            if(data='0'){
                alert('该用户名不能为空');
                return;
            }
            if(data='1'){
                alert('该用户可以用');
            }
        }
    })
})
$('.btn').click(function reg(){
    $.ajax({
        type:'post',
        url:'../php/regSave.php',
        data:{
            username:$('.regtxt').val(),
            userpass:$('.regpass').val()
        },
        success:function(data){
            if(data==1){
               alert('注册成功');
            }else if(data==0){
                alert("注册失败，请重新注册");
            }
        }
    })
})