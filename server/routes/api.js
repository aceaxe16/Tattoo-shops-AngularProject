const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const User = require('../models/user');

const mongoose = require('mongoose');
const db = 'mongodb+srv://branimir88:vgxRxOYslloFK25F@cluster0.98gga50.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db);


router.get('/', (req, res) => {
    res.send(!!mongoose.connect(db) + "  Hello from api route")
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save().then((registeredUser) => {

        let payload = { subject: registeredUser._id};
        let token = jwt.sign(payload, "secretKey");
        res.status(200).send({token})
    }).catch((err) => {
        console.log(err);
    })
})

router.post('/login', (req, res) =>{
    let userData = req.body

    User.findOne({email: userData.email}).then((user) => {
        if(!user){
            res.status(401).send("Invalid email")
        }else {
            if(user.password !== userData.password){
                res.status(401).send('Invalid password')
            }else{
                let payload = { subject: user._id };
                let token = jwt.sign(payload, "secretKey");
                res.status(200).send({token})
            }
        }
    })
})

module.exports = router