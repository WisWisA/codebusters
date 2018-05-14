// in lib.js you have function
// to convert f to c
// export that function
// require it in this file and use it
// todo - send a request to api
// console log temperature

var request = require('request');
var yolo = require('./lib');

var url = 'http://omdbapi.com/?t=jaws&apikey=2f6435d9'

request(url, function (error, response, body) {
  var resp = JSON.parse(body)
  console.log( yolo.shout(resp.Title) )
});
