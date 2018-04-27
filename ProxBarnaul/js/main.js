$(document).ready(function(){
	$('.mobile-menu').click(function(){ 
		$('.top-header-wrap').toggleClass('openedMob-menu'); 
	});
	$('.question_title').click(function(){
		$(this).parent().toggleClass('open_question');
	});
	$(window).on("scroll", function() {
	    if ($(window).scrollTop() > 100){
	    	$('body').addClass('mobile_menu_up');
	    } else {
	    	$('body').removeClass('mobile_menu_up');
	    }
	});
});