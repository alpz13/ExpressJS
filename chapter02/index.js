var express = require("express")
var app = express();

app.get('/', function(req, res){
	res.sendFile(__dirname + '/form.html');
});

app.get('/getTest', function (req, res) {
	//body...
	res.send("This is a test get request.");
});

app.get('/postTest', function(req, res){
	res.sendFile(__dirname + '/form.html');
});

app.post('/postTest', function (req, res) {
	res.send("This is a test POST request");
});

app.listen(8081, function () {
	console.log("Express app running at port localhost:8081");
});