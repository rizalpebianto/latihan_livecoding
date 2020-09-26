const jwt  = require("jsonwebtoken");

async function Authentication (req,res,next) {
    try {
        let token = req.headers.authorization || "";
        if (!token) {
            throw new Error("Not Authorized");
        }
        token = token.replace(/Bearer\s*/,"");
        const payload = jwt.verify(token,'123456789');
        req.auth = payload;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({
            msg: error.message || "Not Authorized",
        })
    }
}

module.exports = Authentication;