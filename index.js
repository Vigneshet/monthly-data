const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/monthly-data', (req, res) => {
    res.json(["GRT","DAD","MOM"]);
});

// listen for requests
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});