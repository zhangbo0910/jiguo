$(function () {
    /*发现酷玩---最新*/
    $.ajax({
        url:"../json/kuwan-newest.json",
        success:function(a) {
            console.log(a);
            var interText = doT.template($("#kuwan-ulmpl").text());
            $(".hot-ul").html(interText(a));
        },
        error:function(err){
            throw err;
        }
    });
    });