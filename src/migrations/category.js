const categoryTable = `
CREATE TABLE IF NOT EXISTS category(
    id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
)`;

exports.Tables = [categoryTable];
exports.Relations = [];