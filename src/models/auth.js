const { runQuery } = require("../config/db");

exports.Signup = (username, password) => {
    return new Promise((resolve, reject) => {
        runQuery(`
        INSERT INTO users(username, password) values('${username}','${password}')
        `,
            (err, result) => {
                if (err) {
                    return reject(new Error(err));
                }
                return resolve(result);
            });
    });
};

exports.GetUserData = (username) => {
    return new Promise((resolve, reject) => {
        runQuery(
            `
          SELECT id,username,password FROM users WHERE username='${username}'
      `,
            (err, result) => {
                if (err) {
                    return reject(new Error(err));
                }
                return resolve(result);
            }
        );
    });
};