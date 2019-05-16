$(function () {
    /*导购清单--最新*/
    $.ajax({
        url:"../json/daogou-newest.json",
        success:function(a) {
            console.log(a);
            var interText = doT.template($("#shopsmpl").text());
            $(".hot-ul").html(interText(a));
        },
        error:function(err){
            throw err;
        }
    });
});