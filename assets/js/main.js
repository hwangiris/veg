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
		$('.gotop.desktop, nav ul.desktop, .section-opening .icon.desktop').remove();
	} else {
		$('.jumbotron-product .col-op-img').height($('.jumbotron-product .col-op-txt').outerHeight());
		$('.map-group .map-img').css('min-height', $('.map-group .map-text').outerHeight());
		$('.gotop.mobile, nav ul.mobile, .section-opening .icon.mobile').remove();
	}
	$('a.smooth-scroll[href*="#"]:not([href="#"])').on("click", function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top)
				}, 1000);
				return false;
			}
		}
	});
	$('.product-item').each(function(){
		$(this).css('padding-bottom', productBottomHeight);
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
