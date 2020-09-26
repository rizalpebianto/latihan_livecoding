const articleTable = `
CREATE TABLE IF NOT EXISTS articles(
    id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_category INT(11) UNSIGNED,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP
)
`;

const articleRelation=`
ALTER TABLE articles
    DROP FOREIGN KEY IF EXISTS fk_category;
ALTER TABLE articles
    ADD CONSTRAINT fk_category
    FOREIGN KEY (id_category) REFERENCES category(id)
    ON DELETE SET NULL`;

exports.Tables = [articleTable];
exports.Relations = [articleRelation];