$(document).ready(function($) {

    $(' .apartment-plan a').on('mousemove', function (event) {

        var info = $(this).attr('data-target');
        $('.info-box').html('<b>'+info+'</b>');

        var position = $(this).position();


        $('.info-box').css({
            left:position.left+20,
            top: position.top-50,
            opacity:'1'
        });
    });

    $('.apartment-plan a').on('mouseleave',function(event){
        $('.info-box').css({
            opacity:'0'
        });
    });

});