var path = require('path');
var debug = require('debug')('ELTR:app-js');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var race = require('./route/race');

var express = require('express');
var app = express();


// Connect to our db
try {
    mongoose.connect('mongodb://localhost/eltr');
    console.log("Mongoose connection established!");
} catch (err) {
    console.log('Mongoose DB Connection FAILED : ' , err);
    // TODO Probably just dip out at this point
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// ROUTES
app.use('/race', race);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    debug(err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  debug(err);
});

module.exports = app;
