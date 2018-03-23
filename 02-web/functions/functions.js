// why functions? why not?
// reuse
// scopes - global - everywhere has access
// with functions
// 

// input arr of numbers -> sum
var sum = function(arrOfNumbers) {
  var total = 0;
  
  for (var index = 0; index < arrOfNumbers.length; index++) {
    total = total + arrOfNumbers[index];
  }
  
  return total;

  console.log('hello'); // this will never happen
}

var addFive = function(num) {
  var result = num + 5;
  return result;
}

var numbers = [1,2,3,4];
var scores = [2,3];
// var result = sum( scores );
console.log( addFive( sum(scores) )   );

// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

var calculateAge = function(birthYear, currentYear) {
  var age = currentYear - birthYear;
  var ageBeforeBirthday = age - 1;
  // build the string and return it or...
  var message = "you are either " + ageBeforeBirthday + ' or ' + age;
  return message

  // ...just console log the built string in here
  // console.log(message)
}

calculateAge(2000, 2018)

//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// list = ['cake', 'pudding']
// list[0].length
// [4, 7]

var lengths = function(arrOfStrings) {
  var lengthOfStrings = []

  for (var index = 0; index < arrOfStrings; index++) {
    lengthOfStrings.push( arrOfStrings[index].length );
  }

  return lengthOfStrings;
}

lengths( ['cake', 'pudding'] ); // [4, 7]




























