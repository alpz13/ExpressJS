const express = require('express');
const cookieSession = require('cookie-session');
const app = express.Router();

// dependency config should be at first of the code
app.use(cookieSession({
	name: 'session',
	keys: ['key1', 'key2'],
	maxAge: 24 * 60 * 60 * 1000
}));

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Cookie' });
});

app.get('/view', function(req, res, next) {
	req.session.views = (req.session.views || 0 ) +1;
	res.send('This page has been viewed ' + req.session.views + ' times');
});




module.exports = app;