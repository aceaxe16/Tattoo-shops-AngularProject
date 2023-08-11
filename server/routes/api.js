const express = require('express');
const router = express.Router();

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
    user.save().then((result) => {
        res.status(200).send(result)
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router