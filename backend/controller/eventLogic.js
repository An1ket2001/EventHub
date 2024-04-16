const Event = require("../models/Event");
const Employee = require("../models/User");
const Location = require("../models/Location");
const { BlockBlobClient } = require('@azure/storage-blob');
const { uuid } = require("uuidv4");



const createEvent = async (req, res) => {
    try {
        const { title, description, locationId, date } = req.body;
        authorId=req.user.id;
        console.log(authorId);
        const filename = req.file.originalname + uuid();//This things to ask for
        const blobService = new BlockBlobClient(process.env.BLOB_URL, "images", filename);
        blobService.uploadData(req.file.buffer)
            .then(
                () => {
                    Event.create({
                        title,
                        description,
                        author: authorId,
                        location: locationId,
                        date,
                        subscribers: [],
                        titleImage: filename
                    })
                    res.status(200).send('File uploaded to Azure Blob storage.');
                }
            ).catch(
                (err) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send("Please try again later fromm blob.");
                        return;
                    }
                })
    } catch (err) {
        console.log(err);
        res.status(500).send("Please try again later.");
    }

}

const getEventImage = async (req, res) => {
    const filename = req.params['imagename']
    const blobService = new BlockBlobClient(process.env.BLOB_URL, "images", filename);
    try {
        const downloadResponse = await blobService.download();
        const contentType = downloadResponse.contentType;
        res.set('Content-Type', contentType);
        downloadResponse.readableStreamBody.pipe(res);
    } catch (err) {
        console.log(err);
    }
}

const getEvent = async (req, res) => {
    try {
        console.log(req.body);
        const { filters } = req.body;
        let events = await Event.aggregate([{
                "$lookup": {
                "from": "locations",
                "localField": "location",
                "foreignField": "_id",
                "as": "locatio"
              }}]);
        events=events.filter((event)=>{
            if(filters.location!=="")
            {
                return event.locatio[0].location===filters.location;
            }else{
                return event;
            }
            
        })
        events=events.filter((event)=>{
            if(filters.IsEventOver==="upcoming")
            {
                return new Date(event.date)>=new Date();
            }else{
                return new Date(event.date)<new Date();
            }
            
        })
        events=events.filter((event)=>{
            if(filters.date!=="")
            {
                return event.date.split("T")[0]===filters.date;
            }else{
                return event;
            }
            
        })
        return res.status(200).json(events);
    } catch (err) {
        console.log(err);
        res.status(500).send("Please try again.");
    }
}

const deleteEvent = async (req, res) => {
    try {
        const { eventId } = req.body;
        await Event.findByIdAndDelete(eventId);
        res.status(200).send("Successfully deleted");
    } catch (err) {
        console.log(err);
        res.status(500).send("Please try again.");
    }
}

const updateEvent = async (req, res) => {
    try {
        const { title, description, authorId, locationId, date, eventId } = req.body;
        const filename = req.file.originalname + uuid();
        const blobService = new BlockBlobClient(process.env.BLOB_URL, "eventhubcontainer", filename);
        blobService.uploadData(req.file.buffer)
            .then(
                async () => {
                    const events = await Event.findById(eventId);
                    if (!events) {
                        res.status(500).send("Internal server error.Please try again later.");
                    }

                    events.title = title,
                        events.description = description,
                        events.author = authorId,
                        events.location = locationId,
                        events.date = date,
                        events.titleImage = filename
                    await events.save();
                    res.status(200).send('Updated Succesfully');
                }).catch(
                    (err) => {
                        if (err) {
                            console.log(err);
                            res.status(500).send("Please try again later fromm blob.");
                            return;
                        }
                    })
    } catch (err) {
        console.log(err);
        res.status(500).send("Please try again later.");
    }
}

const subscribeEvent=()=>{
    try{
        const {userId,eventId}=req.body;
        const user = Employee.findById(userId);
        if(!user)
        {
            res.send(400).send("Invalid User");
        }
        const events = Event.findById(eventId);
        events.subscribers.push(userId);
        events.save();
        res.status(200).send("Subscribed successfully");
    }catch(err){
        res.status(500).send("Internal server Error.Please try again later.");
    }
}
module.exports = {
    createEvent,
    getEventImage,
    getEvent,
    deleteEvent,
    updateEvent,
    subscribeEvent
}