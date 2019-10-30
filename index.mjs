const express = require('express');
const bodyParser = require('body-parser');
const route = require('./api/route');
const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use('/api', route );

app.listen(PORT, function () {
    console.log("server is listening on "+ PORT )
});