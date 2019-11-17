var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'cows'
})

connection.connect((error) => {
  if (error) {
    console.log('Cannot connect to database')
  } else {
    console.log('Connected to database');
  }
});

module.exports = connection;