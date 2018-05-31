var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , text: 'Hello World'});
});

/* GET home page. */
router.get('/s', function(req, res, next) {
  res.render('index', { title: 'Express' , text: 'Hello World', user:{username: 'Mario'}});
});


router.post('/login', function(req, res, next) {
	res.render('index', {title: 'Login', user: {username: req.body.username}})
});


module.exports = router;
