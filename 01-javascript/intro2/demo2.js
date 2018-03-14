console.log('demo2');

/*
The Fortune Teller
why pay a fortune teller when you can program it yourself.
Store the following into variables: 

number of children
partner's name
geographic location
job title

output the fortune to the screen like so:
You will be X in Y, and married to Z with N kids
*/

var numberOfChildren = 7;
var partnersName = 'miranda';
var geographicLocation = 'usa';
var jobTitle = 'president';

var fortune = 'You will be ' + jobTitle + ' in ' + geographicLocation + ', and married to ' + partnersName + ' with ' + numberOfChildren + ' kids';

console.log(fortune);

/*
Write a program to work out the area of a rectangle
collect the width & height from the user
calculate and area
display the result

hints
-----
prompt() for input
console.log() or alert() for output
Number() for type conversion

extension
--------
how about we change program to add 2 numbers instead?
collect 2 numbers from user
add them
display result
*/

// var width = prompt('enter width')
// var height = prompt('enter height')
// var area = width * height;
// console.log('the area is ' + area);

var num1 = Number(prompt('enter num1'))
var num2 = Number(prompt('enter num2'))
var sum = num1 + num2;
console.log('the sum is ' + sum);

// var age = 15




