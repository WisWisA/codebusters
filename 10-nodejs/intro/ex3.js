
var fs = require('fs');

// callback has a signature
fs.readFile('ex1.js', function(err, data) {
  console.log(data.toString());
});