var express = require('express');
var app = express();
var path = require('path');
var db_connection = require('./model/db_connection');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/view'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/view/html/index.html'));
//     // since I used app.use() It will find and locate index.html in view folder
// });

// app.get('/technology',function(req,res){
//     res.sendFile(path.join(__dirname+'/view/html/cyberrange.html'));
// });

// app.get('/marketplace',function(req,res){
//     res.sendFile(path.join(__dirname+'/view/html/mp.html'));
// });

// default route
app.get('/',function(req,res){
    res.send({message: 'NodeJS'});
});

app.post('/purchase', function(req, res){
    debugger
    console.log('post message');
    console.log(req.body);

    var sql_query = 'select risk_level from asset_lookup where asset_type = ? and exploit = ?';

    db_connection.query(sql_query,[req.body.value.type,'DOS'], function(err,response) {
        if (err) throw err;
        console.log('**** Filter Response:');
        console.log(response[0].risk_level);
        db_connection.query('insert into asset_exploit_map set ?',{asset_type:req.body.value.type,exploit:'DOS',risk_level:response[0].risk_level}, function(err,response){
            if(err) throw err;
        console.log('Insert successful');
        });
     
    });

  
    
    
    //convert the response in JSON format
    res.end(JSON.stringify(res));
    
});
app.listen(3000);

console.log('Server is running on port 3000');