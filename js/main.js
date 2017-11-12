$(document).ready(function () {
	$(document).click(function (e) {
		$('#bs-example-navbar-collapse-1').collapse('hide');
	});
	
	$(window).scroll(function (e) {
		$('#bs-example-navbar-collapse-1').collapse('hide');
		$('button').blur()
	});
});

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
