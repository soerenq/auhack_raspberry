var express = require('express');
var Gpio = require('pigpio').Gpio;
var router = express.Router();

var motor = new Gpio(18, {mode: Gpio.OUTPUT});
var openPos = 1500;
var closedPos = 525;

var prev = openPos;
router.post('/', function(req, res, next) {
    prev = prev === openPos ? closedPos : openPos;
    motor.servoWrite(prev);

    res.sendStatus(200);
});

module.exports = router;
