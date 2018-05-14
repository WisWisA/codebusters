// what are the libraries that node includes????

// things like
// - http
// - file system
// - os

// modules

var fs = require('fs');

var buffer = fs.readFileSync('ex1.js');

console.log( buffer.toString() );


