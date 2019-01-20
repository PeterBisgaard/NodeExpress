const express = require("express");

// Create http server (express app)
const myServer = express();

myServer.get(["/","/index.html"], function(req,res){
    res.sendFile(__dirname + "/public/index.html");
});

myServer.get(["/contact.html"], function(req,res){
    res.sendFile(__dirname + "/public/contact.html");
});

myServer.get(["/css/main.css"], function(req,res){
    res.sendFile(__dirname + "/public/css/main.css");
});

myServer.get(["/js/main.js"], function(req,res){
    res.sendFile(__dirname + "/public/js/main.js");
});


myServer.listen(8080, '127.0.0.1', function(){
    console.log("Example app listening on port 8080")
});
