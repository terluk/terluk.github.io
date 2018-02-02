$(document).ready(function(){
	$('.carousel-news').owlCarousel({
		items : 3,
		nav : true,
		loop : true,
		navText : ['<span></span>','<span></span>'],
		responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },    
          800:{
              items:3
          }
      }
	});
	$('.mobile-menu').click(function(){ 
		$('.header-wrap').toggleClass('openedMob-menu'); 
	});
	$(window).on("scroll", function() {
	    if ($(window).scrollTop() > 100){
	    	$('body').addClass('mobile_menu_up');
	    } else {
	    	$('body').removeClass('mobile_menu_up');
	    }
	});
});