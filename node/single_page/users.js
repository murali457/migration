var express = require('express');
router = express.Router();
var cors = require('cors');
var app=express();
var bodyParser=require('body-parser');
var port=5001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app server 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cors({origin: 'http://localhost:3000'}));
app.use('',router);
app.listen(port,function(err,responce){
    if(err) throw err;
    else console.log("server port number is:"+port);
})
app.post('/userlist',function(req, res) {
    const database_name=req.body.source+req.body.source_url+req.body.destination+req.body.destination_url;
    var mysql=require('mysql');
    var db=mysql.createConnection({
        host: "34.93.3.147",
        user: "root",
        password: "oIjv9C587i0kFol1",
        database:database_name
    })
    db.connect(function(err) {
                if(err) throw err;
            })
    app.get('/getlist',function(req, res) {
        var sql = "SELECT user.*,f.name FROM user JOIN drive d ON user.id=d.user_id JOIN file f ON f.drive_id=d.id ";
        db.query(sql,function(err,result){
            if(err)res.status(200).json({"status":400,"msg":"something went wrong","result":""});
            else
            {
                res.status(200).json({"status":400,"msg":"success","result":result})
            }
        }); 
    })
});
