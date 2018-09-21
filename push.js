var express=require("express");
var Twit = require('twit');
var T = new Twit({
  consumer_key:        '***',
  consumer_secret:      '***',
  access_token:         '***',
  access_token_secret:  '***'
});
var app=new express();
app.get('/tweet', function (req, res) {
	T.post('statuses/update', { status: req.query.tweet }, function(err, data, response) {
  console.log(data)
});
});

app.listen(8080);