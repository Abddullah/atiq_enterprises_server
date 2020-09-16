const express = require('express')
const router = express.Router()
const Employee = require('../modals/addEmployeeMoadl')

router.post("/addEmployee/", (req, res) => {
    const { name, phone, address, cnic, localDbKey } = req.body
    console.log(name, phone, address, cnic, localDbKey, ">>>>>>>>>======================== Body ========================>>>>>>>>>")
    const employee = new Employee({
        name,
        phone,
        address,
        cnic,
        localDbKey
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

// //@delete employee
router.post("/deleteemployee/", (req, res) => {
    const { localDbKey } = req.body
    Employee.deleteOne({ localDbKey: localDbKey }, {
    }, function (err, result) {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            res.status(200).json({ message: "Employee has successfully been deleted!" })
        }
    })
})

// router.get("/", (req, res) => {
//     Employee.find()
//         .then(result => {
//             if (!result || result.length === 0) {
//                 return res.status(409).json({ message: "No data exist" })
//             } else {
//                 return res.status(200).json({
//                     data: result,
//                 });
//             }
//         }).catch(err => {
//             console.log("error", err)
//             res.status(500).json({ error: err, message: err })
//         })
// });

module.exports = router
