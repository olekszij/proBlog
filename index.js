require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/problog')
  .then(() => {
    console.log('🛰️ mongodb connected 🛰️');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');

app.use(userRoutes, postRoutes);

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.all('*', (req, res) => {
  res.status(404).json('Page not found');
});

app.listen(PORT, () => {
  console.log('🛰️ server 🛰️');
});
