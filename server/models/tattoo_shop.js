const mongoose = require('mongoose');




const tattooShopSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,    
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
})

const Shop = mongoose.model('Shop', tattooShopSchema);
module.exports = Shop;