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

    connection_object.query("select * from asset_lookup", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

module.exports = connection_object;