const article = require('./article');
const category = require('./category');
const users = require('./user');

module.exports = {
    tables: [
        ...article.Tables,
        ...category.Tables,
        ...users.Tables
    ],
    relation: [
        ...article.Relations,
        ...category.Relations,
        ...users.Relations
    ],
};