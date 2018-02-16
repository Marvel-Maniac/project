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

  const update = {  
    username: username || req.user.username,
    password: password || req.user.password,
    imgUrl: req.file.filename || req.user.imgUrl
  }
  let id = req.user._id
  User.findByIdAndUpdate(id, update, {new: true}, (err, usr) => {
    if (err){ return next(err); }
    req.flash("info", "Your profile is being updated!");
    return res.redirect(`/onlyme?id=${id}`);
  })
});

userRouter.get('/newPost', onlyMe, function(req, res, next) {
  var user = req.user;
  var certs = req.user.certifications;
  res.render('newPost', {user: user, certs: certs});
});

userRouter.post('/newPost', upload.single('image'), function(req, res, next) {
  const { title, content, category } = req.body 

  const newPost = new Post({  
    title: title,
    content: content,
    category: category,
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

userRouter.get('/editPost/:idPost', function(req, res, next) {
  var postId = req.params.idPost;
  Post.findById(postId, (err, myPost) => {
    if (err) { return next(err); }
    res.render('editPost', { myPost: myPost });
  });
});

userRouter.post('/editPost/:idPost', upload.single('image'), function(req, res, next) {
  let idPost = req.params.idPost;
  const { title, content, currentTitle, currentContent, oldImage, idUser } = req.body;

  const update = {  
    title: title || currentTitle,
    content: content || currentContent,
    imgUrl: req.file.filename || oldImage
  }

  Post.findByIdAndUpdate(idPost, update, {new: true}, (err, pst) => {
    if (err){ return next(err); }
    req.flash("info", "Your post is being updated!");
    return res.redirect(`/onlyme?id=${idUser}`);
  })
});

// userRouter.get('/deletePost/:idPost', (req, res) => {
//   let idUser = req.locals.user_id;
//   let idPost = req.params.idPost;

//   Post.findByIdAndRemove(idPost, (err, posts) => {
//     if (err){ return next(err); }
//     req.flash("info", "Your post is being deleted!");
//     return res.redirect(`/onlyme?id=${idUser}`);
//   });
// });

module.exports = userRouter;