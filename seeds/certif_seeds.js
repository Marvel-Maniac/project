require('dotenv').config();
const mongoose = require('mongoose');
const dbURL = process.env.dbURL
const Certification = require('../models/Certification');
const CERTS = require('../models/certs_types');

mongoose.connect(dbURL).then(() => console.log("Conectado!").catch(err=>console.log(err)));

const certifications = [
    {
      category: 'captain america',
      imgUrl: 'http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2014/04/captain-america-earns-top-spot-at-box-office.jpg'
    },
    {
      category: 'daredevil',
      imgUrl: 'http://d3u67r7pp2lrq5.cloudfront.net/product_photos/37089327/Daredevil---Amir-Hackett-WM_400w.jpg'
    },
    {
      category: 'spider-man',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2f0BbWIEZLXNo12_OjD5Ar52DRvRMMIfAxomKVVryS2Dz6MmnQ'
    },
    {
      category: 'hulk',
      imgUrl: 'http://www.marvel-hq.com/wp-content/uploads/2016/05/portrait_hulk_red.png'
    },
    {
      category: 'thor',
      imgUrl: 'https://d3fa68hw0m2vcc.cloudfront.net/834/177055370.jpeg'
    },
    {
      category: 'jessica jones',
      imgUrl: 'http://i.imgur.com/zEgC4F7.png'
    },
    {
      category: 'black widow',
      imgUrl: 'http://cdn02.cdn.justjaredjr.com/wp-content/uploads/headlines/2018/01/black-widow-movie-newsies.jpg'
    }
];

Certification.collection.drop();

certifications.forEach(c => {
    let certf = new Certification(c);
    certf.save()
        .then(certificado => console.log(`Certificados  ${certificado.category}`))
        .catch(err => console.log(err));
});
