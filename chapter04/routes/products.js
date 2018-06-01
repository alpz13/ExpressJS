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

module.exports = router;