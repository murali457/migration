var express = require('express');
router = express.Router();
var cors = require('cors');
var app=express();
var bodyParser=require('body-parser');
var port=1000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//db connection
var mysql=require('mysql');
var db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database:"testc"
})
db.connect(function(err) {
    if(err) throw err;
})
//app server 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cors());
app.use('',router);
app.listen(port,function(err,responce){
    if(err) throw err;
    else console.log("server port number is:"+port);
})

app.post('/userregistration',function(req, res) {
    if(req.body.name==undefined||req.body.name==""||req.body.name==null){
        res.status(200).json({"status":400,"err_filed":"user name require","result":""})
    }
    if (req.body.email == undefined || req.body.email == '' || req.body.email==null){
        res.status(200).json({"status":400,"err_filed":"emailid require","result":""})
    }
    if (req.body.password == undefined || req.body.password == '' || req.body.password==null){
        res.status(200).json({"status":400,"err_filed":"password require","result":""})
    }
    var sql = "SELECT * FROM folder_str_user WHERE email='"+req.body.email+"'";
    db.query(sql,function(err,result){
        if(err)res.status(200).json({"status":400,"msg":"something went wrong","result":""});
        else
        {
            if(result.length>0)
            {
                res.status(200).json({"status":400,"msg":"email already registerd!","result":""})
            }
            else {
                //console.log(req.body);
                var sql_insert = "INSERT INTO folder_str_user (name, email, password) VALUES ('"+req.body.name+"', '"+req.body.email+"' , '"+req.body.password+"')";
                //console.log('dasssssssssss............'+sql)
                db.query(sql_insert,function(insert_err,callback){
                    if(insert_err)res.status(200).json({"status":400,"msg":"something went wrong","result":""});
                    else{
                        res.status(200).json({"status":200,"msg":"Registerd successfully","result":""})
                    }
                });
            }
        }
    });
    //res.json({ data: "your data here" });
})

//user login 
app.post('/userlogin',function(req, res) {
    if (req.body.email == undefined || req.body.email == '' || req.body.email==null){
        res.status(200).json({"status":400,"err_filed":"emailid require","result":""})
    }
    if (req.body.password == undefined || req.body.password == '' || req.body.password==null){
        res.status(200).json({"status":400,"err_filed":"password require","result":""})
    }
    var sql = "SELECT * FROM folder_str_user WHERE email='"+req.body.email+"' AND password='"+req.body.password+"'";
    db.query(sql,function(err,result){
        if(err)res.status(200).json({"status":400,"msg":"something went wrong","result":""});
        else
        {
            if(result.length>0)
            {
                res.status(200).json({"status":200,"msg":"User logged in successfully","result":result})
            }
            else {
                res.status(200).json({"status":400,"msg":"email already registerd!","result":""})
            }
        }
    });
    //res.json({ data: "your data here" });
})

//user login 
app.post('/relationjoin',function(req, res) {
    if (req.body.user_id == undefined || req.body.user_id == '' || req.body.user_id==null){
        res.status(200).json({"status":400,"err_filed":"userid require","result":""})
    }
    var sql = "SELECT * FROM folder_str_user WHERE id='"+req.body.user_id+"'";
    db.query(sql,function(err,result){
        if(err)res.status(200).json({"status":400,"msg":"something went wrong","result":""});
        else
        {
            if(result.length>0)
            {
                async.forEachOf(result,function(err,data_result){
                    var children_sql="SELECT * FROM childerns WHERE fol_user_id='"+result.id+"'";
                    db.query(sql,function(childern_err,childern_res){
                        
                    })
                })
                res.status(200).json({"status":200,"msg":"User logged in successfully","result":result})
            }
            else {
                res.status(200).json({"status":400,"msg":"Something went wrong","result":""})
            }
        }
    });
    //res.json({ data: "your data here" });
})
//router.post('/userregistration',uc.userregistration);