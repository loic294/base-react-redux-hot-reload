module.exports = function (req, res, next) {

  console.log("USER HEY", req.user)

  if(req.user === undefined) {
    return res.redirect("/auth/login");
  } else {
    next();
  }

};
