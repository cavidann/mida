$(document).ready(function(){

	$('a.building').on('mouseover', function(event) {
		
		var datas = $(this).attr('data-value');

		var datas_array = datas.split('/');

        $.ajax({
            url: '/binainfo',
            type: 'GET',
            dataType:'json',
            data: {bina: datas_array[0]},
        })

            .done(function(data) {
                $('#info .info-house .one').html(data.bir);
                $('#info .info-house .two').html(data.iki);
                $('#info .info-house .three').html(data.uch);
            })
            
        if(datas_array[0] != '0 ') {
            $('#info .number').html('BİNA ' + datas_array[0]);
            $('#info .float').html(datas_array[1]);
            console.log($(this).offset().left + ' '+ $(window).innerWidth()/2)
            if($(this).offset().left>($(window).innerWidth()/2)){
                $('#info.complex-info').removeClass('right');
                $('#info.complex-info').addClass('left')
            }else{
                $('#info.complex-info').removeClass('left');
                $('#info.complex-info').addClass('right')
            }
        }
        else{
            var binaID = $(this).attr('data-title');
            $('#info .number').html('BİNA '+binaID+'<br><span style="color:red;display: block;text-align: center;margin-left: 0;line-height: 20px;margin-top: 40px;">Mənzillərə baxış tezliklə aktivləşdiriləcəkdir</span>');
            $('#info .float').html(' ');
            $('#info .info-house .one').html(' ');
            $('#info .info-house .two').html(' ');
            $('#info .info-house .three').html(' ');
            $('#info .info-house, #info .float-count, #info .info-house, #info .line, #info .line2').css('opacity',0);

            if($(this).offset().left>($(window).innerWidth()/2)){
                $('#info.complex-info').removeClass('right');
                $('#info.complex-info').addClass('left')
            }else{
                $('#info.complex-info').removeClass('left');
                $('#info.complex-info').addClass('right')
            }
        }

	});

	$('a').on('mouseleave', function(event) {
        $('#info .info-house, #info .float-count, #info .info-house, #info .line, #info .line2').css('opacity',1);
		$('#info').css('display', 'none').removeClass('left right');
	});

});



