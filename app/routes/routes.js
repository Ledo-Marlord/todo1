var express = require('express');
var router = express.Router();


// serve static assets
router.use(express.static('public'));
//TODO: Fix this. I think this is the reason that Home Page is not being injected


///* GET home page. */
//router.get('/', function(req, res) {
//  res.sendFile('/index.html', {root: 'public'});
//});

module.exports = router;
