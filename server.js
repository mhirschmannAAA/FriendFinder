var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var dataFile = require("./data.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});