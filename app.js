for (var i = 0; i < 100; i++) {
	// console.log(i + 1);
	if (i % 15 === 0) {
		console.log('FizzBuzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');	
	}

}



var main = '';
for (var i =0; i < 9; i++) {
	main = main + '##';
	// main += '#';
	console.log(main);
}


// document.body.innerHTML = 'change body';

var teacups;
var backgroundColor = 'green';
// teacups = 2; integer = whole number

var numberOfTeaCups = 0;

teacups = ['mint', 'green']
var color = ["black", "green", "red" ];

// for(var i = 0; i < teacups.length; i++) {
// 	numberOfTeaCups = numberOfTeaCups + 1;
// }

for(teacup in teacups) {
	numberOfTeaCups = numberOfTeaCups + 1;	
}

var isEnough;
if (numberOfTeaCups > 1) {
	isEnough = "enough";
} else {
	isEnough = "not enough";
}

document.getElementById('teacups').innerHTML =  numberOfTeaCups;
document.getElementById('enough').innerHTML =  "this is " + isEnough;


//  === / ==

function myFunction(a = 1, b = 2) {
	return a * b;
}

document.getElementById('results').innerHTML =  myFunction();
var colors = color.join(', ');







