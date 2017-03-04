//Author: Minh Bui
//Date: 3/4/2016
//Description: calling REST using javascript. This script runs with Node.js and NPM package request

var request = require('request');

//Lets configure and request
request({
    url: 'http://localhost:7474/db/data/cypher', //URL to hit
   // qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'POST',
    //Lets post the following key/values as form
    json: {
        "query": "MATCH (x {name:'I'})-[r]->(n) RETURN type(r), n.name,n.age",
        "params":{} 
    }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
}
});
