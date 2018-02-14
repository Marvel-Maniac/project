const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
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
  var cert = req.user.certifications;
  var userId = req.user._id;
  Post.find({user_id: userId})
    .then((posts) => {
      res.render('private', {cert: cert, posts: posts});
    })
    .catch(e => next(e));
});

module.exports = router;
