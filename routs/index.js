const express = require('express')
const router = express.Router();
//adimin
router.use('/addEmployee', require('./addEmployee'))
router.use('/employeeLoan', require('./employeeLoan'))



module.exports = router