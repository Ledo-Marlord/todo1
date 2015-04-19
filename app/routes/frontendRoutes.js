var express = require('express');
var path = require('path');
var router = express.Router();

///* GET front-end app on any unhandled route */
router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '../../../public/index.html'));
});

module.exports = router;