const express = require('express');
const superheroe = express.Router();
const Post = require("../models/Post");
const isLoggedIn = require('../middlewares/isLoggedIn');
const onlyMe = require('../middlewares/onlyMe');
const api = require('marvel-api');
 
const marvel = api.createClient({
  publicKey: '001c53cd39a5d5fed13f8c74eb371acc'
, privateKey: '9236075f24b8176802dc6d60bbfc1a5f9bd2dedb'
});

superheroe.get('/:superhero', function(req, response, next) {
  var superhero = req.params.superhero;
  superhero = superhero.replace("_", " ");
  console.log(superhero)
  var evts = [];
  var superData = '';
  var postsSuper = [];
  Post.find({category: superhero}, (err,posts) => {
    postsSuper = posts;
    console.log(postsSuper);
  });
  marvel.characters.findByName(superhero)
  .then(function(res) {
    superData = res.data[0];
    return marvel.characters.events(res.data[0].id);
  })
  .then(res => {
    var evts = res.data;
    evts.sort(function(a, b){return 0.5 - Math.random()});
    response.render('superheroe',{evts: evts, superData: superData, postsSuper: postsSuper});
  })
  .fail(console.error)
  .done();
});


superheroe.get('/comics/:superhero', function(req, response, next) {
  var superhero = req.params.superhero;
  superhero = superhero.replace("_", " ");
  console.log(superhero)
  var titles = [];
  var superData = '';
  marvel.characters.findByName(superhero)
  .then(function(res) {
    superData = res.data[0];
    return marvel.characters.comics(res.data[0].id);
  })
  .then(res => {
    response.render('comics',{titles: res.data, superData: superData});
  })
  .fail(console.error)
  .done();
});


module.exports = superheroe;