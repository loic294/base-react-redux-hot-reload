module.exports = function() {

  var app = require('express');
  var router = app.Router();

  var Users = require("../models/Users").model

  var authMiddleware = require("../middleware/auth.js");



  router.get([
    "/dashboard"
  ], authMiddleware, function(req, res, next) {

      console.log("USER", req.user);
      if(typeof req.user !== "undefined") {

        Users.findById(req.user._id).select(
          "nom email _id"
        ).exec(function(err, user){

          res.render('index', {
            title: 'Hello World',
            user : JSON.stringify(user)
          });

        });

      }
  })

  router.get("/auth/*", function(req, res, next) {

      res.render('auth', {
        title: 'Hello World'
      });

  })



  return router;

};
