const express = require('express');
const cookieSession = require('cookie-session');
const app = express.Router();
const et = require('../modules/errortranslate.js');



app.get('/', function (req, res, next) {
	res.render('index', {title: 'External'});
});

app.use('/middleware', et(403))

module.exports = app;