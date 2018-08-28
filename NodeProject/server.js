var express = require('express');
var app = express();
var path = require('path');
var db_connection = require('./model/db_connection');
var bodyParser = require('body-parser');
// to store exploit_map data of newly purchased item as and when purchased
var return_data;

app.use(express.static(__dirname + '/view'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


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
    res.send({error: true, message: 'NodeJS'});
});

// get data from human_resources table
app.get('/people',function(req,res){
    db_connection.query('select * from human_resources',function(err,results,fields){
        if(err) throw err;
        console.log(results[0].name);
        res.send({error:false, data: results, message:'List of Employees'});
    });
});

// get data from asset_lookup table
app.get('/assetreference',function(req,res){
    db_connection.query('select * from asset_lookup',function(err,result,fields){
        if(err) throw err;
        res.send({error:false,data:result, message: 'Asset-Exploit reference data'});
    });
});



// inserting purchased products
app.post('/purchase', function(req, res){
    
    console.log('purchase details');
    console.log(req.body);

//    var sql_query = 'select risk_level from asset_lookup where asset_type = ? and exploit = ?';

//     db_connection.query(sql_query,[req.body.value.type,'DOS'], function(err,response) {
//         if (err) throw err;
//         console.log('**** Filter Response:');
//         console.log(response[0].risk_level);
       // db_connection.query('insert into asset_exploit_map set ?',{asset_type:req.body.value.type,exploit:'DOS',risk_level:response[0].risk_level}, function(err,response){
        db_connection.query('insert into assets_inventory set ?',{asset_type:req.body.value.properties.type}, function(err,response){
            if(err) throw err;
        console.log('Insert successful');
        db_connection.query('select * from asset_lookup where asset_type = ?',[req.body.value.properties.type],function(err,result2,fields){
            if(err) throw err;
            
            return_data = result2;
            console.log(return_data);
        });
    
       });

        // db_connection.query('select last_insert_id() as newID',function(err,result1,fields){
        //     if (err) throw err;
        //     console.log(result1);
        // });
     
    // });   
    
    //convert the response in JSON format
    res.send(true);
    
});

// get exploit_map data of newly purchased item as and when purchased
app.get('/purchaseData',function(req,res){
    console.log('purchaseData api called');
    res.send(return_data);    
});

// get risk levels of assets
app.get('/riskLevel',function(req,res){
    console.log('risk level called');
    db_connection.query('call return_risklevel()',function(err,result,fields) {

        if(err) throw err;        
       // console.log(result[0]);
        res.send(result[0]);
    });
});
app.listen(3000);

console.log('Server is running on port 3000');