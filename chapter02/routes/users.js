var express = require('express');
var router = express.Router();
var fs = require('fs');

const jsonString = '[{  "id": 1, "first_name": "Jeanette",  "last_name": "Penddreth",  "email": "jpenddreth0@census.gov",  "gender": "Female",  "ip_address": "26.58.193.2"}, {  "id": 2,  "first_name": "Giavani",  "last_name": "Frediani",  "email": "gfrediani1@senate.gov",  "gender": "Male",  "ip_address": "229.179.4.212"}, {  "id": 3,  "first_name": "Noell",  "last_name": "Bea",  "email": "nbea2@imageshack.us",  "gender": "Female",  "ip_address": "180.66.162.255"}, {  "id": 4,  "first_name": "Willard",  "last_name": "Valek",  "email": "wvalek3@vk.com",  "gender": "Male",  "ip_address": "67.76.188.26"}]';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/json', function(req, res){
		//no format
		//res.send(jsonString);
		// string in json format
		res.send(JSON.parse(jsonString));
	}
);

module.exports = router;
