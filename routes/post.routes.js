const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js'); // Обновите путь
const fileupload = require('express-fileupload');

router.post('/posts/', fileupload(), async (req, res) => {
  console.log(req.body);
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  newPost
    .save()
    .then((post) => console.log(post))
    .catch((err) => console.error(err));
  console.log(newPost);
  res.send('Create new post');
});
module.exports = router;
