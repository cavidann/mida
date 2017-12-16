$(document).ready(function($) {
	
	$('path').on('mousemove',function(event) {

		var width = $(window).width();
		var height = $(window).height();


		tempX = (event.clientX + document.body.scrollLeft) / width *100;
        tempY = (event.clientY + document.body.scrollTop) / height *100;
        
        console.log(tempX+' '+tempY);
        if(tempX < 50){
        	var mertebe = $(this).parent().attr('data-target');
        	$('.info-box').css({
        		left:event.clientX + document.body.scrollLeft-50,
        		top: event.clientY + document.body.scrollTop-50,
        		opacity:'1'
        	});
        	$('.info-box').html('<b>Giriş 2</b><span> / </span> <b>Mərtəbə '+mertebe+'</b>')
        }

        else{

        	var mertebe = $(this).parent().attr('data-target');
        	$('.info-box').css({
        		left:event.clientX + document.body.scrollLeft-50,
        		top: event.clientY + document.body.scrollTop-50,
        		opacity:'1'
        	});
        	$('.info-box').html('<b>Giriş 1</b><span> / </span> <b>Mərtəbə '+mertebe+'</b>')
        	
        }
	});
	
	$('path').on('mouseout',function(event) {
        $('.info-box').css('opacity',0);
	});
});