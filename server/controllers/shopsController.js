const router = require('express').Router();

const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

const { verifyToken } = require('../tokenVerify');
const shopService = require('../services/shopServices');



const db = 'mongodb+srv://branimir88:vgxRxOYslloFK25F@cluster0.98gga50.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db);


router.get('/create', (req, res) => {
    res.send("Hello from create route")
})

//Add tokenVerify
router.post('/create', async(req, res) => {
    const shopData = req.body;
    try{
        await  shopService.create(req.user._id, shopData);
        const userId = req.user._id
        res.status(200).send(shopData)

    }catch(error){
        return res.status(400).send('Error: ' + error )
    }
})


module.exports = router