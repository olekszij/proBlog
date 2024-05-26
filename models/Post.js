const mongoose = require('mongoose');
const { User } = require('./User.js');

const Post = mongoose.model('Post', {
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = Post;
