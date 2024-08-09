import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//
(function (document, window, $) {
	//
	//	? 	delay animation stuff until window is fully loaded
	//
	$(window).on("load", function () {
		//
		const PostCards = gsap.utils.toArray(".fusion-post-cards .post-card");
		//
		if (PostCards.length) {
			// set the initial state of the elements to faded-out and nudged-down
			gsap.set(PostCards, { opacity: 0, y: 30 });

			// batch animation for all elements
			ScrollTrigger.batch(PostCards, {
				start: "top 90%",
				end: "bottom 10%",
				onEnter: (batch) =>
					gsap.to(batch, { y: 0, autoAlpha: 1, stagger: 0.2, duration: 1 }),
			});
		}
	});

	//
})(document, window, jQuery);
