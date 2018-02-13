const express = require('express');
const test = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const onlyMe = require('../middlewares/onlyMe');
const api = require('marvel-api');
 
const marvel = api.createClient({
  publicKey: '001c53cd39a5d5fed13f8c74eb371acc'
, privateKey: '9236075f24b8176802dc6d60bbfc1a5f9bd2dedb'
});


test.get('/test', function(req, response, next) {
  var titles = [];
  marvel.characters.findByName('spider-man')
  .then(function(res) {
    return marvel.characters.events(res.data[0].id);
  })
  .then(res => {
    response.render('test',{titles: res.data});
  })
  .fail(console.error)
  .done();
});

module.exports = test;