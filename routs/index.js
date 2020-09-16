const express = require('express')
const router = express.Router();
//adimin
router.use('/addEmployee', require('./addEmployee'))


module.exports = router