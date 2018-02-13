const express = require('express');
const quiz = express.Router();
const User = require("../models/User");
const Quiz = require("../models/Quiz");
const isLoggedIn = require('../middlewares/isLoggedIn');
const onlyMe = require('../middlewares/onlyMe');

/* GET home page. */
quiz.get('/quizSignup', function(req, res, next) {
  Quiz.find({category: 'SignUp'}).exec((err, quizes) => {
    quizes.sort(function(a, b){return 0.5 - Math.random()});
    var quiz = quizes[0];
    res.render('quiz', {
      quiz: quiz
    });
  });
});

quiz.post('/quizSignup', function(req, res, next) {
  const option = req.body.option;
  if (option == req.body.solution) {
    res.render("./auth/signup", { message: "Indicate username and password" });
    return;
  }

});

module.exports = quiz;