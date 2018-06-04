var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('products', { title: 'Products' });
});

router.get('/req', function (req, res, next) {
	console.log('request sent at: ' + Date.now().toString());
	next();
}, function(req, res) {
	res.send('Hello world');
});

router.get('/err_example', function(req, res) {
	res.sendFile('index.html'); 
});

router.use(function(err, req, res, next) {
	console.error(err);
	res.status(500).send('Something went wrong mister Red');
});

module.exports = router;