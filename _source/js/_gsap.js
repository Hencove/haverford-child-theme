import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//
//	? code here will execute before the DOM has fully loaded
//
(function (document, window, $) {
	//
	//	? code here will execute once the page is ready
	//
	// ... silence is golden

	let heroImages = $(".fusion-image-element", ".cb6-interior-banner");

	gsap.to(heroImages, {
		y: -120,
        stagger: 0.2,
		scrollTrigger: {
			trigger: ".cb6-interior-banner",
			scrub: 1,
			start: "top 10%",
			end: "+=400",
		},
	});

	//
	//
	//
})(document, window, jQuery);
