const express = require('express')
const router = express.Router()
const Expense = require('../modals/AddExpenseModal')

router.post("/addExpense/", (req, res) => {
    const { dateAndTime, expense, amount, localDbKey } = req.body
    console.log(dateAndTime, expense, amount, localDbKey, ">>>>>>>>>======================== Body Add expense ========================>>>>>>>>>")
    const expenses = new Expense({
        dateAndTime,
        expense,
        amount,
        localDbKey
    });
    expenses.save()
        .then(result => {
            console.log("result", result)
            res.status(200).json({ message: 'SAVE  SUCCESSFULLY', result })
        }).catch(err => {
            console.log("error", err)
            res.status(500).json({ error: err, message: err })
        })
});

router.get('/getExpense', (req, res) => {

    Expense.find()
        .exec()
        .then(result => {
            res.json(result)
        }).catch(err => {
            console.log("error", err)
            res.status(500).json({ error: err, message: err })
        })

})

// // //@delete expense
router.post("/deleteExpense/", (req, res) => {
    const { localDbKey } = req.body
    Expense.deleteOne({ localDbKey: localDbKey }, {
    }, function (err, result) {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            res.status(200).json({ message: "Expense has successfully been deleted!" })
        }
    })
})

router.post("/updateExpense/", (req, res) => {
    const { dateAndTime, expense, amount, localDbKey } = req.body
    console.log(dateAndTime, expense, amount, localDbKey, ">>>>>>>>>======================== Body Add expense ========================>>>>>>>>>")
    Expense.update({ "localDbKey": localDbKey }, { "$set": { dateAndTime, expense, amount, } })
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
