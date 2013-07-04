var NS = NS || {};
NS.Site = (function(){
	'use strict';
	$(document).on('ready', function(){
		// @todo Write here the Javascript

		// Placeholder Polyfill
		$('input, textarea').placeholder();

		//Parsley Validation
		$('form button').on('click',function(e) {
			$(this).parents('form').parsley( 'validate' );
			e.preventDefault();
		});

		//GOOGLE ANALYTICS EVENTS
        $('.btn').on('click', function(){
            var title = $(this).attr('title');
            _gaq.push(['_trackEvent', 'Button: ' + title, 'Click', $(this).attr('href')]);
        });
	});
}());