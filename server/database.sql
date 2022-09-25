-- Users Table
CREATE TABLE users(
    user_id serial PRIMARY KEY,
    email varchar(255) UNIQUE NOT NULL,
    PASSWORD varchar(255) NOT NULL,
    created_at date DEFAULT current_date
);