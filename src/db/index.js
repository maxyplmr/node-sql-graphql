const db = require('mysql2/promise');

const pool = db.createPool({
    host: 'mariadb', // Service name in Docker Compose
    user: 'username',
    password: 'userPassword',
    database: 'databaseName',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool;