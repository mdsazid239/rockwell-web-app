const mysql = require("mysql2/promise");
require("dotenv").config();

// Central connection pool shared across the whole backend.
// Using a pool (instead of a single connection) means the API
// can handle multiple simultaneous requests without errors.
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "rockwell_1111",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true,
});

module.exports = pool;
