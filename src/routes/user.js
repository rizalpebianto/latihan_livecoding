const UserRouter = require("express").Router();
const { UpdateProfile } = require("../controllers/user");
const Authenctication = require("../middleware/authentication");
const UploadFile = require("../middleware/uploadFile");
UserRouter.patch(
  "/",
  Authenctication,
  UploadFile.single("image"),
  UpdateProfile
);

module.exports = UserRouter;