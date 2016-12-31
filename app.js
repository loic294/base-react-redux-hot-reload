
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var fs = require("fs");
var passport = require('passport');
var compression = require('compression');
var session = require('express-session');

var app = express();

// Active la compression
app.use(compression());

app.set("env", process.env.NODE_ENV || "development");
app.set("host", process.env.HOST || "localhost");
app.set("port", process.env.PORT || 3000);

// var io = require( "socket.io" )();
// app.io = io;

// Loads config files
// var config = {
//   database : require('./config/database'),
//   session : require('./config/session')
// };


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



// var RedisStore = require('connect-redis')(session);
app.use(cookieParser());

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'p05Vljh*JBlLROKqMIa#vH@o5Z*7h3^8y1Mb',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  var User = require("./models/Users").model;

  // console.log("DESERIALIZE USER", id);

  User.findById(id).lean().exec(function(err, user) {
    if(user === null || user._id === null) { done(err, false) }
    console.log("base user", user);
    done(err, user);
  });
});


module.exports = app;
