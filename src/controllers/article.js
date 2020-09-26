const { CreateDatabase }= require("../models/article");

exports.GetAllArticle =  (req,res,next) => {
    console.log("Ada error");
    res.status(200).send({
        data: [
            {name: "article 1"},
            {name: "article 2"},
            {name: "article 3"},
            {name: "article 4"},
        ],
        metaData: {
            pagination: {
                count: 4,
                page: 1,
                nextPage: true,
                prevPage: false,
            },
        },
    });
};

exports.GetDetailArticle =  (req,res,next) => {
    res.status(200).send({
        data: {
            name: `article ${req.params.id}`,
        },
        metaData: {},
    });
};

exports.CreateArticle = (req, res) =>{
    console.log(req.body);
    CreateDatabase();
    res.status(200).send({
        msg: "Create Success",
    });
};