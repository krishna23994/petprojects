var Twit = require('twit');
var sentiment=require('sentiment');
var five = require('johnny-five');
var T = new Twit({
  consumer_key:         '***',
  consumer_secret:      '***',
  access_token:         '***',
  access_token_secret:  '***'
});

var board = new five.Board();
board.on('ready', function() {

var button = new five.Button(8);

button.on("press", function() {

T.post('statuses/update', { status: 'Hackathon is place to learn new stuffs' }, function(err, data, response) {
  console.log(data)
})

});

var stream = T.stream('statuses/filter', { track: 'gst' })

stream.on('tweet', function (tweet) {
  var score=sentiment(tweet.text).score;
  if(score>0)
  {
	  var led1=new five.Led(2);
	   led1.on();
	   led1.off();
  }
  else if(score<0)
  {
	  var led2=new five.Led(3);
	   led2.on();
	   led2.off();
  }
  else
  {
	   var led3=new five.Led(4);
	   led3.on();
	   led3.off();
  }
})

});

