const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_CONNECT_STRING, 
     {
          useFindAndModify : true,
          useNewUrlParser : true,
          useUnifiedTopology : true
     }).then(()=>{
          console.log("Connection Successfully Estabilised...")
     }).catch(err=>{
          console.log("SOmething wrong to connect with db-ekart-solution : " + err )
     })