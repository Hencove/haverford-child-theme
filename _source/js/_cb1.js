(function (document, window, $) {
	//
	// 		jQuery is ready as $

	var hero = $('.cb1-hero-banner');
	var ornament = '<div class="hero__ornament"></div>';
	if( hero.length > 0 ){
		if (hero.length){
			$('#boxed-wrapper').prepend(ornament);
		}
	}

	//
	//
})(document, window, jQuery);
