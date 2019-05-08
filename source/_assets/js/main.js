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
		autoplaySpeed: 6000,

	});

	$('#toggle-nav').click(function(e) {
      	e.preventDefault();
      	$(this).toggleClass('open-nav');
      	$('.mobile-nav').toggleClass('show'); 	
    });

    $('nav a').click(function(e) {
    	e.preventDefault();
    	let link_name = $(this).text().toLowerCase(); 
    	let container = $('.' + link_name); 
    	let new_top = $(container).offset().top; 

    	$('html, body').animate({
            scrollTop: new_top  
        }, 500);

    }); 

    $(document).scroll(function() {

    	if($(document).scrollTop() > 0) { 	
    		$('.desktop-nav').addClass('scrolled'); 
    	}
    	else {
    		$('.desktop-nav').removeClass('scrolled'); 
    	}

    })

});
