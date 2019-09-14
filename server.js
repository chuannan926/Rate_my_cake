// Imports here
var express = require("express");
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Configurations here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.use(express.static( __dirname + '/public/dist/public' ));


app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./routes')(app);




 app.listen(8000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("listening on port 8000")
    }
})