//
import { debounce } from "./_debounce-throttle.js";

(function (document, window, $) {
  if (!$) {
    console.error("jQuery not loaded for adjust-gradient-lines.js");
    return;
  }

  /**
   * Adjusts the position of a gradient line on cb6 heros w/ no image.
   * It reads the banner's padding-bottom, calculates a new bottom position as
   * (padding-bottom / 2) - 2px, and sets this as a CSS custom property
   * (--actual-padding-bottom) on the banner.
   */
  function adjustGradientLinePosition() {
    // Target elements with both .cb6-interior-banner AND .no-image classes
    const $banners = $(".cb6-interior-banner.no-image");
    const strokeWidthAdjustment = 2; // The 2px to subtract, accounting for stroke width

    if (!$banners.length) {
      return;
    }

    $banners.each(function () {
      const $banner = $(this); // Current banner
      // Get the current padding-bottom.
      const paddingBottomString = $banner.css("padding-bottom");

      // Parse the string value to a number (e.g., "50px" -> 50)
      const numericPaddingBottom = parseFloat(paddingBottomString);

      // Check if parsing was successful
      if (isNaN(numericPaddingBottom)) {
        console.warn(
          "Could not parse padding-bottom value:",
          paddingBottomString,
          "for element:",
          $banner[0],
        );
        return;
      }

      // Calculate the new bottom value
      const adjustedBottomValue =
        numericPaddingBottom / 2 - strokeWidthAdjustment;

      // Convert back to a string with "px"
      const finalCssValue = adjustedBottomValue + "px";

      // Set the SCSS custom property on the banner element
      // This variable positions the line.
      $banner.css("--actual-padding-bottom", finalCssValue);
    });
  }

  // Run the adjustment function when the window is loaded
  $(window).on("load", () => {
    adjustGradientLinePosition(); // Call on initial load

    // DEBOUNCED RESIZE HANDLER
    // If debounce is not available, the resize handler will run on every resize event.
    let resizeHandler = adjustGradientLinePosition; // Default to direct call

    // Check if your specific debounce function is available and how to call it
    if (typeof debounce === "function") {
      console.log("debounce");
      resizeHandler = debounce(adjustGradientLinePosition, 250);
    }
    // Listen for window resize events to re-adjust the line position
    $(window).on("resize", resizeHandler);
  });
})(document, window, jQuery);
