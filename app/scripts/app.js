angular.module('app', ['app.controllers', 'ui.router', 'app.services'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "templates/home.html",
		controller: "homeCtrl"
	})
	.state('game', {
		url: "/game",
		templateUrl: "templates/game.html",
		controller: "gameCtrl"
	})
	.state('leaderboard', {
		url: "/leaderboard",
		templateUrl: "templates/leaderboard.html",
		controller: "leaderboardCtrl"
	})
	.state('settings', {
		url: '/settings',
		templateUrl: 'templates/settings.html',
		controller: 'settingsCtrl'
	});

	$urlRouterProvider.otherwise("/home");
});