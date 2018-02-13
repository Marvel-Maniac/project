const mongoose = require('mongoose');
const { dbURL } = require('../config');
const User = require('../models/User');
const CERTS = require('../models/certs_types');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

mongoose.connect(dbURL).then(() => console.log("Conectado!"));

let salt = bcrypt.genSaltSync(bcryptSalt);
const users = [
    {
        username: 'SusanaHero',
        password: bcrypt.hashSync("1234", salt),
        imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=250&h=250',
        twitterID: '',
        facebookID: '',
        certifications: ['Hulk', 'Captain America']
    },
    {
        username: 'AlbertoHero',
        password: bcrypt.hashSync("1234", salt),
        imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=250&h=250',
        twitterID: '',
        facebookID: '',
        certifications: ['Thor', 'Daredevil']
    },
    {
        username: 'PepeHero',
        password: bcrypt.hashSync("1234", salt),
        imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=250&h=250',
        twitterID: '',
        facebookID: '',
        certifications: []
    },
];

User.collection.drop();

users.forEach(p => {
    let pr = new User(p);
    pr.save()
        .then(user => console.log(`Usuarios  ${user.username}`))
        .catch(err => console.log(err));
});
