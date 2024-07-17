//
//
import LocomotiveScroll from 'locomotive-scroll';
import "./_thinkco-buttons";
import './_cb1';
import './_cb3';
import "./_cb13";

//
(function (document, window, $) {
	//
	// 		jQuery is ready as $
	//

	const scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true
	});
	scroll.update();

	//
	//
})(document, window, jQuery);
