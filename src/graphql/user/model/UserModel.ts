import { Connection, RowDataPacket } from 'mysql2/promise';
import pool from '../../../db';

const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    gender ENUM('Male', 'Female', 'Other'),
    profile_picture_url VARCHAR(255),
    bio TEXT,
    address_street VARCHAR(100),
    country VARCHAR(50),
    phone_number VARCHAR(20),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );
`;

async function createTableIfNotExists() {
    let connection: Connection | null = null;

    try {
        connection = await pool.getConnection();
        await connection.query(createUserTableQuery);
        console.log('User table created successfully');
    } catch (error) {
        console.error('Error creating user table:', error);
    }
}

createTableIfNotExists();

const UserModel = {
    getAllUsers: async (): Promise<RowDataPacket[]> => {
        let connection: Connection | null = null;

        try {
            connection = await pool.getConnection();
            const [ rows ] = await connection.query('SELECT * FROM users');
            return rows as RowDataPacket[];
        } catch (error) {
            console.error('Error fetching all users:', error);
            throw error;
        }
    },

    createUser: async ({ username, email }: { username: string; email: string }): Promise<RowDataPacket[]> => {
        let connection: Connection | null = null;

        try {
            connection = await pool.getConnection();
            const [ result ] = await connection.query('INSERT INTO users (username, email) VALUES (?, ?)', [ username, email ]);
            return result as RowDataPacket[];
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },
    // ... other methods based on your MySQL model
};

export default UserModel;
