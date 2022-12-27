const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(5000,() => {
  console.log('listening on port 5000');
});

/* --------------------------------
require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
app.get("/", (req, res) => {
    res.send("Hi, I'm live");
});

// middleware or to set routes
app.use("/api/products", products_routes);

const start = async () => {
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    }catch(error){
        console.log(error);
    }
}
start();


*/