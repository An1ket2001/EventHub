const jwt = require("jsonwebtoken");
const JWT_SECRET = "harsh@garwal";
const auth = (req, res, next) => {
    //get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    //console.log(token);
    if (!token) {
        res.status(401).send({ error: "please send valid auth-token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
         console.log(data);
        req.user = data.user;
        next();
    }
    catch (error) {
        res.status(401).send({ error: "Token you send is invalid" });
    }

}
module.exports = auth;