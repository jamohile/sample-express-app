const mysql = require("mysql2/promise");

let db = undefined;

exports.connect = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  console.log("Connected");
  db = connection;
  return;
};

exports.getDB = () => db;


