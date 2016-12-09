var owenWilson = 'Wow'; 
var dharmaInitiative = [4, 8, 15, 16, 23, 42];
var nicolasCage = true;
var user = {
	firstName:'Buster',
	lastName: 'Bluth',
	cast: 2
};

if (5 > 10) {
	console.log('You will never see this')
}

if (5 <= 10) {
	console.log('You will see this')
}

if (5 > 20) {
	console.log('test returns false')
} else {
	console.log('we ended up in our else statement')
}

var jesse = 5;
if (jesse > 10) {
	alert('Hello');
} else {
	alert('sorry, you lose, the var is ' + jesse)
}

var lucille = 'mother';

if (lucille === 'father') {
	alert('not gonna happen');
} else {
	console.log('sorry, this person is a ' + lucille);
}

if (5 < 10) {
	alert('you won\'t end up here');
} else if (5 < 100) {
	alert('You will not end up here either')
} else {
	alert('you shall see this')
}

function addNumbers(number1, number2){
	var addedNumbers = number1 + number2;
	console.log('adding numbers: the result is ' + addedNumbers);
}

addNumbers(100, 200);


function myName(fName){
	console.log('my name is ' + fName);
}

myName('Steven');

var myRealName = function(fName){
	console.log('my real name is ' + fName);
};

myRealName('Jesse');

var selectDoor = function(door){
	console.log(door);
	if(door === 'red'){
		console.log('YOU FOUND THE DOOR')
	} else {
		console.log('SORRY. TRY AGAIN')
	}
}

selectDoor('red');
/*
var cartoons = ['garfield', 'snoopy', 'heathcliff'];
console.log(cartoons[1]);

var snoopyIndex = cartoons.indexOf('snoopy');
console.log(snoopyIndex);
*/
for(var i = 0; i < 10; i++){
	console.log(i);
}

var names = ['george', 'brian', 'jeff', 'oscar', 'jeremy'];
for(var i = 0; i < names.length; i++){
	console.log(names[i] + ' is my friend');
}