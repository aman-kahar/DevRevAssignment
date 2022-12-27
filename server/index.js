

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { urlencoded } = require('body-parser');


const db = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'devrevassignment'
   // password:''
});


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(5000,() => {
  console.log('listening on port 5000');
});

// app.get("/api",(req,res) => {
//     res.json({"user" : ["userOne","userTwo","userThree"]})
// });



app.get("/api",(req,res)=>{
    const sqlGet = "SELECT * FROM addmovie";
    db.query(sqlGet,(err,result)=>{
        // res.send(result);
        // res.send(err);
        console.log(result);
        // console.log(err);
    });
});