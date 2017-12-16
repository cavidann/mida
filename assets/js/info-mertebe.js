$(document).ready(function(){

	$('a').on('mouseover', function(event) {
		
		var datas = $(this).attr('data-value');

		var datas_array = datas.split('/');

        $.ajax({
            url: '/mertebeinfo',
            type: 'GET',
            dataType:'json',
            data: {mertebe: datas_array[0],bina:datas_array[1]},
        })
			.done(function(data){
                
                $('#info .info-house-1 .one').html(data.gbbir).closest('div').css('display',data.gbbir==''?'none':'block');
                $('#info .info-house-1 .two').html(data.gbiki).closest('div').css('display',data.gbiki==''?'none':'block');
                $('#info .info-house-1 .three').html(data.gbuch).closest('div').css('display',data.gbuch==''?'none':'block');
                //
                $('#info .info-house-2 .one').html(data.gibir).closest('div').css('display',data.gibir==''?'none':'block');
                $('#info .info-house-2 .two').html(data.giiki).closest('div').css('display',data.giiki==''?'none':'block');
                $('#info .info-house-2 .three').html(data.giuch).closest('div').css('display',data.giuch==''?'none':'block');
			});

		$('#info .number').html('MƏRTƏBƏ ' + datas_array[0]);

		$('#info').css('display', 'block');

	});

	$('a').on('mouseleave', function(event) {
		$('#info').css('display', 'none');
	});

});



