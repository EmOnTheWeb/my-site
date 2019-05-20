import $ from 'jquery';
import 'slick-carousel'; 

$( document ).ready(function() {
    $('.portfolio-slider').slick({

        dots: false,
		arrows: true,
		swipeToSlide: true,
		slidesToShow: 3,
		infinite: true, 
		prevArrow:'<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>',
    	nextArrow:'<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>',
        responsive: [
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                        {
                            breakpoint: 1023,
                            settings: {
                                slidesToShow: 2,
                            }
                        }
                    ]
	});
    let run_once = false; 
    $('.portfolio-slider').on('setPosition', function () {
        if(!run_once) {
            $(this).find('.slick-slide').height('auto');
            var slick_track_elem = $(this).find('.slick-track');
            var slick_track_height = $(slick_track_elem).height();
            var text_height = slick_track_height - 205; 
            $(this).find('.portfolio-item__text').css('height',text_height + 'px'); 
            run_once = true; 
        }
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
        }, 500, function() {  $('#toggle-nav').removeClass('open-nav'); $('.mobile-nav').removeClass('show');  });

    }); 

    $('.fa-chevron-circle-down').click(function(e) {
        e.preventDefault();
        let about_container = $('.about'); 
        let new_top = $(about_container).offset().top; 
            $('html, body').animate({
                scrollTop: new_top  
            }, 500); 
    }); 

    $('a.contact').click(function(e) {
        e.preventDefault();
        let contact_container = $('section.contact'); 
        let new_top = $(contact_container).offset().top; 
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
