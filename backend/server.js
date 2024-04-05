const express = require("express");
const mongoose = require("mongoose")
const empRoutes = require("./routes/EmployeeRoute")
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/emp",empRoutes)



mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(5000, (err) => {
        if (!err) {
            console.log("server running at port 5000");
        } else {
            console.log(err);
        }
    });
})
