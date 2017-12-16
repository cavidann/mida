$(document).ready(function () {
	
	$(document).on('focus', '.c-inpt input[type="text"],.c-inpt select,.c-inpt textarea', function() {
    $('.helper p').html('<u>İzah :</u>' + $(this).attr('dir'));
    var tfix = 0;
    var lfix = 20;
    if ($(this).parents('.calc-inpt').parent('div').hasClass('popcontent2').toString() == 'false') {
        tfix = 30;
        lfix = 50;
    }
    Ttop = $(this).parents('.calc-inpt').position().top + tfix;
    Lleft = $(this).parents('.calc-inpt').position().left + $(this).parents('.calc-inpt').width() + lfix;
    $('.helper').css('top', Ttop + 'px');
    $('.helper').css('left', Lleft + 'px');
    $('.helper').fadeIn(1);
})
$(document).on('blur', '.c-inpt input[type="text"],.c-inpt select', function() {
    $('.helper').fadeOut(1);
})

$(document).on('click', '.ptabs', function() {
    if ($(this).hasClass('pactive').toString() == 'false') {
        tabclass = $(this).attr('id');
        $('.ptabs').removeClass('pactive');
        $(this).addClass('pactive');
        $('.ptabcont').css('display', 'none');
        $('.' + tabclass).fadeIn(400);
    }
});

$(document).on('click', '.popbg,.popupclose', function() {
    $('.popbg').fadeOut('fast');
    $('.popup').fadeOut(400);
});

$(document).on('click', '#calc', function(ev) {
	ev.preventDefault();
    $('.popbg').fadeIn('fast');
    $('.popup').fadeIn(400);
});

$(document).on('click', '#hesabla', function() {
        caaalc("#calc1");
    });
    $(document).on('click', '#hesabla2', function() {
        caaalc("#calc2");
    });
	
	function caaalc(c) {
    var $calc = c;
    $($calc + " .netice").html('&nbsp;');
    if ($.trim($($calc + " .ayliqgelir").val()) == '') {
        $($calc + " .ayliqgelir").css('background', 'red');
        return false;
    }
    $($calc + " .ayliqgelir").css('background', '#ffffff');
    if ($.trim($($calc + " .aileuzvu").val()) == '') {
        $($calc + " .aileuzvu").css('background', 'red');
        return false;
    }
    $($calc + " .aileuzvu").css('background', '#ffffff');
    if ($.trim($($calc + " .ilkodenis").val()) == '') {
        $($calc + " .ilkodenis").css('background', 'red');
        return false;
    } else {
        var ilkinodenis = parseFloat($.trim($($calc + " .ilkodenis").val()));
        if (ilkinodenis < 15 && $calc == "#calc1") {
            alert('İpoteka kreditlərinin verilnməsi şərtlərinə əsasən ilkin ödəniş 15% az olmamalıdır.');
            return false;
        }
        if (ilkinodenis < 10 && $calc == "#calc2") {
            alert('İpoteka kreditlərinin verilnməsi şərtlərinə əsasən ilkin ödəniş 10% az olmamalıdır.');
            return false;
        }
    }
    $($calc + " .ilkodenis").css('background', '#ffffff');
    if ($calc == "#calc2")
        if ($.trim($($calc + " .kreditillik").val()) == '' || parseFloat($.trim($($calc + " .kreditillik").val())) > 4) {
            $($calc + " .kreditillik").css('background', 'red');
            alert('Güzəştli ipoteka kreditlərinin verilnməsi şərtlərinə əsasən illik kredit faizi 4%-dən çox olmamalıdır.');
            return false;
        }
    if ($.trim($($calc + " .kreditillik").val()) == '' || parseFloat($.trim($($calc + " .kreditillik").val())) > 8) {
        $($calc + " .kreditillik").css('background', 'red');
        alert('Ümumi ipoteka kreditlərinin verilnməsi şərtlərinə əsasən illik kredit faizi 8%-dən çox olmamalıdır.');
        return false;
    }
    $($calc + " .kreditillik").css('background', '#ffffff');
    if ($.trim($($calc + " .digerohtelik").val()) == '' || parseFloat($.trim($($calc + " .digerohtelik").val())) < 30) {
        $($calc + " .digerohtelik").css('background', 'red');
        return false;
    }
    $($calc + " .digerohtelik").css('background', '#ffffff');
    var $c12 = 155;
    var $c4 = parseFloat($.trim($($calc + " .ayliqgelir").val()));
    var taxes = ($c4 <= 2500) ? (($c4 - $c12) * 0.14) : (350 + ($c4 - 2500) * 0.25);
    taxes += $c4 * 0.03;
    var $c11h = taxes;
    var $c11 = Math.round($c11h, 2);
    var $c5 = parseFloat($.trim($($calc + " .aileuzvu").val()));
    var $c13 = $c5 * $c12;
    var $c6 = parseFloat($.trim($($calc + " .digerohtelik").val()));
    var $c14h = $c11h + $c13 + $c6;
    var $c14 = Math.round($c14h);
    var $c9 = parseFloat($.trim($($calc + " .kreditillik").val())) * .01;
    var $g6 = 100000;
    if ($calc == "#calc1")
        $g6 = 150000;
    var $c7 = parseFloat($.trim($($calc + " .kreditmuddet").val()));
    var $f8 = (($c9 / 12) * $g6) / (1 - 1 / Math.pow(((1 + $c9 / 12)), ($c7 * 12)));
    var $f18 = (($c4 - $c14h) > $c4 * .7) ? ($c4 * .7) : ($c4 - $c14h);
    var $c18 = ($f18 < 0) ? 0 : ($f18 <= $f8) ? $f18 : $f8;
    var $c8 = parseFloat($.trim($($calc + " .ilkodenis").val())) * .01;
    var $c15 = ($c18 * (1 - Math.pow((1 + $c9 / 12), (-$c7 * 12))) / ($c9 / 12)) / (1 - $c8);
    var $c15h = Math.round($c15);
    var $c16 = $c18 * (1 - Math.pow((1 + $c9 / 12), (-$c7 * 12))) / ($c9 / 12);
    var $c16h = Math.round($c16);
    var $c17 = $c15 - $c16;
    var $c17h = Math.round($c17);
    var $c18h = Math.round($c18, 2);
    var $c19 = Math.round($c18 * $c7 * 12);
    var $netice;
    $netice = '<div class="resleft"></div>' + '<div class="rtitle">Hesablamanın nəticəsi</div>' + ' <div style="clear: both;"></div> ' + '<div class="cresult">' + '  <img src="assets/images/logo/ICONS/cresicon1.png" />' + ' <p>' + '    Alınan evin ehtimal olunan qiyməti<br />' + '    <span>' + $c15h + ' AZN</span>' + ' </p>           ' + '</div>' + '<div class="cresult">' + '   <img src="assets/images/logo/ICONS/cresicon2.png" />' + '  <p>' + '     Kredit maksimal məbləği<br />' + '     <span>' + $c16h + ' AZN</span>' + '  </p>           ' + ' </div>' + '<div class="cresult">' + ' <img src="assets/images/logo/ICONS/cresicon3.png" />' + '<p>' + 'İlkin ödənişə minimal tələb<br />' + '<span>' + $c17h + ' AZN</span>' + '</p>           ' + '</div>' + '<div class="cresult">' + '<img src="assets/images/logo/ICONS/cresicon4.png" />' + '<p>' + 'Aylıq ödəniş (annuitet)<br />' + '<span>' + $c18h + ' AZN</span>' + '</p>' + '</div>';
    $($calc + " .netice").html($netice);
}
	
    $(".tab-title-custom li").each(function (index, element) {
        $(element).attr("data-index", index);
        $(".tab-content-custom")
            .eq(index)
            .attr("data-index", index);
        if (index == 0) {
            $(element).addClass('active');
            $('.tab-content-custom').eq(index).fadeIn(300);
        }

    });
    $('.tab-title-custom li').click(function () {
        var index = $(this).data('index');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.tab-content-custom').fadeOut(300, function () {
            setTimeout(function () {
                $('.tab-content-custom').hide();
                $('.tab-content-custom[data-index="' + index + '"]').fadeIn(300);
            }, 500)
        });
    })

    //Search apartment , floor count depends on apartment type
    $('.apartment-types .apartment-type').change(function () {
        var max_floor = 1;
        $('.apartment-type input').each(function (index, element) {
            if ($(this).is(':checked')) {
                if ($(this).val() > max_floor) {
                    max_floor = Number($(this).val())
                }
            }
        })
        $('select[name="max_floor"]').html('');
        $('select[name="min_floor"]').html('');
        for (i = 0; i < max_floor; i++) {
            $('select[name="max_floor"]').append('<option value="' + (i + 1) + '">' + (i + 1) + '</option>')
            $('select[name="min_floor"]').append('<option value="' + (i + 1) + '">' + (i + 1) + '</option>')
        }
    })


    //Search apartment by parameters

    $('.search').click(function (event) {
        var data = $(this).closest('form').serializeArray();
        var body = {};
		for (i = 0; i < data.length; i++) {
				if(data[i+1]!=null){
					if(data[i].name==data[i+1].name){
					data[i].value += ","+data[i+1].value;
					body[data[i].name] = data[i].value;
					i=i+1;
					}else{
						body[data[i].name] = data[i].value;
					}
				}else{
					body[data[data.length-1].name] = data[data.length-1].value;
				}
				
			
		}
        /*for (i = 0; i < data.length; i++) {
            if (!body[data[i].name]) {
                body[data[i].name] = data[i].value;
            } else {
                if (typeof(body[data[i].name]) == 'object') {
                    body[data[i].name].push(data[i].value);
                } else {
                    var new_field = [];
                    new_field.push(data[i].value, body[data[i].name]);
                    body[data[i].name] = new_field;
                }
            }
        }*/
        $.ajax({
            url: "/search-menzil/",
            type: 'GET',
            dataType: 'json',
            data: body,
            success: function (data) {
                if (data.length > 0) {
                    $('.table.data tbody').html(' ');
                    $.each(data, function (key, value) {
                        if (value['price'] == null) {
                            value['price'] = '-'
                        }
                        if (value['giris'] == null) {
                            value['giris'] = 1
                        }
                        var apartmentLink = 'menzil/' + value['id'];
                        $('.table.data tbody').append(
                            "<tr>" +
                            "<td><a href='" + apartmentLink + "'>" + value['bina_id'] + "</a></td>" +
                            "<td><a href='" + apartmentLink + "'>" + value['bina'][0]['mertebe'] + " mərtəbəli</td>" +
                            "<td><a href='" + apartmentLink + "'>" + value['giris'] + "</td>" +
                            "<td><a href='" + apartmentLink + "'>" + value['mertebesi'][0]['mertebe_no'] + "</a></td>" +
                            "<td><a href='" + apartmentLink + "'>" + value['menzil_no'] + "</a></td>" +
                            "<td><a href='" + apartmentLink + "'>" + value['otaq'] + "</a></td>" +
                            "<td><a href='" + apartmentLink + "'>" + value['perimetr_1'] + "</a></td>" 
                            
                        )
                    })

                }
            }
        });

    });

    //Reset search parameters and search data

    $('.search-form input[type="reset"]').click(function () {
        $('.table.data tbody').html(' ');
        $('select[name="max_floor"]').html('<option value="1">1</option>');
    })


    //Gallery images of aparment
    if ($('#apartment-images .image-list').length > 0) {
        $('#apartment-images .image-list').owlCarousel({
            items: 1,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            navContainer: $('#apartment-images .navigation'),
            autoplay: true,
            loop: true
        })
    }
    //View apartment gallery
    $('.apartment-images-trigger').click(function (e) {
        e.preventDefault();
        $('#apartment-images').fadeToggle(300);
    })
    $('#apartment-images .close').click(function (e) {
        $('#apartment-images').fadeOut(300);
    })

    //activating menu if submenu is active
    if ($('#navbar .submenu').find('a.active').length > 0) {
        $('#navbar .submenu').find('a.active').closest('.submenu').addClass('active');
    }

    $('.floor-info-holder').hover(function(){
        var index= $(this).data('floor-index');
        $('.apartment-plan .mertebe[data-floor-index]').removeClass('active');
        $('.apartment-plan .mertebe[data-floor-index="'+index+'"]').addClass('active')
    },function(){
        $('.floor-info-holder').removeClass('active');
        $('.apartment-plan .mertebe[data-floor-index]').removeClass('active');
    })

    var Calculator = function Calculator() {
        var payment_val = Number($('#payment-cost').val());
        var _initial_payment = $('.inital-payment-value.active');
        var _calculate = $('button.calculate');
        var initial_payment_val =  0;
        var initial_payment_rate = 0;
        var total_payment = 0;
        var monthly_payment = 0;
        var payment_rate = 4;
        var payment_period = 30*12 ; /* by month*/
        var discount = 0;

        (function init() {;
            $('.inital-payment-value').click(function(){
                if($('#payment-cost').val()!=0){
                    $('.inital-payment-value').removeClass('active').addClass('disabled').attr('readonly',true);
                    $(this).addClass('active').removeClass('disabled').attr('readonly',false);
                }
            })

            $('#payment-cost').on('input',function (e) {
                if(e.target.value<=0){
                    _calculate.attr('disabled',true);
                }else{
                    _calculate.attr('disabled',false);
                }
            })
            $('.inital-payment-value').on('input',function(e){
                setPayments();
                if(payment_val>=0){
                    _calculate.attr('disabled',false);
                    if(initial_payment_rate>=10 && initial_payment_rate<=90){
                        _calculate.attr('disabled',false);
                        if(_initial_payment.attr('data-type')=='rate'){
                            if(initial_payment_val<payment_val){
                                _calculate.attr('disabled',false);
                                $('.inital-payment-value.disabled').val(initial_payment_val.toFixed(2));
                            }else{
                                _calculate.attr('disabled',true);
                            }
                        }else{
                            $('.inital-payment-value.disabled').val(initial_payment_rate.toFixed(2)+'%');
                        }
                    }else{
                        _calculate.attr('disabled',true);
                    }
                }else{
                    _calculate.attr('disabled',true);
                }
            })


            $('button.calculate').click(function(){
                setPayments();
                monthly_payment = getMonthlyPayment();
                if(initial_payment_rate==90){
                    $('.discount_price').text(payment_val - payment_val*0.1);
                    $('.discount').text(payment_val*0.1);
                    $('.total_payment').val('0').text('0');
                    $('.monthly_payment').val('0');
                }else{
                $('.total_payment').val(Math.floor(total_payment)).text(Math.floor(total_payment));
                $('.monthly_payment').val(monthly_payment.toFixed(2));
                $('.discount').text(discount);
                $('.discount_price').text(payment_val - discount);
                }
            })
            $('button.reset').click(function(){
                payment_val = 0;
                _initial_payment=0;
                total_payment = 0;
                monthly_payment = 0;

                $('.total_payment').val(0).text(0);
                $('.monthly_payment').val(0);
                $('.discount').text(0);
                $('.discount_price').text(0);
                $('.calculator-holder input').val(0);
            })

        })();


        //calculate monthly payment
        function getMonthlyPayment(ir=(payment_rate/100)/12, np=payment_period, pv=total_payment, fv, type){
            /*
             * ir   - interest rate per month
             * np   - number of periods (months)
             * pv   - present value
             * fv   - future value
             * type - when the payments are due:
             *        0: end of the period, e.g. end of month (default)
             *        1: beginning of period
             */
            var pmt, pvif;

            fv || (fv = 0);
            type || (type = 0);

            if (ir === 0)
                return -(pv + fv)/np;

            pvif = Math.pow(1 + ir, np);
            pmt = - ir * pv * (pvif + fv) / (pvif - 1);

            if (type === 1)
                pmt /= (1 + ir);

            return Math.abs(pmt);
        }



        function setPayments() {
            payment_val = Number($('#payment-cost').val());
            _initial_payment = $('.inital-payment-value.active');
            if(_initial_payment.attr('data-type')=='rate'){
                initial_payment_val = (payment_val*Number.parseFloat(_initial_payment.val()))/100;
                initial_payment_rate = Number.parseFloat(_initial_payment.val());
            }else{
                initial_payment_val = Number(_initial_payment.val());
                initial_payment_rate = (Number(_initial_payment.val())*100)/payment_val;
            }

            if(initial_payment_rate>=10){
                //calculate discount price
                discount = Math.abs(((initial_payment_val-payment_val*0.1)*0.1).toFixed(0));

                //rest of the payment loan
                total_payment = payment_val - discount - initial_payment_val;

            }else{
                total_payment = payment_val - initial_payment_val;
            }

        }
    }

    var test = new Calculator();
});

