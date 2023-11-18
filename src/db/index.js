const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'mariadb',
    user: 'username',
    password: 'userPassword',
    database: 'databaseName',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool;