
$(document).ready(function(){
	$(".border-humb-button").click(function(){
		$(".button-humb").toggleClass("rotate");
	});
	$(".border-humb-button").click(function(){
		$(".nav-header").toggleClass("active");
	});
	var w = window.screen.availWidth;
	if(w >= 320 && w < 1170){
		$('.number').addClass('viz');
	}
	var show = true;
	var countbox = "#counter";

	var showSlider = true;
	var slider = '#slider';

	$(window).on("scroll load resize", function(){
		if(!showSlider) return false;
		var slide_top =$(slider).offset().top;
		var width_top = $(window).scrollTop();
		if(width_top + 1200 >= slide_top){
			$('#slider').slick({
				dots: true,
				arrows: false,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 4000,
				cssEase: 'linear'
			});
			showSlider = false;
		}
	});			
	$(window).on("scroll load resize", function(){

		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $(countbox).offset().top;
		var slide_top =$(slider).offset().top;
		var heightShow = 0;
		if(w >= 1170){
			heightShow = 400;
		}
		if(w >= 1440){
			heightShow = 650;
		}
		if(w >= 1600){
			heightShow = 650;
		}
		if(w >= 1170){
			if(w_top + heightShow >= e_top ){
				var time = 2;
				$(countbox).each(function(){
					$('.number').addClass('viz');
					$('.number').each(function(){
						var
						i = 1,
						num = $(this).data('num'),
						step = 1000 * time / num,
						that = $(this),
						line = that.next('.progress-bar').children('.skills-progress-line')
						int = setInterval(function(){
							if(i <= num){
								line.css('width',i+'%');
								that.html(i+' %');
							}
							else{
								clearInterval(int);
							}
							i++;
							show = false;
						},step);
					});
				});
			}
		}

	});
});
$(document).ready(function(){
	var show = true;
	var countbox = '#counter-work';
	var wid = window.screen.availWidth;
	$(window).on("scroll load resize", function(){

		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $(countbox).offset().top;
		var heightShow2 = 0;
		if(wid >= 1170){
			heightShow2 = 600;
		}
		if(wid >= 1440){
			heightShow2 = 850;
		}
		if(wid >= 1920){
			heightShow2 = 950;
		}
		if(w_top + heightShow2 >= e_top ){
			$('.item-number').addClass('viz');
			$('.item-number').each(function(){
				$(this).prop('block-items',0).animate({
					counter: $(this).text()
				},{
					duration: 2500,
					easing:'swing',
					step:function(now){
						$(this).text(Math.ceil(now));
					}
				});
			});
			show = false;			
		}
	});
});