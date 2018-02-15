const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const isLoggedIn = require('../middlewares/isLoggedIn')
const CERTS = require('../models/certs_types');;
const onlyMe = require('../middlewares/onlyMe');
const api = require('marvel-api');
 
const marvel = api.createClient({
  publicKey: '001c53cd39a5d5fed13f8c74eb371acc'
, privateKey: '9236075f24b8176802dc6d60bbfc1a5f9bd2dedb'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  superDatos = [];
  CERTS.pop();

  // Promise.all(CERTS.map((certName) => {
  //   return marvel.characters.findByName(certName)
  //   .then(res => superDatos.push(res.data[0]))
  //   .fail(console.error)
  //   .done();
  // }))

  Promise.all(CERTS.map((certName) => {
    return marvel.characters.findByName(certName)
  }))
  .then(promises => {
    promises.forEach(p => superDatos.push(p.data[0]))
    res.render('index', {superDatos: superDatos});
  })
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
