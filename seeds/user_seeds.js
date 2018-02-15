require('dotenv').config();
const mongoose = require('mongoose');
const dbURL = process.env.dbURL
const User = require('../models/User');
const CERTS = require('../models/certs_types');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

mongoose.connect(dbURL).then(() => console.log("Conectado!").catch(err=>console.log(err)));

let salt = bcrypt.genSaltSync(bcryptSalt);
const users = [
    {
        username: 'SusanaHero',
        password: bcrypt.hashSync("1234", salt),
        imgUrl: 'fa0a032d485e300ed0eb5c154a2015f6',
        twitterID: '',
        facebookID: '',
        certifications: ['hulk', 'captain america']
    },
    {
        username: 'AlbertoHero',
        password: bcrypt.hashSync("1234", salt),
        imgUrl: 'e7a8f1f6174dd2154499923df4ec50aa',
        twitterID: '',
        facebookID: '',
        certifications: ['thor', 'daredevil']
    },
    {
        username: 'PepeHero',
        password: bcrypt.hashSync("1234", salt),
        imgUrl: '832799617f24d5eaedd39ff028971794',
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
