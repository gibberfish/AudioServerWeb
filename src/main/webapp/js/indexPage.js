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
	
	$(".editPlaylistButton").click (function (event) {
		window.location.href = "/AudioServerWeb/playlist.html";
	});
 
});
