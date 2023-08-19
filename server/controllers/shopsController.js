const router = require('express').Router();

const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

const { verifyToken } = require('../tokenVerify');
const shopService = require('../services/shopServices');



const db = 'mongodb+srv://branimir88:vgxRxOYslloFK25F@cluster0.98gga50.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db);


router.get('/catalog', async(req, res) => {
    const shops = await shopService.getAll();  
    if(shops){
        res.status(200).send(shops)
    }else{
        res.status(400).send("Error: " + shops);
    }   
})

router.get('/:shopId/details', async(req, res) => {
    const shop = await shopService.getOne(req.params.shopId);
    const userId = req.userId;       

    if(shop){
        res.status(200).send({shop, userId})
    }else{
        res.status(400).send('Error: ' + shop)
    }
})

//Add tokenVerify
router.post('/create', verifyToken, async(req, res) => {
    const shopData = req.body;  
   
    
    try{
        await  shopService.create(req.userId, shopData);        
        res.status(200).send(shopData)

    }catch(error){
        return res.status(400).send('Error: ' + error )
    }
})

router.post('/:shopId/create-post', verifyToken, (req, res) => {
    const {imageUrl, description} = req.body;
    const userId = req.userId;
    const shopId = req.params.shopId;
    res.status(200).send({imageUrl, description, userId, shopId}) 
    

})


module.exports = router