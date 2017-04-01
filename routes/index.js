var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.jsonp({ip: "TODO ip", port: "Todo port"});
});

module.exports = router;
