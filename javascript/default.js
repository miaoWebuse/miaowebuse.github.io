$(function(){
	$(window).on('scroll',function(){
		/*关于我们*/
		if( $(window).scrollTop() > $('#js_about_tit').offset().top - 300){
			$('#about-amt').css('visibility','visible').addClass('fadeUp');
			$('#about-txt-amt').css('visibility','visible').addClass('fadeUp2');
		};
		if( $(window).scrollTop() > $('#js_about_con').offset().top-300 ){
			$('#about-tit-amt').css('visibility','visible').addClass('fadeUp');
			$('#about-con-amt').css('visibility','visible').addClass('fadeDown');
			$('.line01').css({'opacity':1,'left':0,'bottom':'180px'});
			$('.line03').css({'opacity':1,'right':'-70px','top':'-205px'});
		};
		if( $(window).scrollTop() > $('#js_about_con').offset().top-100 ){
			$('.line02').css({'opacity':1,'right':0,'bottom':'-120px'});
		}
		/*业务*/
		if( $(window).scrollTop() > $('#js_business_tit').offset().top - 300 ){
			$('#business_amt1').css('visibility','visible').addClass('fadeUp');
			$('#business_amt2').css('visibility','visible').addClass('fadeUp2');
		};
		if( $(window).scrollTop() > $('#js_business_con').offset().top -300){
			$('#business_amt3').css('visibility','visible').addClass('fadeUp');
			$('#business_amt4').css('visibility','visible').addClass('fadeDown');
			$('.business-w').css('visibility','visible').addClass('fadeUp');
			
			$('.line06').css({'opacity':1,'right':'139px','top':'-8px'});
		};
		if( $(window).scrollTop() > $('#js_business_con').offset().top -100){
			$('.line05').css({'opacity':1,'right':0,'bottom':'-80px'});
			$('.line04').css({'opacity':1,'left':0,'bottom':'180px'});
		}
		/*联系我们*/
		if( $(window).scrollTop() > $('#js_contact_tit').offset().top - 300){
			$('#js_contact01').css('visibility','visible').addClass('fadeUp');
			$('#js_contact02').css('visibility','visible').addClass('fadeUp2');
		};
		if( $(window).scrollTop() > $('#js_contact_con').offset().top -300){
			$('#js_contact03').css('visibility','visible').addClass('fadeUp');
			$('#js_contact04').css('visibility','visible').addClass('fadeDown');			
			$('.line09').css({'opacity':1,'right':'139px','top':'-8px'});
			$('.line08').css({'opacity':1,'right':0,'bottom':'-80px'});
			$('.line07').css({'opacity':1,'left':0,'bottom':'180px'});
			$('.contact-r').css('visibility','visible').addClass('fadeRight');
			setTimeout(function(){
				$('#js_contact_item1').css('visibility','visible').addClass('fadeUp');
				setTimeout(function(){
					$('#js_contact_item2').css('visibility','visible').addClass('fadeUp');
					setTimeout(function(){
						$('#js_contact_item3').css('visibility','visible').addClass('fadeUp');
						setTimeout(function(){
							$('#js_contact_item4').css('visibility','visible').addClass('fadeUp');
						},500)
					},500)
				},500)
			},500);
		};
	});
});