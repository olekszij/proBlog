const express = require('express');
const router = express.Router();
const User = require('../models/User.js'); // Обновите путь
const fileupload = require('express-fileupload');

router.post('/users/', fileupload(), async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then((user) => console.log(user))
    .catch((err) => console.error(err));
  console.log(newUser);
  res.send('Create new user');
});
module.exports = router;
