const mongoose = require('mongoose')

const AddEmmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    cnic: {
        type: String,
        required: true,
    },
    localDbKey: {
        type: String,
        required: true,
    },
})

const Employee = mongoose.model('employee', AddEmmployeeSchema)
module.exports = Employee
