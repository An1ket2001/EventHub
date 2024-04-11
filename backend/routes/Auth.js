const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "harsh@garwal";
const auth = require("../middleware/auth")
const { body, validationResult } = require('express-validator');
const userController=require("../controller/empLogic");

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