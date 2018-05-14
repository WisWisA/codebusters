// write a CLI program
// you can pass in a file name
// the program will count the number of lines of code
// print it in the console

// node loc.js ex1.js
// 24
// node loc.js ex2.js
// 17
// node loc.js loc.js
// 11

// hint: you need the fs module & process.argv

var fs = require('fs');

var buffer = fs.readFileSync( process.argv[2] );
var lines = buffer.toString().split('\n');
console.log(lines.length);