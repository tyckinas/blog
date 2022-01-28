require('dotenv').config()
const express = require("express");
const mysql = require("mysql");


//Create connection
const db = mysql.createConnection({
    host     : `${process.env.DB_HOST}`,
    user     : `${process.env.DB_USER}`,
    password : `${process.env.DB_PASSWORD}`,
    database : `${process.env.DB}`
});

db.connect((err) =>{
    if(err) {
        throw err;
    }
    console.log('MySQL connected')
})

const server = express();

server.listen(`${process.env.SERVER_PORT}`, () => {
  console.log("Server is running");
});
