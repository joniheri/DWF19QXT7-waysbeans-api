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
    hiddenFieldCreatedAtUpdatedAt,
    addPost,
    updatePost,
    deletePost
} = require("../controllers/post");

// todo
router.get('/todos', getTotos);
router.get('/todo/:id', getToto);
router.post('/todo/', addToto);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteToto);

// posts
router.get("/posts", getPosts)
router.get("/posthiddenfield", hiddenFieldCreatedAtUpdatedAt)
router.get("/post/:id", getSinglePostById)
router.post("/addpost", addPost)
router.patch("/updatepost/:id", updatePost)
router.delete("/deletepost/:id", deletePost)

module.exports = router;