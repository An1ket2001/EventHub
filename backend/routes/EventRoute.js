const express = require("express");
const EventController = require("../controller/eventLogic")
const router = express.Router();
const multer = require('multer');  
const storage = multer.memoryStorage()
const upload = multer({ storage: storage }); 

router.post("/createEvent",upload.single('imageDetails'),EventController.createEvent);
router.get("/getEventImage/:imagename",EventController.getEventImage);
router.get("/getEvents",EventController.getEvent);
router.patch("/updateEvents",upload.single('imageDetails'),EventController.updateEvent);
router.delete("/deleteEvents",EventController.deleteEvent);
router.post("/subscribeEvent",EventController.subscribeEvent);



module.exports=router;