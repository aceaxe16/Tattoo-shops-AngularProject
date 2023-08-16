const mongoose = require('mongoose');




const tattooShopSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,    
    ownerId: String
})

const Shop = mongoose.model('Shop', tattooShopSchema);
module.exports = Shop;