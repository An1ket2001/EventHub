const Employee = require("../models/Employee");

const getEmployee = async (req, res) => {
    try {
        const Employees = await Employee.find({});
        if (!Employees) {
            return res.status(201).send("no Employees");
        }
        else {
            res.status(200).json(Employees);
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong.Please try again.")
    }
}


const addEmployee = async (req, res) => {
    try {
        const{name,desg} =  req.body;
        const emp =await Employee.create({
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

const deleteEmployee = async (req, res) => {
    try {
        const {id}=req.body;
        const emp =await Employee.findByIdAndDelete(id);
        return res.status(200).send("Successfully deleted");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong.Please try again.")
    }
}

const updateEmployee=async(req,res)=>{
    try {
        const {id,name,desg}=req.body;
        const emp =await Employee.findById(id);
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
    getEmployee,
    addEmployee,
    deleteEmployee,
    updateEmployee
}