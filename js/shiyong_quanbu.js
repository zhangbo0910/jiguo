$(function () {
    $.ajax({
        url: '../json/sy.json',
        success: function (data) {
            console.log(data);
            var interText = doT.template($('#sp_list').text());
            $("#list").html(interText(data));
            $(".sp_list:gt(15)").hide();
            if($('.xsgd').length ===1){
                console.log($('.xsgd'));
                $('.xsgd').show();
                $('.gengduo').toggle();
                var num = 16;
                $('.xsgd').on('click',function () {
                    num+=8;
                    $(".sp_list:lt("+num+")").show();
                    if(num>=data.sy_sj.length){
                        $('.xsgd').hide();
                        $('.gengduo').show();
                    }
                })
            }
            $('.gengduo').toggle();
            $('footer').show();
        }
    });
    $(".backTop").hide();
    /*返回顶部*/
    $(window).scroll(function (event) {
        var tops=$(window).scrollTop();
        //console.log(tops);
        if (tops>180){
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