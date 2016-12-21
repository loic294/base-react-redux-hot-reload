
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


// Connect to Redis
var session = require('express-session');
// var RedisStore = require('connect-redis')(session);
app.use(cookieParser());
// app.use(session({
//     store: new RedisStore(config.session.options),
//     secret: config.session.secret,
//     cookie: {
//       maxAge: null,
//       secure: false,
//       httpOnly: false
//     },
//     resave : false,
//     saveUninitialized : true,
// }));

// Vérifie que la session est connectée
// app.use(function (req, res, next) {
//   if (!req.session) {
//     return next(new Error('Redis session not working!')); // handle error
//   }
//   // req.session.cookie = {
//   //   maxAge: 36000000,
//   //   secure: false,
//   //   httpOnly: false
//   // };
//   //console.log('session cookie', req.session);
//   next(); // otherwise continue
// });

app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
//
// passport.serializeUser(function(user, done) {
//   done(null, user._id);
// });
//
// passport.deserializeUser(function(id, done) {
//   var User = require("./models/Users").model;
//   User.findById(id).populate('tuteur').exec(function(err, user) {
//     if(user === null || user._id === null) { done(err, false) }
//     // console.log("base user", user);
//     done(err, user);
//   });
// });


module.exports = app;
