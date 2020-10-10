const express = require('express')
const router = express.Router()
const EmployeeLoan = require('../modals/employeeLoanModals')

router.post("/addEmployeeLoan/", (req, res) => {
    const { localDbKey, name, amount, date, cnic } = req.body
    console.log(localDbKey, name, amount, date, cnic, ">>>>>>>>>======================== Body ========================>>>>>>>>>")
    const employee = new EmployeeLoan({
        localDbKey,
        name,
        amount,
        date,
        cnic
    });
    employee.save()
        .then(result => {
            console.log("result", result)
            res.status(200).json({ message: 'SAVE SUCCESSFULLY', result })
        }).catch(err => {
            console.log("error", err)
            res.status(500).json({ error: err, message: err })
        })
});

router.get('/getEmployeeLoan', (req, res) => {

    EmployeeLoan.find()
        .exec()
        .then(result => {
            res.json(result)
        }).catch(err => {
            console.log("error", err)
            res.status(500).json({ error: err, message: err })
        })

})

// //@delete employee
router.post("/deleteEmployeeLoan/", (req, res) => {
    const { localDbKey } = req.body
    EmployeeLoan.deleteOne({ localDbKey: localDbKey }, {
    }, function (err, result) {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            res.status(200).json({ message: "Employee has successfully been deleted!" })
        }
    })
})


router.post("/updateEmployeeLoan/", (req, res) => {
    const { localDbKey, name, cnic, amount, date } = req.body
    console.log(localDbKey, '_________________then_______________')
    EmployeeLoan.update({ "localDbKey": localDbKey }, { "$set": { name, cnic, amount, date } })
        .then((update) => {
            //send response users
            res.status(200).json({ message: "Employee has successfully been updated!" })

        })
        //catch the error
        .catch((err) => {
            console.log(err, '_________________catch_______________')
            res.status(500).json({ error: err })
        }
        );
})



module.exports = router
