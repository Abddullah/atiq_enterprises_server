const mongoose = require('mongoose')

const AddProduct = mongoose.Schema({
    dateAndTime: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    productBuyingRate: {
        type: String,
        required: true,
    },
    productSellingRate: {
        type: String,
        required: true,
    },
    localDbKey: {
        type: String,
        required: true,
    },
})

const Product = mongoose.model('addProduct', AddProduct)
module.exports = Product
