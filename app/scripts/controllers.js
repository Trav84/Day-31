angular.module('app.controllers', ['app.services'])
.controller('homeCtrl', function($scope, $state, randomArray) {

	var myArray = [1,2,3,4,5,6,7,8,9,10];

	$scope.randArray = function() {
		console.log(randomArray(myArray));
	};

	$scope.randArray();

});