angular.module('app.controllers', ['app.services'])
.controller('homeCtrl', function($scope, $state, randomArray, ROT13, dashString) {

	var myArray = [1,2,3,4,5,6,7,8,9,10];

	$scope.randArray = function() {
		console.log(randomArray(myArray));
	};

	$scope.randArray();

	$scope.rot = ROT13('Hello');
	console.log($scope.rot);

	$scope.dash = dashString('Hello I am Travis');
	console.log($scope.dash);

});