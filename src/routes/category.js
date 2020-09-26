const CategoryRouter = require("express").Router();
const Authentication = require("../middleware/authentication");
const { CreateCategory,
        GetAllCategory,
        GetDetailCategory,
        UpdateCategory,
        DeleteCategory } = require("../controllers/category");

CategoryRouter.post("/", Authentication, CreateCategory);
CategoryRouter.get("/", GetAllCategory);
CategoryRouter.get("/:id", GetDetailCategory);
CategoryRouter.patch("/:id", UpdateCategory);
CategoryRouter.delete("/:id", DeleteCategory);
module.exports = CategoryRouter;