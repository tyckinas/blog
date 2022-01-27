const express = require('express')
const mysql = require('mysql')

const server = express();

server.listen('3000' , ()=>{
    console.log('Server is running')
})