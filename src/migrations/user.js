const userTable = `
CREATE TABLE IF NOT EXISTS users(
    id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(150) NOT NULL,
    image TEXT
)`;

exports.Tables = [userTable];
exports.Relations = [];