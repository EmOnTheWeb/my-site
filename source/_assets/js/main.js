import $ from 'jquery';
import 'slick-carousel'; 

$( document ).ready(function() {
    $('.portfolio-slider').slick({

        dots: false,
		arrows: true,
		swipeToSlide: true,
		slidesToShow: 1,
		infinite: true, 
		prevArrow:'<i class="fa fa-caret-left" aria-hidden="true"></i>',
    	nextArrow:'<i class="fa fa-caret-right" aria-hidden="true"></i>'

	});

	 $('.testamonials-slider').slick({

        dots: false,
		arrows: false,
		swipeToSlide: true,
		infinite: true, 
		adaptiveHeight:true,
		autoplay: true,
		autoplaySpeed: 5000,

	});
});