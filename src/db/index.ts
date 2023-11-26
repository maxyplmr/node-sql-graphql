import { Pool, createPool, PoolOptions } from 'mysql2/promise';

const dbConfig: PoolOptions = {
    host: 'mariadb',
    user: 'username',
    password: 'userPassword',
    database: 'databaseName',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const pool: Pool = createPool(dbConfig);

export default pool;
