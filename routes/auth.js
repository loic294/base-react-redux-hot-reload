var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;

module.exports = function() {

   var app = require('express');
   var router = app.Router();

   var Users = require("../models/Users").model


  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function(email, password, done) {
      Users.findOne({ email: email }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

  router.post('/login',
    passport.authenticate('local', { successRedirect: '/dashboard',
       failureRedirect: '/login',
       failureFlash: true })
     );

  router.post('/signup', function(req, res, next) {

    console.log('BODY', req.body)

    Users.findOne({ email : req.body.email }, function(err, user) {

        if (err) return done(err);

        if (user) {
            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {

            var newUser = new Users();
            newUser.nom = req.body.nom;
            newUser.email = req.body.email;
            newUser.password = newUser.generateHash(req.body.password);

            newUser.save(function(err) {
                if (err) throw err;

                req.login(newUser, function(err) {
                  if (err) { return res.send({
                    status : "error",
                    message : err.message
                  }); }
                  return res.send({
                    status : "ok"
                  });
                });



            });
        }

    });

  });


 return router;



}
