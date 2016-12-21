module.exports = function (req, res, next) {

  if(
    req.user === null ||
    typeof req.user === 'undefined'
  ) {

    if(typeof req.url !== 'undefined' &&
      req.url.indexOf('/a/') === -1 && //false
      req.url.indexOf('/api/') === -1 &&
      req.url.indexOf('/tutors/') === -1
    ) {
      req.session.redirect_after_login = req.url;
      res.redirect('/a/login/');
    } else {
      return next();
    }

  } else {

    if(
      req.url.indexOf('/admin/') > -1 &&
      (
        !req.user.isAdmin
      )
    ) {
      req.session.redirect_after_login = req.url;
      res.redirect('/a/login');
    } else {
      return next();
    }

  }

};
