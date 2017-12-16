$(document).ready(function($) {
	
	$('.submenu').on('mouseover', function(event) {
		$(this).find('.list').css('display', 'block');
	});

	$('.submenu').on('mouseleave', function(event) {
		$(this).find('.list').css('display', 'none');
	});

});
$(window).on('beforeunload',function () {
$('body').append(`<div class='preloader'><img src="assets/images/tail-spin.svg" alt=""></div>`).fadeIn(300);
})
$(window).on('load',function () {
	$('document').ready(function () {
		$('.preloader').fadeOut(200);
    })
})