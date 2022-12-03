var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");

//var indexRouter = require('../routes');

var corsOptions = {
  origin: "http://localhost:4200"
};

var productRouter = require('../routes/posts');
var errorHandler = require('./error-handler');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../../app/pages/errors'));
app.set('view engine', 'ejs');

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')))

//app.use('/', indexRouter);

app.use('/api/posts', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(res.render('../views/404'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;