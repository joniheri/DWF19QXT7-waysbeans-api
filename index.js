// import express
const express = require("express");

// inport body-parser
// const bodyParser = require("body-parser");

// import route modul
const router1 = require("./src/routes/router1");
const router2 = require("./src/routes/router2");

// use express in app variable
const app = express();

// defne the sever port
const port = 5000;

// app.use(bodyParser.json());
app.use(express.json());

app.use('/api/v1', router1);
app.use('/api/v2', router2);

app.listen(port, () => console.log(`Listening on port ${port}!!!`))