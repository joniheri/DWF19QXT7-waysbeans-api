
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
exports.getTotos = (req, res) => {
    res.send({
        data: todos,
    });
}

// spesific find todo
exports.getToto = (req, res) => {
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
}

exports.addToto = (req, res) =>{
    const todo = req.body;
    todos = [...todos, todo];
    res.send({
        status: "Respon succsess",
        data: todos,
    })
}

exports.updateTodo = (req, res) => {
    const {id} = req.params; // Ini sama dengan sintak => const id = req.params.id
    console.log(req.params);

    todos = todos.map((todo) => (todo.id == id ? req.body : todo));
    res.send({
        status: "Update succsess",
        data: req.body,
    })
}

exports.deleteToto = (req, res) => {
    const {id} = req.params; // Ini sama dengan sintak => const id = req.params.id

    todos = todos.filter(todo => todo.id != id);
    res.send({
        status: "Delete succsess",
        data: id,
    })
}
