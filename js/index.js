$(function () {
var li_w=248;
var isN=true;
var timer;
    function fn(){
        timer=setInterval(function () {
            if (isN) {
                isN=false;
                //console.log(li_w);
                $(".content-ul").animate({
                    "marginLeft": -li_w * 4
                }, 1000, function () {
                    $(".content-ul li").slice(0, 4).appendTo($(".content-ul"));
                    $(".content-ul").css("marginLeft", "0");
                    isN = true;
                })
            }
        },3000)
        }
    fn();
$(".slideshow-right").on("click",function () {
    if (isN) {
        isN=false;
        clearInterval(timer);
        console.log(li_w);
        $(".content-ul").animate({
            "marginLeft": -li_w * 4
        }, 1000, function () {
            $(".content-ul li").slice(0, 4).appendTo($(".content-ul"));
            $(".content-ul").css("marginLeft", "0");
            isN = true;
            fn();
        })
    }
});

    $(".slideshow-left").on("click",function () {
        if (isN) {
            isN=false;
            clearInterval(timer);
            $(".content-ul").css("marginLeft",-li_w*4);
            $(".content-ul li").slice(-4).prependTo( $(".content-ul"));
            $(".content-ul").animate({
                "marginLeft":"0"
            },1000,function () {
                isN=true;
                fn();
            })
        }
    });
/*报告精选*/
    $.ajax({
        url:"./json/index.json",
        success:function(a) {
            console.log(a);
            var interText = doT.template($("#listmpl").text());
            $("#list").html(interText(a));
        },
        error:function(err){
        throw err;
    }
});
    /*导购精选*/
    $.ajax({
        url:"./json/index.json",
        success:function(a) {
            console.log(a);
            var interText = doT.template($("#shopsmpl").text());
            $("#shops").html(interText(a));
        },
        error:function(err){
            throw err;
        }
    });
    /*发现酷玩*/
    $.ajax({
        url:"./json/index.json",
        success:function(a) {
            console.log(a);
            var interText = doT.template($("#kuwan-ulmpl").text());
            $("#kuwan-ul ").html(interText(a));
        },
        error:function(err){
            throw err;
        }
    });
    /*加载更多*/
    $(".loading-box a").click(function () {
        var str="<script id=\"kuwan-ulmpls\" type=\"text/x-dot-template\">\n" +
            "    {{~it.arr[3]:value:index}}\n" +
            "    <li>\n" +
            "        <a href=\"./guid/daogou_txt.html\">\n" +
            "            <img src=\"{{=value.img}}\">\n" +
            "            <div class=\"info\">\n" +
            "                <p class=\"names\">{{=value.tit}}<span>{{=value.text}}</span></p>\n" +
            "                <div class=\"fix\">\n" +
            "                    <span class=\"price\">{{=value.price}}</span>\n" +
            "                    <div class=\"right\">\n" +
            "                        <span class=\"zan\">3</span>\n" +
            "                        <span class=\"look\">3</span>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </a>\n" +
            "    </li>\n" +
            "    {{~}}\n" +
            "</script>";
        $("body").append(str);
        $(".loading-box a").addClass("loading");
            setTimeout(function () {
                $.ajax({
                    url:"./json/index.json",
                    success:function(a) {
                        console.log(a);
                        var interText = doT.template($("#kuwan-ulmpls").text());
                        $("#kuwan-ul").html(interText(a));
                    },
                    error:function(err){
                        throw err;
                    }
                });
                $(".loading-box a").text("没有更多啦！");
                $(".loading-box a").css({"background":"none","color":"#ccc"})
            },4000)
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