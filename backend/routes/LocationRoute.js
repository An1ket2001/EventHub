const express = require("express");
const LocationController = require("../controller/locationLogic")
const router = express.Router();

router.get("/getlocation",LocationController.getLocation);

module.exports=router;
