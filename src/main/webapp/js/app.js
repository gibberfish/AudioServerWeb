'use strict';

$( document ).ready(function() {
 
	$(".playButton").click (function (event) {
		$.get( "/AudioServerWeb/svr/playOrPause");
	});

	$(".nextButton").click (function (event) {
		$.get( "/AudioServerWeb/svr/nextTrack");
	});
 
	$(".previousButton").click (function (event) {
		$.get( "/AudioServerWeb/svr/previousTrack");
	});

	$(".repeatButton").click (function (event) {
		$.get( "/AudioServerWeb/svr/toggleRepeat");
	});

	$(".shuffleButton").click (function (event) {
		$.get( "/AudioServerWeb/svr/toggleShuffle");
	});
	
 
});

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
