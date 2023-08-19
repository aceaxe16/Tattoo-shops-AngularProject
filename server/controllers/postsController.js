const router = require('express').Router();


const { verifyToken } = require('../tokenVerify');
const imageService = require('../services/imageService');
const mongoose = require('mongoose');

const db = 'mongodb+srv://branimir88:vgxRxOYslloFK25F@cluster0.98gga50.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db);


router.get('/:shopId/posts', async(req, res) => {
    const shopId = req.params.shopId;
    try{
        const shopPosts = await imageService.getShopPosts(shopId);
        return res.status(200).send(shopPosts)
    }catch(error){
        return "Error:" + error
    }
})

router.get('/:postId/post', async(req, res) => {
    const postId = req.params.postId;    
    try{
        const currentPost = await imageService.getOne(postId);
        return res.status(200).send(currentPost)
    }catch(error){
        return res.status(400).send("Error: " + error)
    }
})

router.put('/:postId', async(req, res) =>{
    const postId = req.params.postId;
    const postData = req.body
    try{
        const editedPost = await imageService.edit(postId, postData);
        return res.status(200).send(editedPost)
    }catch(error){
        return res.status(400).send("Error: " + error)
    }
})

router.get('/:postId/delete', async(req, res) => {
    const postId = req.params.postId;
    try{
        const deletedPost = await imageService.delete(postId);
        return res.status(200).send('deleted')
    }catch(error){
        return res.status(400).send("Error: " + error)
    }
})


module.exports = router