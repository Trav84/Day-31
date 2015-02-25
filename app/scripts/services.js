angular.module('app.services', [])
.factory('randomArray', function() {
//Create a function that takes an array of values and returns one randomly selected value from that array.

	return function(array) {

		if (array.constructor !== Array) {
			throw 'You did not enter an array.';
		}

		var randomNum = Math.floor(Math.random() * array.length);
		return array[randomNum];
	}

//Create a function that takes a ROT-13 encrypted string and returns the decrypted version of that string.
//Create a function that takes a string and returns a string with a dash (-) in between each character without using .split or .join.


});