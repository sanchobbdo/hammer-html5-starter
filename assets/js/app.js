var NS = NS || {};
NS.Site = (function(){
	'use strict';
	$(document).on('ready', function(){
		// @todo Write here the Javascript

		var NameSite = {
			init: function () {
				this.bindUIActions();

				// Placeholder Polyfill
				$('input, textarea').placeholder();
			},
			bindUIActions: function () {

				$('#id').on('click', function (e) {
					//actions
					e.preventDefault();
				});

				//GOOGLE ANALYTICS EVENTS
				$('.btn').on('click', function () {
					var title = $(this).text();

					ga('send', {
						'hitType': 'event',          // Required.
						'eventCategory': 'button',   // Required.
						'eventAction': 'click',      // Required.
						'eventLabel': 'Clic en: ' + title,
						'eventValue': 1
					});
				});
			}
		};

		NameSite.init();

	});

}());