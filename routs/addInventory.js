const express = require('express')
const router = express.Router()
const Inventory = require('../modals/addInventoryModal')

router.post("/addInventory/", (req, res) => {
    const {
        dateAndTime, employeeName, product,
        totalAmount, advanceDetection,
        loanDetection, finalAmount,
        localDbKey
    } = req.body
    console.log(dateAndTime, employeeName, product, totalAmount, advanceDetection, loanDetection, finalAmount, localDbKey, ">>>>>>>>>======================== Body Add inventory ========================>>>>>>>>>")
    const inventory = new Inventory({
        dateAndTime,
        employeeName,
        product,
        totalAmount,
        advanceDetection,
        loanDetection,
        finalAmount,
        localDbKey
    });
    inventory.save()
        .then(result => {
            console.log("result", result)
            res.status(200).json({ message: 'SAVE SUCCESSFULLY', result })
        }).catch(err => {
            console.log("error", err)
            res.status(500).json({ error: err, message: err })
        })
});

//@delete inventory
router.post("/deleteInventory/", (req, res) => {
    const { localDbKey } = req.body
    Inventory.deleteOne({ localDbKey: localDbKey }, {
    }, function (err, result) {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            res.status(200).json({ message: "Expense has successfully been deleted!" })
        }
    })
})

router.post("/updateInventory/", (req, res) => {
    const {
        dateAndTime,
        employeeName,
        product,
        totalAmount,
        advanceDetection,
        loanDetection,
        finalAmount,
        localDbKey
    } = req.body

    Inventory.update({ "localDbKey": localDbKey }, { "$set": { dateAndTime, employeeName, product, totalAmount, advanceDetection, loanDetection, finalAmount } })
        .then((update) => {
            //send response users
            console.log('_________________then_______________')
            res.status(200).json({ message: "Expense has successfully been updated!" })
        })
        //catch the error
        .catch((err) => {
            console.log(err, '_________________catch_______________')
            res.status(500).json({ error: err })
        });

})

module.exports = router
