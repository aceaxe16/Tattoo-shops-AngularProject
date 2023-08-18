const User = require('../models/user');


exports.editProfile = (profileId, profileData) => User.findByIdAndUpdate(profileId, profileData)

exports.getOneUser = (userId) => User.findById(userId).lean();

exports.edit = (userId, userData) => User.findByIdAndUpdate(userId, userData);