module.exports = function() {

  var app = require('express');
  var router = app.Router();

  router.get("/", function(req, res, next) {

    res.render('index', {
      title: 'Hello World',
    });

  })

  return router;

};
