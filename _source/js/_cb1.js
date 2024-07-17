(function (document, window, $) {
	//
	// 		jQuery is ready as $

	var container = $(".cb1-hero-banner");
	var images = $(container).find('.fusion-gallery-image');
	
	// if (images.count != 0) {
	// 	// TODO
	// }
	var count = 1;

	$('html').attr('data-scroll-direction', 'vertical');
	$('section#content').attr('data-scroll-container', '');
	$(container).attr('data-scroll-section', '');
	// $(container).attr('data-scroll-section-inview', '');

	$(images).each(function( index ){
		$(this).attr('data-scroll', '');
		$(this).attr('data-scroll-speed', count);
		// $(this).addClass('is-inview');

		count++;
	});

	//
	//
})(document, window, jQuery);
