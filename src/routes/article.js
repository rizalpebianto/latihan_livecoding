const RouterArticle = require("express").Router();
const { GetAllArticle, GetDetailArticle, CreateArticle } = require("../controllers/article");

RouterArticle.get('/', GetAllArticle);
RouterArticle.get('/:id', GetDetailArticle);
RouterArticle.post('/', CreateArticle);

module.exports = RouterArticle;