var express = require('express');
var Gpio = require('pigpio').Gpio;
var router = express.Router();

var motor = new Gpio(18, {mode: Gpio.OUTPUT});
var openPos = 1500;
var closedPos = 525;

var prev = openPos;
setInterval(function () {
    prev = prev === openPos ? closedPos : openPos;
    motor.servoWrite(prev);
}, 1000);
router.post('/', function(req, res, next) {
  //TODO if some reward condition is hold


  res.sendStatus(200);

});

module.exports = router;
