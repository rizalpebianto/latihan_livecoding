require("dotenv").config();
const { dbConnection } = require("../config/db");
const { tables, relation } = require("./listMigration");

dbConnection.query(
    `
CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};
use ${process.env.DB_NAME};
${tables.join(";")};
`,
    (err, result) => {
        if (!err) {
            `
        use ${process.env.DB_NAME};
        ${relation.join(';')}`;
            dbConnection.query(
                `
        use ${process.env.DB_NAME};
        ${relation.join(';')}`,
                (err, result) => {
                    if (!err) {
                        console.log("Migration success!");
                    } else {
                        console.log("Migration Failed");
                        console.log(err);
                    }
                    dbConnection.end();
                });
        } else {
            console.log("Migration Failed");
            console.log(err);
        }
    });