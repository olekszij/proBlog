const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});
module.exports = User;
