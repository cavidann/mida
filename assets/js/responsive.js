$(document).ready(function() {
    $(".lines").click(function(){
        $(".text-right").fadeToggle("slow");
    });
    $(".buttoninfo").click(function(){
        $(".rmodal-bk").fadeIn("slow");
    });
    $(".rmodal img").click(function(){
        $(".rmodal-bk").fadeOut("slow");
    });
    $(".head").click(function(ev){
        $(this).parent().find(".body").slideToggle();
        $(".head").not($(this)).parent().find(".body").slideUp();
    })
});