var express = require('express');
var Gpio = require('pigpio').Gpio;
var router = express.Router();

var motor = new Gpio(18, {mode: Gpio.OUTPUT});
var pulseWidth = 2000;
var increment = 250;

setInterval(function () {
    motor.servoWrite(pulseWidth);

    pulseWidth += increment;
    if (pulseWidth >= 4000) {
        increment = -increment;
    } else if (pulseWidth <= 1000) {
        increment = -increment;
    }
    console.log("increment: " + increment);
    console.log("PulseWidth: " + pulseWidth);
}, 10000);
router.post('/', function(req, res, next) {
  //TODO if some reward condition is hold


  res.sendStatus(200);

});

module.exports = router;
