"use strict";
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
    const cb2Elements = gsap.utils.toArray([
      ".cb2-two-column-feature .fusion-column-wrapper",
    ]);
    if (!document.body.classList.contains("page-id-507")) {
      cb2Elements.forEach((element) => {
        //
        gsap.from(element, {
          y: 30,
          autoAlpha: 0,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "+=500",
            scrub: 1,
          },
        });
      });
    }

    //
    const cb3Elements = gsap.utils.toArray([
      ".cb3-featured-stats .fusion-column-wrapper",
    ]);
    cb3Elements.forEach((element) => {
      //
      gsap.from(element, {
        y: 30,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "+=500",
          scrub: 1,
        },
      });
    });

    //
    const cb4Elements = gsap.utils.toArray([
      ".cb4-image-3-callouts .fusion-column-wrapper",
    ]);
    cb4Elements.forEach((element) => {
      //
      gsap.from(element, {
        y: 30,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "+=500",
          scrub: 1,
        },
      });
    });

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
