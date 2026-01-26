CREATE DATABASE finance_db;
USE finance_db;

CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(10),
  amount DOUBLE,
  category VARCHAR(50),
  description VARCHAR(100),
  date DATE
);
