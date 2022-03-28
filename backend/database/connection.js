const mysql = require('mysql2');

module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'to-do-list-app',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
