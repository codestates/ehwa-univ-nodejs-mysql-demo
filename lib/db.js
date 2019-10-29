var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kooslab2017',
  database: 'account_book'
});
connection.connect(function(error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log('Connected!:)');
  }
});
module.exports = connection;
