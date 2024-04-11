const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
const { body } = require('express-validator');
const userController=require("../controller/empLogic");
const desgController=require("../controller/desgnLogic");

router.get("/getdesg",desgController.getdesgList)
router.post("/createuser",userController.createuser);
router.post("/login",userController.login);
router.post("/nowgetuser",userController.nowgetuser);
router.post("/createuser", [
    body("name", "Enter a name with atleat 5 characters").isLength({ min: 5 }),
    body("email", "Enter the email in correct email format").isEmail(),
    body("password", "Password must be of minimum 5 characters").isLength({ min: 5 })
], userController.createuser);
router.post("/login", [
    body("email").isEmail(),
    body("password").exists()//This .exists indicates that the password block couldn't be empty
], userController.login)
router.post("/nowgetuser", auth, userController.nowgetuser);
module.exports = router;