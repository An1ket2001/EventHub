const Location = require("../models/Location");

const getLocation=async()=>{
    try{
        const location = Location.find({});
        res.status(200).json(location);
    }catch(err)
    {
        res.status(500).send("")
    }
}

module.exports={
    getLocation
}