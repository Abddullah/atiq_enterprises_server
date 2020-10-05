const mongoose = require('mongoose')

const AddExpense = mongoose.Schema({
    dateAndTime: {
        type: String,
        required: true,
    },
    expense: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    localDbKey: {
        type: String,
        required: true,
    },
})

const Expense = mongoose.model('addExpense', AddExpense)
module.exports = Expense
