(function (document, window, $) {
	//
	// 		jQuery is ready as $

	var container = $(".cb1-hero-banner");
	// var images = $(container).find('.fusion-gallery-image');
	var images = $(container).find('.fusion-image-element span');

	
	// if (images.count != 0) {
	// 	// TODO
	// }
	var count = 1;

	$('section#content').attr('data-scroll-container', '');
	$(container).attr('data-scroll-section', '');

	$(images).each(function( index ){
		$(this).attr('data-scroll', '');
		$(this).attr('data-scroll-speed', count);
		count++;
	});

	//
	//
})(document, window, jQuery);
