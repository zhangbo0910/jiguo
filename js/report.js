
$(function () {
    $("#loading").click(function (e) {
    console.log(11);
    e || window.event;
    e.preventDefault();
        $("#loading").innerText='正在加载中';
        $("#loading").removeClass("more-btn");
        $("#loading").addClass("more-btn-css");
    $.ajax({
        url: 'report.json',
        success: function (data) {
            console.log(data);
            var interText = doT.template($('#sp_list').text());
            $(".playMore").html(interText(data));
        }
    })
})
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