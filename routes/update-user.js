module.exports = function() {

  var app = require('express');
  var router = app.Router();

  var Users = require("../models/Users").model
  var authMiddleware = require("../middleware/auth.js");


  router.post("/update-user", authMiddleware, function(req, res, next) {

      console.log(typeof req.user._id)

      if(typeof req.user !== "undefined" && req.body._id == req.user._id) {

        Users.findById(req.body._id).exec(function(err, user){

          user[req.body.field] = req.body.data;

          user.save((err)=>{
            if(err) return next(err);
            res.send({
              status : "ok",
              user : user
            });
          })



        });
      } else {

        res.send({
          status : "error"
        });

      }
  })


  return router;

};
