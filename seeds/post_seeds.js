const mongoose = require('mongoose');
const { dbURL } = require('../config');
const User = require('../models/User');
const Post = require('../models/Post');

mongoose.connect(dbURL).then(() => console.log("Conectado!"));

const posts = [
    {
        title: 'Post1 Hulk',
        content: 'Lorem fistrum no puedor llevame al sircoo sexuarl caballo blanco caballo negroorl qué dise usteer benemeritaar llevame al sircoo amatomaa. A gramenawer te va a hasé pupitaa no puedor me cago en tus muelas por la gloria de mi madre jarl me cago en tus muelas diodenoo de la pradera quietooor',
        imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=250&h=250',
        category: 'Hulk',
        user_id: mongoose.Types.ObjectId('5a81d4f5d0b0676a754e3f9d')
    },
    {
        title: 'Post2 Daredevil',
        content: 'Lorem fistrum no puedor llevame al sircoo sexuarl caballo blanco caballo negroorl qué dise usteer benemeritaar llevame al sircoo amatomaa. A gramenawer te va a hasé pupitaa no puedor me cago en tus muelas por la gloria de mi madre jarl me cago en tus muelas diodenoo de la pradera quietooor',
        imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=250&h=250',
        category: 'Daredevil',
        user_id: mongoose.Types.ObjectId('5a81d4f5d0b0676a754e3f9e')
    },
    {
        title: 'Post3 Thor',
        content: 'Lorem fistrum no puedor llevame al sircoo sexuarl caballo blanco caballo negroorl qué dise usteer benemeritaar llevame al sircoo amatomaa. A gramenawer te va a hasé pupitaa no puedor me cago en tus muelas por la gloria de mi madre jarl me cago en tus muelas diodenoo de la pradera quietooor',
        imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=250&h=250',
        category: 'Thor',
        user_id: mongoose.Types.ObjectId('5a81d4f5d0b0676a754e3f9e')
    },
];

Post.collection.drop();

posts.forEach(p => {
    let pr = new Post(p);
    pr.save()
    .then(post => console.log(`Post  ${post.title}`))
    .catch(err => console.log(err));
});
