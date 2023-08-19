const router = require('express').Router();


const { verifyToken } = require('../tokenVerify');
const imageService = require('../services/imageService');
const mongoose = require('mongoose');

const db = 'mongodb+srv://branimir88:vgxRxOYslloFK25F@cluster0.98gga50.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db);


router.get('/:shopId', async(req, res) => {
    const shopId = req.params.shopId;
    try{
        const shopPosts = await imageService.getShopPosts(shopId);
        return res.status(200).send(shopPosts)
    }catch(error){
        return "Error:" + error
    }
})


module.exports = router