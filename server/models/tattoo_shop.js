const mongoose = require('mongoose');




const tattooShopSchema = new mongoose.Schema({
    imageUrl: String,
    raiting: String,
    shopName: String,
    ownerId: String
})

const Shop = mongoose.model('Shop', tattooShopSchema);
module.exports = Shop;