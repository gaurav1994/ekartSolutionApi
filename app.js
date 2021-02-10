require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

var productRoute = require('./api/routes/products');

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
     res.header("Access-Control-Allow-Methods", "*")
     next();
})

require('./utils/mongoose-connection')

app.get('/', (req,res, next) =>{
     res.send( { mes : " Hello World" } )
})

app.use('/products', productRoute)

app.listen( process.env.PORT, () =>{
     console.log("App is running on port :" + process.env.PORT);
})