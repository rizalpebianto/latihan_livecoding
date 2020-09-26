const AuthRouter = require("express").Router();
const { Signup, Login } = require("../controllers/auth");

AuthRouter.post("/signup", Signup);
AuthRouter.post("/login", Login);

module.exports = AuthRouter;