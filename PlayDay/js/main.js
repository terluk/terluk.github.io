$(document).ready(function(){
	$('.mobile-menu').click(function(){ 
		$('.top_header_wrap').toggleClass('openedMob-menu'); 
	});
	$(window).on("scroll", function() {
	    if ($(window).scrollTop() > 100){
	    	$('body').addClass('mobile_menu_up');
	    } else {
	    	$('body').removeClass('mobile_menu_up');
	    }
	});
	$('.pd_basket').click(function(){ 
		$('.quest_pop_up').toggleClass('quest_pop_up_visible'); 
		$('.shadow').toggleClass('quest_pop_up_visible'); 
	});
	$('.removePopup, .shadow').click(function(){
		$('.quest_pop_up_visible').removeClass('quest_pop_up_visible');
	});
});