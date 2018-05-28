var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var handler1 = function(req, res, next) {
	req.params.file += '.txt';
	next();
};


app.get('/item/:id', function (req, res) {
	res.send(req.params.id);
});

app.get('/download/:file', handler1 , function (req, res) {
	res.download(__dirname + '/' + req.params.file);
});

module.exports = app;
