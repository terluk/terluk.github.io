$(document).ready(function(){
	$('.mobile-menu').click(function(){ 
		$('.header-wrapper').toggleClass('openedMob-menu'); 
	});
	$(window).on("scroll", function() {
	    if ($(window).scrollTop() > 100){
	    	$('body').addClass('mobile_menu_up');
	    } else {
	    	$('body').removeClass('mobile_menu_up');
	    }
	});
});