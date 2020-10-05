const mongoose = require('mongoose')

const AddInventory = mongoose.Schema({
    dateAndTime: {
        type: String,
        required: false,
    },
    employeeName: {
        type: String,
        required: false,
    },
    product: {
        type: String,
        required: false,
    },
    totalAmount: {
        type: String,
        required: false,
    },
    advanceDetection: {
        type: String,
        required: false,
    },
    loanDetection: {
        type: String,
        required: false,
    },
    finalAmount: {
        type: String,
        required: false,
    },
    localDbKey: {
        type: String,
        required: false,
    },
})

const Inventory = mongoose.model('addInventory', AddInventory)
module.exports = Inventory