const router = require('express').Router();

const mongoose = require('mongoose');
const db = 'mongodb+srv://branimir88:vgxRxOYslloFK25F@cluster0.98gga50.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db);


router.get('/', (req, res) => {
    res.send(!!mongoose.connect(db) + "  Hello from home route")
})

module.exports = router