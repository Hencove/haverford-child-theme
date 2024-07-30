(function (document, window, $) {
	//
	// 		jQuery is ready as $
    
	// CB3 Featured Stats
	var container = $(".cb3-featured-stats");
	if( container.length > 0 ){
		let wrapperDivs = 
			'<div class="cb3-H-icon"></div><div class="cb3-wrapper-outer"><div class="cb3-wrapper-outer-bottom"><div class="cb3-wrapper-outer-left"></div><div class="cb3-wrapper-outer-right"></div></div><div class="cb3-wrapper-inner"><div class="cb3-wrapper-inner-bottom"><div class="cb3-wrapper-inner-left"></div><div class="cb3-wrapper-inner-right"></div></div>' + $(container).html() + '</div></div>'
		$(container).html(wrapperDivs);
	}

	//
	//
})(document, window, jQuery);
