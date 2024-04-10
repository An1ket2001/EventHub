const express = require("express");
const EmpController = require("../controller/empLogic")
const router = express.Router();


router.get("/getemp", EmpController.getUser)
router.post("/addemp", EmpController.addUser)
router.delete("/deleteemp", EmpController.deleteUser)
router.put("/updateemp",EmpController.updateUser)


module.exports=router;