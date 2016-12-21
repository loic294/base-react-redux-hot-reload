module.exports = function() {

  var app = require('express');
  var router = app.Router();

  router.get("*", function(req, res, next) {

    res.render('index', {
      title: 'Hello World',
    });

  })

  router.post("/login", function(req, res, next) {

      console.log("BODY", req.body);

      res.send("Ça marche!")
  })

  return router;

};
