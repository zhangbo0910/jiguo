$(function () {
    /*发现酷玩---最热*/
    $.ajax({
        url:"../json/kuwan-hot.json",
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