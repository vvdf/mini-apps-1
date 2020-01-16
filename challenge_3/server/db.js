const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'checkout'
});

connection.connect();


// database file server/checkout_db.db, tables are USERS and TRANSACTIONS
// USER columns: id, name, email, password
// TRANSACTION columns: id user_id address1 address2 city state zip phone 
//  ccn exp cvv billing_zip

// connection.query('SHOW tables', (err, results, fields) => {
//   console.log(results);
// });

