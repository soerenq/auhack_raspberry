var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  //TODO if some reward condition is hold


  res.sendStatus(200);
});

module.exports = router;
