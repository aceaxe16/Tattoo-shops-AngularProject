const router = require('express').Router();

const jwt = require('jsonwebtoken');
const { verifyToken } = require('../tokenVerify');

const User = require('../models/user');
const userService = require('../services/userServices');

const mongoose = require('mongoose');
const { async } = require('rxjs');
const db = 'mongodb+srv://branimir88:vgxRxOYslloFK25F@cluster0.98gga50.mongodb.net/?retryWrites=true&w=majority'



mongoose.connect(db);

router.get('/', (req, res) => {
    res.send("Hello from api route")
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save().then((registeredUser) => {

        let payload = { subject: registeredUser._id};
        let token = jwt.sign(payload, "secretKey");
        res.status(200).send({token, registeredUser})
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
                res.status(200).send({token, user})
            }
        }
    })
})

router.get('/profile',verifyToken, async(req, res) => {
    
    const userId = req.userId;
    const user = await userService.getOneUser(userId);
    if(user){
        res.status(200).send(user)    
    }else{
        res.status(404).send("Error")
    }
      
})

router.put('/update',verifyToken, async(req,res) =>{
    const profileData = req.body;
    const userId = req.userId;
    const newUser = await userService.edit(userId, profileData);
    res.status(200).send(newUser)
})

module.exports = router