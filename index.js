// var nr = require('newrelic');

require('babel-core/register');
require("babel-polyfill");


require("./bin/index")(function (app) {
  console.log("Express %s server listening on %s:%s", app.get("env"), app.get("host"), app.get("port"));

  if (app.get("env").includes("development")) {
    console.log('DEV SERVER STARTED');
    require("./webpack/server").default();
  }

});
