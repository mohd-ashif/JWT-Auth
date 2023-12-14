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
app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());

mongoose.connect('mongodb://127.0.0.1:27017/employee')




app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({ name, email, password: hash })
            .then(user => res.json("success"))
            .catch(err => res.json(err))
    })
    .catch(err => res.json(err));

});

app.post("/login" , (req, res) => {
    const {email, password} = req.body
    UserModel.findOne({email : email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password ,(err, response) => {
                if(response){
                   const token = jwt.sign({email : user.email,role:user.role }, 
                    " jwt-secret-key", {expiresIn: '1d'})
                    res.cookie('token', token)
                    return res.json("success")
                }else{
                    return res.json("the password is incorrect ")
                }
            })

        }else{
            return res.json("NO record existed")
        }
    })
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
