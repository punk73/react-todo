const express = require('express');
const bodyParser = require('body-parser');
const route = require('./api/route');
const app = express();
const PORT = 4000;
const mongose = require('mongoose');

//connect to mongodb
mongose.connect('mongodb://localhost/todo_db',  { 
    useNewUrlParser: true, 
    useUnifiedTopology : true 
});

mongose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', route );

app.use(function (error,req,res,next) {
    
    // console.log({
    //     error, req, res
    // })

    res.status(400).send({
      success : false,
      message : error._message,
      parameter : req.body,
      error : error  
    })
})

app.listen(PORT, function () {
    console.log("server is listening on "+ PORT )
});