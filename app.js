var express = require('express');
var path = require('path');
var exphbs  = require('express-handlebars');

var routes = require('./routes/index');
var users = require('./routes/users');
var user = require('./routes/user');

var app = express();

// view engine setup

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.use('/', routes);
app.use('/', users);
app.use('/users', user);


module.exports = app;
