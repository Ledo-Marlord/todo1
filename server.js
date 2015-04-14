var express = require('express');
//var path = require('path');
var routes = require('./app/routes/routes');
var app = express();

app.set('port', process.env.PORT || 1337);

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.use('/', routes);

app.listen(app.get('port'));
console.log('Listening on port: ' + app.get('port') + '...');
console.log('\r\n');