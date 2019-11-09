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

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



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