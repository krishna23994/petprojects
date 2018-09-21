
var five = require('johnny-five');
var board = new five.Board();
 
board.on('ready', function() {
 rotate = new five.Sensor({
    pin: "A0"
  });
  
   board.repl.inject({
    pot: rotate
  });
  
    rotate.on("data", function() {
    console.log(this.value);
  });
});



