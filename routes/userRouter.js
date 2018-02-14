const express = require('express');
const userRouter = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const isLoggedIn = require('../middlewares/isLoggedIn');
const onlyMe = require('../middlewares/onlyMe');
const multer = require('multer');
const upload = multer({ dest: __dirname + '/../uploads' });

userRouter.get('/editProfile', onlyMe, function(req, res, next) {
  var user = req.user;
  res.render('editProfile', {user: user});
});

userRouter.post('/editProfile', upload.single('image'), function(req, res, next) {
  const { username, password } = req.body 
  console.log(req.file);

  const update = {  
    username: username || req.user.username,
    password: password || req.user.password,
    imgUrl: req.file.filename || req.user.imgUrl
  }
  let id = req.user._id
  console.log('este es mi user id guardado: ' + id);
  User.findByIdAndUpdate(id, update, {new: true}, (err, usr) => {
    if (err){ return next(err); }
    return res.redirect(`/onlyme?id= ${id}`);
  })
});

userRouter.get('/newPost', onlyMe, function(req, res, next) {
  var user = req.user;
  var certs = req.user.certifications;
  res.render('newPost', {user: user, certs: certs});
});

userRouter.post('/newPost', upload.single('image'), function(req, res, next) {
  const { title, content, category } = req.body 
  console.log(req.body.category);

  const newPost = new Post({  
    title: title,
    content: content,
    imgUrl: req.file.filename,
    user_id: req.user._id
  });

  newPost.save().then(c => {
    console.log('Post created');
    req.flash('info', "Post created")
    res.redirect(`/onlyme?id= ${id}`);
  })
    .catch(e => {
      console.log('Error creating post');
      req.flash('info', e.message)
      res.redirect('/newPost');
    })
});

userRouter.get('/editPost', function(req, res, next) {
  var postId = req.query.id;
  Post.findById(postId, (err, myPost) => {
    if (err) { return next(err); }
    res.render('editPost', { myPost: myPost });
  });
});



module.exports = userRouter;