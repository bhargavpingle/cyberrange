var mysql = require('mysql');


var connection_object = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Medha584', // change this as per the local instance of MySQL
    database: 'cyberrange',
    insecureAuth: true
  });

connection_object.connect(function(err){
    if(err) throw err;
    console.log('Connection Successful!');
});

module.exports = connection_object;