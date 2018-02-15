require('dotenv').config();
const mongoose = require('mongoose');
const dbURL = process.env.dbURL
const Quiz = require('../models/Quiz');

mongoose.connect(dbURL).then(() => console.log("Conectado!"));

const quizes = [
    {
      question: "¿Cuál es el nombre completo de Capitán América?",
      options: ["Steven 'Steve' Rogers", "Thor Odison", "Bruce Banner"],
      correctOption: 0,
      imgUrl: '',
      category: 'captain america'
    },
    {
      question: "Lugar de Nacimiento",
      options: ["Ohio, Estados Unidos", "Manhattan, Nueva York, Estados Unidos", "Stalingrado, URSS"],
      correctOption: 1,
      imgUrl: '',
      category: 'captain america'
    },
    {
      question: "¿A qué se dedicaba antes de ser un Vengador?",
      options: ["Científico", "Espía ruso", "Soldado profesional"],
      correctOption: 2,
      imgUrl: '',
      category: 'captain america'
    },
    {
      question: "¿Quién es el lider de los Vengadores?",
      options: ["Ultrón", "Capitán América", "Obi Wan Kenobi"],
      correctOption: 1,
      imgUrl: '',
      category: 'signUp'
    },
    {
      question: "¿Cuál es el nombre de Hulk?",
      options: ["Bruce Banner", "Nick Fury", "Peter Parker"],
      correctOption: 0,
      imgUrl: '',
      category: 'signUp'
    },
    {
      question: "¿Qué actor interpreta a Capitán América?",
      options: ["Tom Cruise", "Chris Evans", "Aaron Tailor"],
      correctOption: 1,
      imgUrl: '',
      category: 'signUp'
    },
    {
      question: "¿Qué actriz interpreta a Black Widow?",
      options: ["Natalie Portman", "Gwyneth Paltrow", "Scarlett Johansson"],
      correctOption: 2,
      imgUrl: '',
      category: 'signUp'
    },
    {
      question: "¿Qué actor interpreta a Hulk?",
      options: ["Mark Ruffalo", "Eric Bana", "Lou Ferrigno"],
      correctOption: 0,
      imgUrl: '',
      category: 'signUp'
    },
];

Quiz.collection.drop();

quizes.forEach(p => {
    let pr = new Quiz(p);
    pr.save()
    .then(quiz => console.log(`Quiz  ${quiz.question}`))
    .catch(err => console.log(err));
});