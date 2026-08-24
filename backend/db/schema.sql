-- 11:11 Business Park — database schema
-- Run this once against your local MySQL server to create the
-- database and the table that stores "Contact Us" form submissions.

CREATE DATABASE IF NOT EXISTS rockwell_1111
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE rockwell_1111;

CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(180) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NULL,
  source_page VARCHAR(120) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
