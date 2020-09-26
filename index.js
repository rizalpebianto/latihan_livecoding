//Basic routing

const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 4000;

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res, next) => {
    res.send("berhasil get wkwk");
});

app.get("/data", (req, res, next) => {
    res.json({
        name: "Rizal",
        age: 21,
    });
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//Router
const ArticleRouter = require("./src/routes/article");
const CategoryRouter = require("./src/routes/category");
const AuthRouter = require("./src/routes/auth");
const UserProfile = require("./src/routes/user");

//Routing
app.use("/article", ArticleRouter);
app.use("/category", CategoryRouter);
app.use("/auth", AuthRouter);
app.use("/profile", UserProfile);

app.get('/handle/:id', (req, res, next) => {
    if (req.params.id < 4) {
        next();
    } else {
        throw new Error("Id SALAH");
    }
},

    (req, res) => {
        res.send("id valid");
    });

//handling error 1
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

//handling error 2
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            status: error.status || 500,
            msg: error.message || "internal server error",
        },
    });
});

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});