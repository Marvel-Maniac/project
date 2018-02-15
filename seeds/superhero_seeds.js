require('dotenv').config();
const mongoose = require('mongoose');
const { dbURL } = require('../config');
const Superheroe = require('../models/Superheroe');

mongoose.connect(dbURL).then(() => console.log("Conectado!"));

const superheroes = [
    {
        marvel_id: '1009220',
        name_hero: 'Captain America',
        description: "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America\' one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
        imgUrl: 'https://www.impulsivos.es/images/productos/080115-figura-articulada-capitan-america-100-cm.jpg',
    },
    {
        marvel_id: '1009262',
        name_hero: 'Daredevil',
        description: "Abandoned by his mother, Matt Murdock was raised by his father, boxer \"Battling Jack\" Murdock, in Hell's Kitchen. Realizing that rules were needed to prevent people from behaving badly, young Matt decided to study law; however, when he saved a man from an oncoming truck, it spilled a radioactive cargo that rendered Matt blind while enhancing his remaining senses. Under the harsh tutelage of blind martial arts master Stick, Matt mastered his heightened senses and became a formidable fighter.",
        imgUrl: 'https://www.impulsivos.es/images/productos/080115-figura-articulada-capitan-america-100-cm.jpg',
    },
    {
        marvel_id: '1009664',
        name_hero: 'Thor',
        description: "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
        imgUrl: 'https://www.impulsivos.es/images/productos/080115-figura-articulada-capitan-america-100-cm.jpg',
    },
    {
        marvel_id: '1009351',
        name_hero: 'Hulk',
        description: "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
        imgUrl: 'https://s7d9.scene7.com/is/image/DisneyStoreES/412315693189?$yetiProductThumb$&defaultImage=no-image-es_es',
    },
    {
        marvel_id: '1009610',
        name_hero: 'Spider-Man',
        description: "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
        imgUrl: 'https://s7d9.scene7.com/is/image/DisneyStoreES/412315693189?$yetiProductThumb$&defaultImage=no-image-es_es',
    },
];

Superheroe.collection.drop();

superheroes.forEach(p => {
    let pr = new Superheroe(p);
    pr.save()
    .then(superhero => console.log(`Superheroe  ${superhero.name_hero}`))
    .catch(err => console.log(err));
});

//mongoose.disconnect();