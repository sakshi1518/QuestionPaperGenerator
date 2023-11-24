const express = require('express');
const mongoose = require('mongoose');
const questionRoutes = require('./View/questionRouter')
require('dotenv').config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.DB_LINK, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully Connected to Database")
}).catch(err => {
    console.log(err.message);
});

// Use question routes
app.use('/', questionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${3000}`);
});
