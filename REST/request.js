//Author: Minh Bui
//Date: 3/4/2016
//Description: calling REST using javascript. This script runs with Node.js and NPM package request

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
