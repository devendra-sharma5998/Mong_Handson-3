const express=require("express")

const employeeController=require("../controllers/employee")

const router=express.Router()

router.post('/information',employeeController.finddetails)
router.get('/employee',employeeController.findAllEmployeeInDB)
router.post('/salmore',employeeController.stuSalMore)
router.post('/update',employeeController.updateSalary)
router.get('/experince',employeeController.dataByExp)
router.get('/studelete',employeeController.stuDelete)

module.exports =router;