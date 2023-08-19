const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const tattooImageSchema = new Schema({
    imageUrl: String,
    description: String,    
    shopId: String
})

const TattooImage = mongoose.model('TattooImage', tattooImageSchema);
module.exports = TattooImage;