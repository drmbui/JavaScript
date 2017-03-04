//Author: Minh Bui
//Date: 3/4/2016
//Description: calling REST using javascript. This script runs with Node.js and NPM xmlhttprequest

function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "Your Rest URL Here", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
}
function Getaction() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp =  new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:7474/db/data/",false);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    console.log(response);
}
Getaction();
