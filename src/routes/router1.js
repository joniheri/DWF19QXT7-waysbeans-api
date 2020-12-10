const express = require("express");

const router = express.Router();

const {
    getTotos, 
    getToto, 
    addToto, 
    updateTodo, 
    deleteToto
} = require("../controllers/todos");

const {getPosts} = require("../controllers/post")

// todo
router.get('/todos', getTotos);
router.get('/todo/:id', getToto);
router.post('/todo/', addToto);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteToto);

// posts
router.get("/posts", getPosts)

module.exports = router;