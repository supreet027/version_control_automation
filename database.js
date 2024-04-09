const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'qr_web',
  user: 'root',
  password: 'Sup@petu207',
});

connection.connect(function(error) {
  if (error) {
    throw error;
  } else {
    console.log('Database is connected.');
  }
});
module.exports = connection;
