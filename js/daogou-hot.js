$(function () {
    /*导购清单--最热*/
    $.ajax({
        url:"../json/daogou-hot.json",
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