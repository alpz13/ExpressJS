module.exports = function(code) {
	return function (req, res, next){
		switch(code) {
			case 500:
				res.send('There was an error on the server! sorry.... try again ');
			case 404:
				res.send('Opps.... i did it again');
			case 403:
				res.send('it is forbidden!');
			default:
				res.send('Hmmmm it looks everything OK');
				next();
		}
	}
}