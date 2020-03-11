//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();
 
//Create connection

 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set public folder as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));
 
//route for homepage
app.get('/',(req, res) => {
    res.render('first');
});

app.post('/select',(req, res) => {
    const datab = req.body.source+req.body.ss+req.body.destination+req.body.d1;
    const dbe="invald doamin";
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: datab
      });
       
      //connect to database
      if(datab =='testc'){
      conn.connect((err) =>{
        if(err) throw err;
        console.log('Mysql Connected...');
      });
    }else{
       throw  dbe;
    }

    let sql = "SELECT * FROM ex_details";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('userslist',{
        results: results
      });
    });
  });
//route for insert data
app.post('/save',(req, res) => {
  let data = {name: req.body.product_name, contact: req.body.product_price};
  let sql = "INSERT INTO ex_details SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 
//route for update data
app.post('/update',(req, res) => {
  let sql = "UPDATE ex_details SET name='"+req.body.product_name+"', contact='"+req.body.product_price+"' WHERE ex_id="+req.body.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 
//route for delete data
app.post('/delete',(req, res) => {
  let sql = "DELETE FROM ex_details WHERE ex_id="+req.body.product_id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});
 
//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});