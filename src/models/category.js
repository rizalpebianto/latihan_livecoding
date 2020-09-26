const { runQuery } = require("../config/db");

exports.CreateCategory = (name) => {
    return new Promise((resolve, reject) => {
        runQuery(`
        INSERT INTO category(name) values('${name}')
        `,
            (err, result) => {
                if (err) {
                    return reject(new Error(err));
                }
                return resolve(result);
            });
    });
};

exports.GetAllCategory = (params) => {
    return new Promise((resolve, reject) => {
        const { limit, page, sort, search } = params;
        const condition = `
        ${search ? `WHERE name LIKE '%${search}%'` : ""}
        ${sort ? `ORDER BY ${sort.key} ${sort.value}` : ""}
        LIMIT ${parseInt(limit)} OFFSET ${(parseInt(page) - 1) * parseInt(limit)}
        `
        runQuery(`
        SELECT COUNT(*) AS total FROM category ${condition.substring(
            0,
            condition.indexOf("LIMIT")
        )};
        SELECT * FROM category ${condition}
        `, (err, result) => {
            if (err) {
                return reject(new Error(err));
            }
            return resolve(result);
        })
    })
}

exports.GetDetailCategory = (id) => {
    return new Promise((resolve, reject) => {
        runQuery(`SELECT * FROM category WHERE id=${id}`, (err, result) => {
            if (err) {
                return reject(new Error(err));
            }
            return resolve(result);
        })
    })
}

exports.UpdateCategory = (id, body) => {
    return new Promise((resolve, reject) => {
        runQuery(`SELECT * FROM category WHERE id=${id}`, (err, result) => {
            if (err || !result[1][0]) {
                return reject(new Error(`Category with id ${id} Not Exists`));
            }
            runQuery(`UPDATE category SET ${Object.keys(body).map((v) => `${v}='${body[v]}'`).join(",")} WHERE id=${id}`, (err, result) => {
                if (err) {
                    return reject(new Error(err));
                }
                return resolve(result);
            });
        });
    });
};

exports.DeleteCategory = (id) => {
    return new Promise((resolve, reject) => {
        runQuery(`SELECT * FROM category WHERE id=${id}`, (err, result) => {
            if (err || !result[1][0]) {
                return reject(new Error(`Category with id ${id} Not Exists`));
            }
            runQuery(`DELETE FROM category WHERE id=${id}`, (err, result) => {
                if (err) {
                    return reject(new Error(err));
                }
                return resolve(result);
            });
        });
    });
};