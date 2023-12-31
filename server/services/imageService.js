const TattooImage = require('../models/tattoo-image');


exports.create = (ownerId, imageData, shopId) => TattooImage.create({...imageData, ownerId, shopId})
exports.getShopPosts = (shopId) => TattooImage.find({shopId:shopId}).lean();
exports.getOne = (postId) => TattooImage.find({_id:postId}).lean();
exports.edit = (postId, postData) => TattooImage.findByIdAndUpdate(postId, postData);
exports.delete = (postId) => TattooImage.findByIdAndDelete(postId);