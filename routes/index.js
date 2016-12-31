module.exports = function() {

  var app = require('express');
  var router = app.Router();

  var Users = require("../models/Users").model

  router.get("*", function(req, res, next) {

    res.render('index', {
      title: 'Hello World',
    });

  })

  router.post("/login", function(req, res, next) {

      console.log("BODY", req.body);
      res.send("Ça marche!")
  })

  router.post("/signup", function(req, res, next) {

      console.log("BODY", req.body);

      var user = new Users({
        nom : req.body.nom,
        email : req.body.email,
        password : req.body.password
      });
      user.save(function (err) {
        if (err) {
          return next(err)
        } else {
          res.send(user)
        }
      });



  })

  return router;

};
