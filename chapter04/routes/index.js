var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/product_page/:id', function(req, res, next) {
	if(req.params.id === '0'){
		res.render('index', {title: 'Access DENIED!'});
	}
	else {
		next()
	}
}, function(req, res,next){
	res.render('index', {title: 'Welcome User! Mister Red'});
});

module.exports = router;
