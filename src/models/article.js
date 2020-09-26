const { dbConnection } = require ("../config/db");

//contoh untuk buat database
exports.CreateDatabase = () => {
    dbConnection.query("CREATE DATABASE IF NOT EXISTS coba_database;", (err, result) => {
        console.log("membuat database");
    });
};