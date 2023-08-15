const Shop = require('../models/tattoo_shop');

exports.getAll = () => Shop.find({}).populate('owner').lean();

exports.getOne = (shopId) => Shop.findById(shopId).populate("owner").lean();

exports.edit = (shopId, shopData) => Shop.findByIdAndUpdate(shopId, shopData);

exports.delete = (shopId) => Shop.findByIdAndDelete(shopId);

exports.create = (ownerId, shopData) => Shop.create({...shopData, ownerId});