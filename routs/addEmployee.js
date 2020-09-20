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

// router.post('/update/dietaryRequirement', (req, res) => {
//     const { _id, dietaryValue } = req.body
//     console.log(dietaryValue, '_________________dietaryValue_______________')
//     DietaryRequirement.update({ "_id": _id }, { "$set": { dietaryValue } })
//         .then((update) => {
//             //send response users
//             console.log('_________________then_______________')
//             res.json(update)

//         })
//         //catch the error
//         .catch((err) => {
//             console.log(err, '_________________catch_______________')
//             res.send(err)
//         }
//         );

// });
router.post("/updateEmployee/", (req, res) => {
    const { localDbKey, name, phone, address, cnic } = req.body

    Employee.update({ "localDbKey": localDbKey }, { "$set": { name, phone, address, cnic } })
        .then((update) => {
            //send response users
            console.log('_________________then_______________')
            res.status(200).json({ message: "Employee has successfully been updated!" })

        })
        //catch the error
        .catch((err) => {
            console.log(err, '_________________catch_______________')
            res.status(500).json({ error: err })
        }
        );


    // Employee.deleteOne({ localDbKey: localDbKey }, {
    // }, function (err, result) {
    //     // if (err) {
    //     //     res.status(500).json({ error: err })
    //     // } else {
    //     //     res.status(200).json({ message: "Employee has successfully been updated!" })
    //     // }
    // })
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
