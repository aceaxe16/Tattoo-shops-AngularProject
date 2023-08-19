const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const shopController = require('./controllers/shopsController');
const postsController = require('./controllers/postsController');


router.use(homeController);
router.use('/api', authController);
router.use('/shop', shopController);
router.use('/posts', postsController);


module.exports = router;