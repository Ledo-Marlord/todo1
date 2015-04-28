var express = require('express');
//var path = require('path');
var bodyParser = require('body-parser');
var db = require('./config/db');
var frontendRoutes = require('./app/routes/frontendRoutes');
var apiRoutes = require('./app/routes/apiRoutes');
var app = express();

app.set('port', process.env.PORT || 1337);

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.use(bodyParser);
app.use(express.static(__dirname + '/public'));

app.use('/api', apiRoutes);
app.use('/', frontendRoutes);

app.listen(app.get('port'));
console.log('Listening on port: ' + app.get('port') + '...');
console.log('\r\n');