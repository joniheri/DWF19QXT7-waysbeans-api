const express = require("express");

const router = express.Router();

const {
  getTotos,
  getToto,
  addToto,
  updateTodo,
  deleteToto,
} = require("../controllers/todos");

const {
  getPosts,
  getSinglePostById,
  hiddenFieldCreatedAtUpdatedAt,
  addPost,
  updatePost,
  deletePost,
  restorePost,
} = require("../controllers/post");

const { getUsers, getUsersHashOne } = require("../controllers/user");
const { getProfiles, getProfilesBelongsTo } = require("../controllers/profile");

// tbTodo
router.get("/todos", getTotos);
router.get("/todo/:id", getToto);
router.post("/todo/", addToto);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteToto);

// tbPosts
router.get("/posts", getPosts);
router.get("/posthiddenfield", hiddenFieldCreatedAtUpdatedAt);
router.get("/post/:id", getSinglePostById);
router.post("/addpost", addPost);
router.patch("/updatepost/:id", updatePost);
router.delete("/deletepost/:id", deletePost); // soft delete
router.post("/restorepost/:id", restorePost); // restore data was deleted

// tbUser
router.get("/users", getUsers);
router.get("/usershashone", getUsersHashOne);

// tbProfile
router.get("/profiles", getProfiles);
router.get("/profilesbelongsto", getProfilesBelongsTo);

module.exports = router;
