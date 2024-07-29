var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var axios = require('axios');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// app.get('/add', function(req, res) {
//   let num1 = req.query.n1;
//   let num2 = req.query.n2;
//   let result = Number(num1) + Number(num2);
//   res.send(result.toString());
// })

// app.get('/add', function(req, res) {
//   let num1 = req.query.n1;
//   let num2 = req.query.n2;
//   let result = null;
//   if (num1 > 1000){
//     result = Number(num2) * Number(num2);
//   }else result = "false";

//   res.send(result.toString());
// })

app.post('/add', function(req, res) {
  let num1 = req.body.n1; //post 는 body get 은 query
  let num2 = req.body.n2;
  let result = null;
  if (num1 > 1000){
    result = Number(num2) * Number(num2);
  }else result = "false";

  res.send(result.toString());
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
