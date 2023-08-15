const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const shopController = require('./controllers/shopsController');


router.use(homeController);
router.use('/api', authController);
router.use('/shop', shopController);



module.exports = router;