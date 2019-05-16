


$(function(){

/**表单验证是否密码相同**/
function check(form){
    var p1 = form.psw1;
    var p2 = form.psw2;
    if (p1.value != p2.value) {
        p2.oninvalid();
        return false;
    }
    return true;
}

window.onload = function() {
    var p2 = document.forms["my_f1"].psw2;
    p2.oninvalid = function() {
        this.setCustomValidity("密码不一致，请重新输入");
    }
    p2.oninput = function() {
        this.setCustomValidity("");
    }

};

    /**获取验证码 倒计时**/
    var wait = 60;
    var timer=null;
    function yzm(){
        if(wait==0){
            $(".getCode").text("获取验证码");
            wait = 60;
        }else{
            wait--;
            if(wait<=0){
                $(".getCode").text("获取验证码");
                clearInterval(timer);
                return;
            }
            $(".getCode").text(wait+"秒后重新发送");

        }
    }
    $(".getCode").click(function(){
        if (timer==null) {
            timer = setInterval(function () {
                yzm();
            }, 1000);
        }
    });
    var arr=["img/imgCode.jpg","img/yanzheng.png","img/validatecode.png","img/bagc1.png","img/bagc2.png"];
    $("#sky2 img").click(function () {
        var num=Math.floor(Math.random()*arr.length);
    $("#sky2 img").attr("src",arr[num]);
    });
    $(".backTop").hide();
    /*返回顶部*/
    $(window).scroll(function (event) {
        var tops=$(window).scrollTop();
        //console.log(tops);
        if (tops>250){
            $(".backTop").fadeIn(500);
            $(".backTop").click(function(){
                $("html,body").animate({"scrollTop":"0"},500,function () {
                    $("html,body").stop(true);
                });
            });
        }else {
            $(".backTop").fadeOut(500);
        }
    });
});











