const TattooImage = require('../models/tattoo-image');


exports.create = (ownerId, imageData, shopId) => TattooImage.create({...imageData, ownerId, shopId})