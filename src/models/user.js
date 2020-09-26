const { runQuery } = require('../config/db')
exports.UpdateProfile = (id, path) => {
    return new Promise((resolve, reject) => {
        runQuery(`
        UPDATE users SET image='${path}' WHERE id=${id}
        `,
            (err, result) => {
                if (err) {
                    return reject(new Error(err));
                }
                return resolve(result);
            });
    });
};