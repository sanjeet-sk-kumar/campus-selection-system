CREATE TABLE company_registration (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(10),
    contact_person_name VARCHAR(255) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    contact_no VARCHAR(15),
    email_id VARCHAR(255),
    website VARCHAR(255),
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    CONSTRAINT unique_username UNIQUE (username)
);

-- use \dt to display table