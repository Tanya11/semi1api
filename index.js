const express = require('express')
const app = express()
const ip = process.env.IP || "172.17.0.4"
const port =  process.env.PORT || 3002
const user = process.env.USER || "root"
const password  = process.env.PASS || "12345"

const mysql = require('mysql'); 
var isConnect
var con = mysql.createConnection({
  host: ip,
  user: user,
  password: password,
  database: 'company'
});

con.connect(function(err) {
console.log(user=="root");
console.log(password=="12345");
  if (err) throw err;
  console.log("Connected!");
});

bodyParser = require('body-parser').json();
app.get('/', function (req, res) {
  res.send(`las variable de entorno son port: ${port} y ip ${ip}`)
})

app.get('/productos',function(req,res){
    var data = {
        "error":true,
        "Products":""
    };
    
    con.query("SELECT * from product",function(err, rows, fields){
        if(rows.length != 0){
            data["error"] = false;
            data["Products"] = rows;
            res.json(data);
        }else{
            data["error"] = true;
            data["Products"] = 'No products Found..';
            res.json(data);
        }
    });
});

app.post('/insert', function(req, response){
    con.query('INSERT INTO product SET ?', function(err, result){
        if (error) throw error;
        response.status(201).send(`Product added with ID: ${result.insertId}`);
    });
});

app.get('/par',bodyParser, function (req, res) {
  res.send(req.body);
  console.log(req.body);
})
app.listen(port)

console.log(`se escucha en el puerto ${port}`);
