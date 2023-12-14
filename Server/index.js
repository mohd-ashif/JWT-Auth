const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const UserModel = require('./model/Users');

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose.connect('mongodb://127.0.0.1:27017/employee');



app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
    .then (hash => {
        UserModel.create({name, email, password : hash})
        .then(user => res.json({status:"OK"}))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
  
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
