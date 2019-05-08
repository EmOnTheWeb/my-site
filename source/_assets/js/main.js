import $ from 'jquery';
import 'slick-carousel'; 

$( document ).ready(function() {
    $('.portfolio-slider').slick({

        dots: false,
		arrows: true,
		swipeToSlide: true,
		infinite: true, 

	});

	 $('.testamonials-slider').slick({

        dots: false,
		arrows: false,
		swipeToSlide: true,
		infinite: false, 

	});
});