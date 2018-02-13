const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const onlyMe = require('../middlewares/onlyMe');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/private', isLoggedIn, function(req, res, next) {
  res.render('private');
});


router.get('/onlyme', onlyMe, function(req, res, next) {
  var user = req.user;
  var cert = req.user.certifications;
  res.render('private', {user: user, cert: cert});
});

module.exports = router;
