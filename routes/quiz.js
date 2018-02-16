const express = require("express");
const quiz = express.Router();
const User = require("../models/User");
const Quiz = require("../models/Quiz");
const isLoggedIn = require("../middlewares/isLoggedIn");
const onlyMe = require("../middlewares/onlyMe");

quiz.get("/quizSignup", function(req, res, next) {
  Quiz.find({ category: "signUp" }).exec((err, quizes) => {
    quizes.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    var quiz = quizes[0];
    res.render("quiz", {
      quiz: quiz
    });
  });
});

quiz.post("/quizSignup", function(req, res, next) {
  const option = req.body.option;
  if (option == req.body.solution) {
    res.render("./auth/signup", {
      message: "Congratulations! You are a Marvel Maniac"
    });
    return;
  } else {
    Quiz.find({ category: "signUp" }).exec((err, quizes) => {
      quizes.sort(function(a, b) {
        return 0.5 - Math.random();
      });
      var quiz = quizes[0];
      res.render("quiz", {
        quiz: quiz,
        message: "You didnt pass the signup quiz. Try Again!"
      });
    });
  }
});

quiz.get("/quiz/:superhero", isLoggedIn, function(req, res, next) {
  var superhero0 = req.params.superhero;
  var arrOptions = ["Question1", "Question2", "Question3"];
  superhero = superhero0.replace("_", " ");
  // superhero = superhero.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })
  Quiz.find({ category: superhero }).exec((err, quizes) => {
    quizes.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    res.render("quizSuperhero", {
      quizes: quizes,
      arrOptions: arrOptions,
      superhero: superhero0
    });
  });
});

quiz.post("/quizSuperhero", isLoggedIn, function(req, res, next) {
  const option1 = req.body.Question1;
  const option2 = req.body.Question2;
  const option3 = req.body.Question3;
  const heroe = req.body.heroe;
  let id = req.user._id;
  if (
    option1 == req.body.solution[0] &&
    option2 == req.body.solution[1] &&
    option3 == req.body.solution[2]
  ) {
    let id = req.user._id;
    User.find({ _id: id })
      .then(us => {
        var certUser = us[0].certifications;
        certUser.push(heroe);
        return certUser;
      })
      .then(cert => {
        const update = {
          certifications: cert
        };
        User.findByIdAndUpdate(id, update, { new: true }, (err, usr) => {
          if (err) {
            return next(err);
          }
        });
      })
      .catch(e => next(e));
    req.flash("info", "Congratulations! You got a new Certification!");
    res.redirect(`/onlyme?id=${id}`);
    return;
  } else {
    req.flash("info", "You didn't pass the quiz. Try again.");
    res.redirect(`/quiz/${heroe}`);
  }
});

module.exports = quiz;
