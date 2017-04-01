var express = require('express');
var Gpio = require('pigpio').Gpio;
var router = express.Router();

var motor = new Gpio(18, {mode: Gpio.OUTPUT});
var pulseWidth = 1200;
var increment = 50;

setInterval(function () {
    motor.servoWrite(pulseWidth);

    /*pulseWidth += increment;
    if (pulseWidth >= 2000) {
        increment = -50;
    } else if (pulseWidth <= 1000) {
        increment = 50;
    }*/
}, 1000);
router.post('/', function(req, res, next) {
  //TODO if some reward condition is hold


  res.sendStatus(200);

});

module.exports = router;
