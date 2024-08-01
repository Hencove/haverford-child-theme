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
	$("body.home #wrapper").prepend(
		'<div class="homepage-gradient-overlay"></div>'
	);
	$(window).on("load", function () {
		if ($("body").hasClass("home")) {
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

		const homepageHeroBannerImages = gsap.utils.toArray(
			".cb1-hero-banner .fusion-imageframe"
		);
		const PostCards = gsap.utils.toArray(".fusion-post-cards .post-card");
		//
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

		//
		//
		if (homepageHeroBannerImages.length > 0) {
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
	});

	//
	//
	//
})(document, window, jQuery);
