import db from '../index';

const createUserTable: string = `
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

db.query(createUserTable)
    .then(([rows, fields]) => {
        console.log('User table created successfully.');
    })
    .catch((err: Error) => {
        console.error('Error creating user table:', err);
    });

module.exports = db;

export default db;
