$(function () {
    $('.heart').on('click',function () {
        $(this).css('background','url("../img/xinRedh.png") no-repeat 55px 30px');
        $(this).find('p')[0].innerHTML = '喜欢 16';
    });
    $('.share').on('click',function () {
        $(this).css('background','url("../img/shareh_yj1.png") no-repeat 55px 30px');
        $('.bshare-custom').toggle();
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