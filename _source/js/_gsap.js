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

	let standardBannerImages = $(".fusion-image-element", ".cb6-interior-banner");
	let homepageHeroBannerImages = $(".fusion-imageframe", ".cb1-hero-banner");

	//
	//
	//
	gsap.to(standardBannerImages, {
		y: -120,
		stagger: 0.2,
		scrollTrigger: {
			trigger: ".cb6-interior-banner",
			scrub: 1,
			start: "top 10%",
			end: "+=400",
		},
	});
	gsap.to(homepageHeroBannerImages, {
		y: -120,
		stagger: 0.1,
		scrollTrigger: {
			trigger: ".cb1-hero-banner",
			scrub: 1,
			start: "top 10%",
			end: "100%",
		},
	});

	//
	//
	//
	//
	//
	//
	//
	//
	//

	$("body.home #wrapper").prepend(
		'<div class="homepage-gradient-overlay"></div>'
	);

	gsap.to(".homepage-gradient-overlay", {
		yPercent: -50,
		scrollTrigger: {
			trigger: "body",
			scrub: 1,
			start: "top top",
			end: "+=300",
		},
	});

	//
	//
	//
})(document, window, jQuery);
