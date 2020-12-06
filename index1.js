const express = require("express");

const app = express();

// defne the sever port
const port = 5000;

// create the home page rout
app.get('/todos', (req, res) => {
    res.send("Hello, this is fundamental express!");
})

app.listen(port, () => console.log(`Listening on port ${port}!!!`))