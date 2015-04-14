var express = require('express');
var router = express.Router();


// serve static assets
router.use('/public', express.static('public'));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Todo1' });
});

module.exports = router;
