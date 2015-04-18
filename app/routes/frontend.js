var express = require('express');
var app = express();
var path = require('path');


// serve static assets
app.use(express.static(__dirname + '/public'));

///* GET front-end app on any unhandled route */
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

module.exports = app;
