const express = require("express");

const router = express.Router();

const {
    getTotos, 
    getToto, 
    addToto, 
    updateTodo, 
    deleteToto
} = require("../controllers/todos");

const {
    getPosts, 
    getSinglePostById, 
    hidenFieldCreatedAtUpdatedAt,
    addPost
} = require("../controllers/post");

// todo
router.get('/todos', getTotos);
router.get('/todo/:id', getToto);
router.post('/todo/', addToto);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteToto);

// posts
router.get("/posts", getPosts)
router.get("/posthidenfield", hidenFieldCreatedAtUpdatedAt)
router.get("/post/:id", getSinglePostById)
router.post("/addpost", addPost)

module.exports = router;