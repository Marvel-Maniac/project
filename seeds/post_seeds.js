require('dotenv').config();
const mongoose = require('mongoose');
const dbURL = process.env.dbURL
const User = require('../models/User');
const Post = require('../models/Post');

mongoose.connect(dbURL).then(() => console.log("Conectado!"));

const posts = [
    {
        title: 'Post1 Hulk',
        content: 'Lorem fistrum no puedor llevame al sircoo sexuarl caballo blanco caballo negroorl qué dise usteer benemeritaar llevame al sircoo amatomaa. A gramenawer te va a hasé pupitaa no puedor me cago en tus muelas por la gloria de mi madre jarl me cago en tus muelas diodenoo de la pradera quietooor',
        imgUrl: '27eca9effa40d2bcaa9eed7ed9c0ca20',
        category: 'hulk',
        user_id: mongoose.Types.ObjectId('5a81d4f5d0b0676a754e3f9d')
    },
    {
        title: 'Post2 Daredevil',
        content: 'Lorem fistrum no puedor llevame al sircoo sexuarl caballo blanco caballo negroorl qué dise usteer benemeritaar llevame al sircoo amatomaa. A gramenawer te va a hasé pupitaa no puedor me cago en tus muelas por la gloria de mi madre jarl me cago en tus muelas diodenoo de la pradera quietooor',
        imgUrl: 'ccf42632ff05285854f7786738dcbbd7',
        category: 'daredevil',
        user_id: mongoose.Types.ObjectId('5a81d4f5d0b0676a754e3f9e')
    },
    {
        title: 'Post3 Thor',
        content: 'Lorem fistrum no puedor llevame al sircoo sexuarl caballo blanco caballo negroorl qué dise usteer benemeritaar llevame al sircoo amatomaa. A gramenawer te va a hasé pupitaa no puedor me cago en tus muelas por la gloria de mi madre jarl me cago en tus muelas diodenoo de la pradera quietooor',
        imgUrl: '2ee00e86de9cbc8478c05af8ae71dacc',
        category: 'thor',
        user_id: mongoose.Types.ObjectId('5a81d4f5d0b0676a754e3f9e')
    },
    {
        title: 'Post4 Daredevil',
        content: 'Diodenoo llevame al sircoo de la pradera quietooor. Qué dise usteer torpedo de la pradera ese pedazo de llevame al sircoo benemeritaar caballo blanco caballo negroorl de la pradera. No puedor jarl a gramenawer qué dise usteer te va a hasé pupitaa te va a hasé pupitaa a gramenawer de la pradera la caidita apetecan llevame al sircoo.',
        imgUrl: 'fc700b9b0070dd9692504450f7a33aed',
        category: 'daredevil',
        user_id: mongoose.Types.ObjectId('5a81d4f5d0b0676a754e3f9e')
    },
    {
        title: 'Post5 Thor',
        content: 'No te digo trigo por no llamarte Rodrigor amatomaa no te digo trigo por no llamarte Rodrigor no te digo trigo por no llamarte Rodrigor jarl va usté muy cargadoo no te digo trigo por no llamarte Rodrigor quietooor. Al ataquerl qué dise usteer ese que llega llevame al sircoo no puedor benemeritaar.Ese hombree pecador está la cosa muy malar tiene musho peligro torpedo. Qué dise usteer la caidita a peich diodeno jarl ese pedazo de la caidita al ataquerl ese pedazo de de la pradera a peich. No puedor de la pradera apetecan te va a hasé pupitaa al ataquerl torpedo al ataquerl fistro.Mamaar amatomaa no te digo trigo por no llamarte Rodrigor pecador diodeno torpedo pupita no te digo trigo por no llamarte Rodrigor tiene musho peligro. Condemor está la cosa muy malar tiene musho peligro condemor te va a hasé pupitaa me cago en tus muelas caballo blanco caballo negroorl ese pedazo de va usté muy cargadoo te va a hasé pupitaa hasta luego Lucas.A gramenawer a gramenawer papaar papaar mamaar ese pedazo de apetecan ese pedazo de a gramenawer llevame al sircoo.',
        imgUrl: '431d3e8a355b7200e347b1fa69461501',
        category: 'thor',
        user_id: mongoose.Types.ObjectId('5a81d4f5d0b0676a754e3f9e')
    },
    {
        title: 'Post6 Captain America',
        content: 'Ad sexuarl ullamco dolore occaecat. Fistro te va a hasé pupitaa incididunt diodenoo ullamco consequat.Llevame al sircoo duis quis caballo blanco caballo negroorl ut dolore amatomaa a wan qué dise usteer aute no puedor. Aliqua nisi ese hombree eiusmod consequat tempor commodo.Ex nostrud papaar papaar diodeno qui ese pedazo de incididunt condemor no puedor al ataquerl. Aliqua pecador enim ese pedazo de tiene musho peligro exercitation torpedo te voy a borrar el cerito torpedo esse. Tempor ut cillum consequat reprehenderit se calle ustée.Qui de la pradera officia eiusmod. Benemeritaar aute velit ese hombree hasta luego Lucas papaar papaar amatomaa enim.',
        imgUrl: '16354f73ea4b8baac4cbccaee2a65b4d',
        category: 'captain america',
        user_id: mongoose.Types.ObjectId('5a81d4f5d0b0676a754e3f9d')
    },
    {
        title: 'Post7 Captain America',
        content: 'Torpedo pupita benemeritaar va usté muy cargadoo la caidita.Elit aliqua consectetur ese hombree por la gloria de mi madre ese que llega ad te va a hasé pupitaa caballo blanco caballo negroorl jarl occaecat.Qui aliqua cillum va usté muy cargadoo exercitation qué dise usteer condemor enim adipisicing. Al ataquerl ullamco te va a hasé pupitaa amatomaa veniam benemeritaar ut. Officia enim ut sexuarl.Tempor ahorarr nisi cillum. Nostrud va usté muy cargadoo ut enim.',
        imgUrl: '58605efb0612c1bb9b12fa8cf77a695c',
        category: 'captain america',
        user_id: mongoose.Types.ObjectId('5a81d4f5d0b0676a754e3f9d')
    },
];

Post.collection.drop();

posts.forEach(p => {
    let pr = new Post(p);
    pr.save()
    .then(post => console.log(`Post  ${post.title}`))
    .catch(err => console.log(err));
});
