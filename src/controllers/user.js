const { UpdateProfile } = require("../models/user");
exports.UpdateProfile = async (req, res) => {
  try {
    console.log(req.auth);
    console.log(req.body);
    const result = await UpdateProfile(req.auth.id, req.file.path);
    res.status(200).send({
      data: {
        image: req.file.path,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(202).send({
      error: {
        msg: error.message || "Something wrong",
      },
    });
  }
};