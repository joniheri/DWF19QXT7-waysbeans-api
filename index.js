// import express
const express = require("express");

// use express in app variable
const app = express();

// inport body-parser
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let todos = [
    {
        id: 1,
        title: "Belajar Node.js",
        condition: false,
    },
    {
        id: 2,
        title: "Belajar React.js",
        condition: false,
    },
    {
        id: 3,
        title: "Belajar Express",
        condition: false,
    }
]

// defne the sever port
const port = 5000;

// create the home page route
app.get('/todos', (req, res) => {
    res.send({
        data: todos,
    });
})

// spesific find todo
app.get('/todo/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find((todo) => todo.id == id)
    if (!todo){
        return res.send({
            status: "Data dengan id: "+ id + ", Tidak Ditemukan",
            data: null,
        })
    }
    else{
        res.send({
            status: "Data Ditemukan",
            data: todo,
        });
    }
})

app.post('/todo', (req, res) =>{
    const todo = req.body;
    todos = [...todos, todo];
    res.send({
        status: "Respon succsess",
        data: todos,
    })
})

app.patch('/todo/:id', (req, res) => {
    const {id} = req.params; // Ini sama dengan sintak => const id = req.params.id
    console.log(req.params);

    todos = todos.map((todo) => (todo.id == id ? req.body : todo));
    res.send({
        status: "Update succsess",
        data: req.body,
    })
})

app.delete('/todo/:id', (req, res) => {
    const {id} = req.params; // Ini sama dengan sintak => const id = req.params.id

    todos = todos.filter(todo => todo.id != id);
    res.send({
        status: "Delete succsess",
        data: id,
    })
})

app.listen(port, () => console.log(`Listening on port ${port}!!!`))