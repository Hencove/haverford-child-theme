import { debounce, throttle } from "./_debounce-throttle";

(function (document, window, $) {
	//
	// 		jQuery is ready as $

	$(window).on("load", () => {

		// 

        // !other containers to note:
        // .cb2-two-column-feature

        const container = $('.cb-17');
        // const container = $('.cb2-two-column-feature');

        if (!container.length) {
            return;
        }

        function adjustRowHeights() {

            const columnsContainer = container.find('.fusion-builder-row')
                .children('.fusion-layout-column:has(.fusion-builder-row)')
                .find('.fusion-builder-row')
                .children('.fusion-layout-column');

            let rows = [[]];

            // Reset all heading heights before recalculating
            columnsContainer.find('.title').css('min-height', 'auto');

            columnsContainer.each(function (i, col) {
                const heading = $(col).find('.title');
            
                if (heading.length === 0 || !heading.is(':visible')) return; // Ensure title exists and is visible
            
                if (i !== 0) {
                    const prevColRowIndex = columnsContainer.eq(i - 1).find('.title').offset().top;
                    const rowIndex = heading.offset().top;
                    const newRow = rowIndex > prevColRowIndex;
            
                    if (newRow) {
                        rows.push([]); // Start a new row array
                    }
                }
            
                // Push current column into the latest row array
                rows[rows.length - 1].push(col);
            });
            
            // Loop through each row, find max height, and apply it to all items in that row
            rows.forEach(row => {
                let maxHeight = 0;
            
                // Determine the max height in the row
                row.forEach(col => {
                    const heading = $(col).find('.title');
                    const headingHeight = heading.outerHeight();
                    maxHeight = Math.max(maxHeight, headingHeight);
                });
            
                // Apply max height to all elements in the row
                row.forEach(col => {
                    $(col).find('.title').css('min-height', maxHeight + 'px');
                });
            });
        }
        
        //
        //
        //

        adjustRowHeights();

        const debouncedResizeHandler = debounce(() => {
            adjustRowHeights();
        }, 0); 

        // Handle window resize
        window.addEventListener("resize", debouncedResizeHandler);
	});

	//
	//
})(document, window, jQuery);