require('dotenv').config();
const mongoose = require('mongoose');
const dbURL = process.env.dbURL
const Certification = require('../models/Certification');
const CERTS = require('../models/certs_types');

mongoose.connect(dbURL).then(() => console.log("Conectado!").catch(err=>console.log(err)));

const certifications = [
    {
      category: 'captain america',
      imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=CaptainAmericaCertificate&w=650&h=250'
    },
    {
      category: 'daredevil',
      imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=DaredevilCertificate&w=650&h=250'
    },
    {
      category: 'spider-man',
      imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Spider-manCertificate&w=650&h=250'
    },
    {
      category: 'hulk',
      imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=HulkCertificate&w=650&h=250'
    },
    {
      category: 'thor',
      imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=ThorCertificate&w=650&h=250'
    },
    {
      category: 'jessica jones',
      imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=JessicaJonesCertificate&w=650&h=250'
    },
    {
      category: 'black widow',
      imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=BlackWidowCertificate&w=650&h=250'
    }
];

Certification.collection.drop();

certifications.forEach(c => {
    let certf = new Certification(c);
    certf.save()
        .then(certificado => console.log(`Certificados  ${certificado.category}`))
        .catch(err => console.log(err));
});
