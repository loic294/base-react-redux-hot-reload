
var app = require('../app');
var debug = require('debug')('sofia:server');
var http = require('http');
var https = require('https');
var fs = require("fs");
var path = require("path");
// Loads config files
// var config = {
//   database : require('../config/database'),
//   session : require('../config/session')
// }

module.exports = function(callback) {

  /**
   * Get port from environment and store in Express.
   */

  var port = normalizePort(process.env.PORT || '3000');
  app.set('port', port);
  app.enable('trust proxy');

  // Force une connexion sécurisée
  app.use((req, res, next)=>{

    // console.log("ADDRESSE", req.protocol, req.secure)
    if(!req.secure && app.get("env").includes("production")) {
      res.redirect('https://' + req.get('host') + req.originalUrl);
    }
    next()

  })


  /**
   * Create HTTP server.
   */
  var server = http.createServer(app);

  // Connect to MongoDB using Mongoose
  // var mongoose = require('mongoose');
  // mongoose.set('debug', true);
  // var URI = process.env.MONGODB_URI || config.database.mongo;
  // mongoose.connect(URI);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.on('error', onError);
  server.on('listening', onListening);

  // Load dynamically routes
  fs.readdirSync(__dirname + '/../routes').forEach(function(filename) {
    if (filename.indexOf('.js') > -1) {
      app.use('/', require(__dirname + '/../routes/' + filename)());
    }
  });

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development ') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err // to remove
    });
  });

  /**
   * Normalize a port into a number, string, or false.
   */
  function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }

  /**
   * Event listener for HTTP server "error" event.
   */

  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }

  server.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    callback(app);
  });

}
