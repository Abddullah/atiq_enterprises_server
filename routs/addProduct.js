const express = require('express')
const router = express.Router()
const Product = require('../modals/addProductModal')

router.get('/getProduct', (req, res) => {

    Product.find()
        .exec()
        .then(result => {
            res.json(result)
        }).catch(err => {
            console.log("error", err)
            res.status(500).json({ error: err, message: err })
        })

})


router.post("/addProduct/", (req, res) => {
    const { dateAndTime, productName, productSellingRate, productBuyingRate, localDbKey } = req.body
    console.log(dateAndTime, productName, productSellingRate, productBuyingRate, localDbKey, ">>>>>>>>>======================== Body Add product ========================>>>>>>>>>")
    const product = new Product({
        dateAndTime,
        productName,
        productSellingRate,
        productBuyingRate,
        localDbKey
    });
    product.save()
        .then(result => {
            console.log("result", result)
            res.status(200).json({ message: 'SAVE  SUCCESSFULLY', result })
        }).catch(err => {
            console.log("error", err)
            res.status(500).json({ error: err, message: err })
        })
});

// // //@delete employee
router.post("/deleteProduct/", (req, res) => {
    const { localDbKey } = req.body
    Product.deleteOne({ localDbKey: localDbKey }, {
    }, function (err, result) {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            res.status(200).json({ message: "Product has successfully been deleted!" })
        }
    })
})

router.post("/updateProduct/", (req, res) => {
    const { dateAndTime, productName, productSellingRate, productBuyingRate, localDbKey } = req.body
    Product.update({ "localDbKey": localDbKey }, { "$set": { dateAndTime, productName, productSellingRate, productBuyingRate, } })
        .then((update) => {
            //send response users
            console.log('_________________then_______________')
            res.status(200).json({ message: "Product has successfully been updated!" })

        })
        //catch the error
        .catch((err) => {
            console.log(err, '_________________catch_______________')
            res.status(500).json({ error: err })
        });
})

module.exports = router
