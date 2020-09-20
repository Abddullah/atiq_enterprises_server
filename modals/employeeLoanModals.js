const mongoose = require('mongoose')

const AddEmmployeeLoanSchema = mongoose.Schema({
    localDbKey: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    cnic: {
        type: String,
        required: true,
    },
})

const Employee = mongoose.model('employeeLoan', AddEmmployeeLoanSchema)
module.exports = Employee
