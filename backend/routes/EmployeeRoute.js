const express = require("express");
const EmpController = require("../controller/empLogic")
const router = express.Router();


router.get("/getemp", EmpController.getEmployee)
router.post("/addemp", EmpController.addEmployee)
router.delete("/deleteemp", EmpController.deleteEmployee)
router.put("/updateemp",EmpController.updateEmployee)


module.exports=router;