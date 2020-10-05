const express = require('express')
const router = express.Router();
//adimin
router.use('/addEmployee', require('./addEmployee'))
router.use('/employeeLoan', require('./employeeLoan'))
router.use('/addProduct', require('./addProduct'))
router.use('/addExpense', require('./addExpense'))
router.use('/addInventory', require('./addInventory'))



module.exports = router