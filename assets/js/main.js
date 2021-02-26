$(function () {
	var width = $(window).width(),
		height = $(window).height(),
		headerHeight = $('header').outerHeight(),
		productBottomHeight = $('.product-bottom').outerHeight();
	new WOW().init();
	var isIE = isIE = (navigator.userAgent.indexOf("MSIE") != -1),
		isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
	if (isIE || isIE11) {
		$('.row-grid').addClass('row-ie');
		$('.opening').addClass('opening-ie');
	}
	if (width < 1024) {
		$(".hamburger").on("click", function () {
			$(this).toggleClass("active");
			$("nav").animate({ width: "toggle" }, 500);
		});
		$("nav ul li a").on("click", function () {
			$('.hamburger').toggleClass("active");
			$("nav").animate({ width: "toggle" }, 500);
		});
	} else {
		$('.jumbotron-product .col-op-img').height($('.jumbotron-product .col-op-txt').outerHeight());
		$('.map-group .map-img').css('min-height', $('.map-group .map-text').outerHeight());
	}
	$('a.smooth-scroll[href*="#"]:not([href="#"])').on("click", function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - headerHeight + 1)
				}, 1000);
				return false;
			}
		}
	});
	$('.product-item').each(function(){
		$(this).css('padding-bottom', productBottomHeight);
	})
	$('.force-more').click(function(){
		$(this).toggleClass('opened')
		$(this).parent().siblings('p').slideToggle(300);
		$(this).parent().parent('.col-md-4').siblings('.col-md-4').children('.col-title').children('.force-more').removeClass('opened');
		$(this).parent().parent('.col-md-4').siblings('.col-md-4').children('p').slideUp();
	})
	$('.accordion-more').click(function(){
		$(this).toggleClass('opened')
		$(this).parent().siblings('p').slideToggle(300);
		$(this).parent().parent().siblings('.display-none').slideToggle(300);
		$(this).parent('.title').parent().parent('.row').parent('.container').parent('.accordion-section').siblings('.accordion-section').children().children().children().children('.title').children('.accordion-more').removeClass('opened');
		$(this).parent('.title').parent().parent('.row').parent('.container').parent('.accordion-section').siblings('.accordion-section').children().children().children().children('p').slideUp();
		$(this).parent('.title').parent().parent('.row').parent('.container').parent('.accordion-section').siblings('.accordion-section').children().children().children('.display-none').slideUp();
	})
	$('.product-more').click(function(){
		$(this).toggleClass('opened')
		$(this).parent().siblings('p').slideToggle(300);
		$(this).parent().parent('.product-center').siblings('.product-bottom').slideToggle(300);
		$(this).parent().parent().parent().parent().siblings().children('.product-body').children('.product-center').children().children('.product-more').removeClass('opened')
		$(this).parent().parent().parent().parent().siblings().children('.product-body').children('.product-center').children('p').slideUp();
		$(this).parent().parent().parent().parent().siblings().children('.product-body').children('.product-bottom').slideUp();
	})
    $('.slider-opening').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: "<button type='button' class='slick-navi slick-prev'><i class='icon icon-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-navi slick-next'><i class='icon icon-chevron-left'></i></button>"
    });
    $('.slider-product').slick({
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: "<button type='button' class='slick-navi slick-prev'><i class='icon icon-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-navi slick-next'><i class='icon icon-chevron-left'></i></button>"
    });
	$(window).resize(function () {});
	$(window).scroll(function () {
		var scroll = $(this).scrollTop(),
			openingHeight = $(".opening").outerHeight();
		if (scroll >= openingHeight / 2) {
			$("a.gotop").fadeIn();
		} else {
			$("a.gotop").fadeOut(100);
		}
	});
});
