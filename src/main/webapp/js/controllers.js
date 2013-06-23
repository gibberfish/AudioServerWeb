'use strict';

/* Controllers */

function NowPlayingCtrl($scope, $http) {
	reloadPage($scope, $http);

	setInterval(myMethod, 2000);

	function myMethod( )
	{
		reloadPage($scope, $http);
	}



	/*
	$scope.nowPlaying = {
		"trackId" : "18",
		"artist" : "The Bangles",
		"album" : "All Over The Place",
		"track" : "Going Down To Liverpool",
		"isPlaying" : "N",
		"isShuffle" : "Y",
		"isRepeat" : "Y",
		"isStartOfPlaylist" : "N",
		"isEndOfPlaylist" : "N"
	};
	*/
}

function reloadPage ($scope, $http) {
	$http.get('/AudioServerWeb/svr/getPlayerStatus').success(function(data) {
		$scope.nowPlaying = data;
	});
}

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);