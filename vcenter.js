/**
 * Author: James Colannino
 * Email: crankycyclops@gmail.com
 *
 * A simple plugin that vertically centers a div or other block element relative
 * to its parent.
 * 
 * This is free and unencumbered software released into the
 * public domain. See LICENSE for more details.
 */
$.fn.center = function(options) {

	// user might want to offset the vertical height by some pixel value
	var offset = 0;
	if (undefined != options && undefined != options.offset) {
		offset = options.offset;
	}

	$.each(this, function (i, element) {

		var space = $(element).parent().height() - $(element).outerHeight();

		if (space > 1) {

			var cssProperty = 'margin-top';

			// use padding instead of margin-top (effects the way some things are rendered)
			if (undefined != options && undefined != options.padding && options.padding) {
				cssProperty = 'padding-top';
			}

			$(element).css(cssProperty, '' + (Math.floor(space / 2) + offset) + 'px');
		}
	});
};

