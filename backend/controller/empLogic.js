const User = require("../models/User");

const getUser = async (req, res) => {
    try {
        const Users = await User.find({});
        if (!Users) {
            return res.status(201).send("no Users");
        }
        else {
            res.status(200).json(Users);
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong.Please try again.")
    }
}


const addUser = async (req, res) => {
    try {
        const{name,desg} =  req.body;
        const emp =await User.create({
            name:name,
            designation:desg
        })
        await emp.save();
        return res.status(200).send("Successfully created");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong.Please try again.")
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id}=req.body;
        const emp =await User.findByIdAndDelete(id);
        return res.status(200).send("Successfully deleted");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong.Please try again.")
    }
}

const updateUser=async(req,res)=>{
    try {
        const {id,name,desg}=req.body;
        const emp =await User.findById(id);
        emp.name=name;
        emp.designation=desg;
        await emp.save();
        return res.status(200).send("Successfully Updated");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong.Please try again.")
    }
}

module.exports = {
    getUser,
    addUser,
    deleteUser,
    updateUser
}