var express = require('express');
var bodyParser = require('body-parser');
var app = express();



app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


var session;

app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/Index.html');
});


app.get('/Register',function(req,res){
	res.sendFile(__dirname + '/public/Register.html');
});


app.get('/LogIn',function(req,res){
	res.sendFile(__dirname + '/public/Login.html');
});


app.get('/Project',function(req,res){
	res.sendFile(__dirname + '/public/Project.html');
});


app.get('/About',function(req,res){
	res.sendFile(__dirname + '/public/About.html');
});


app.get('/Members',function(req,res){
	res.sendFile(__dirname + '/public/About.html');
});



app.listen(4000);
console.log("You are listening to Port 4000");