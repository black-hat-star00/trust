CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE medications (
    medication_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    dosage VARCHAR(255),
    units VARCHAR(50),
    frequency VARCHAR(50)
);

CREATE TABLE reminders (
    reminder_id SERIAL PRIMARY KEY,
    medication_id INT REFERENCES medications(medication_id) ON DELETE CASCADE,
    reminder_time TIME NOT NULL
);
