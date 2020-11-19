require('dotenv').config()
const express = require('express');

var app = express();

app.get('/', (req,res, next) =>{
     res.send( { mes : " Hello World" } )
})

app.listen( process.env.PORT, () =>{
     console.log("App is running on port :" + process.env.PORT);
})