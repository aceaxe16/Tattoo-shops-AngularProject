const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const tattooImageSchema = new Schema({
    imageUrl: String,
    description: String,
    _ownerId: mongoose.Types.ObjectId,
    _shopId: mongoose.Types.ObjectId,
})

module.exports = mongoose.model('tattoo-image', tattooImageSchema, 'tattoo-images')