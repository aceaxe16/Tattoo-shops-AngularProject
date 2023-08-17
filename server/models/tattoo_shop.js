const mongoose = require('mongoose');




const tattooShopSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,    
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
})

const Shop = mongoose.model('Shop', tattooShopSchema);
module.exports = Shop;