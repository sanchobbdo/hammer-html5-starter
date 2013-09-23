'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
	$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
	$routeProvider.otherwise({redirectTo: '/view1'});
}]);

var NS = NS || {};
NS.Site = (function(){
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
						'eventLabel': 'Clic en: ' + title
					});
				});
			}
		};

		NameSite.init();

	});

}());
