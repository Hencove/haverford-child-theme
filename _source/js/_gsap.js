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

	let homepageHeroBannerImages = $(".fusion-imageframe", ".cb1-hero-banner");

	if( homepageHeroBannerImages.length > 0 ){
		//responsive
		let mm = gsap.matchMedia();
		mm.add("(min-width: 640px)", () => {
			gsap.to(homepageHeroBannerImages, {
				y: (i, el) => {
					let offset =
						(4 + parseFloat(i)) * (ScrollTrigger.maxScroll(window) / 100);
					return offset * -1;
				},
				stagger: 0,
				scrollTrigger: {
					trigger: ".cb1-hero-banner",
					scrub: 1,
					start: "top top",
					end: "+=800",
				},
			});
		});
	}
	
	//
	//
	//
	// let standardBannerImages = $(".fusion-image-element", ".cb6-interior-banner");
	// gsap.to(standardBannerImages, {
	// 	y: (i, el) => (1 + parseFloat(i)) * (ScrollTrigger.maxScroll(window) / 100),
	// 	stagger: 0,
	// 	scrollTrigger: {
	// 		trigger: ".cb6-interior-banner",
	// 		scrub: 1,
	// 		start: "top 15%",
	// 		end: "+=200",
	// 	},
	// });


	//
	//
	//
	//
	//
	//
	//
	//
	//

	if( $('body').hasClass('home') ){
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
	}


	//
	//
	//
})(document, window, jQuery);
