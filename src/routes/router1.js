const express = require("express");

const router = express.Router();

// import todo function from controller
const {
  getTotos,
  getToto,
  addToto,
  updateTodo,
  deleteToto,
} = require("../controllers/todos");

// import post function from controller
const {
  getPosts,
  getSinglePostById,
  hiddenFieldCreatedAtUpdatedAt,
  addPost,
  updatePost,
  deletePost,
  restorePost,
  addPostValidate1,
  addPostValidate2,
} = require("../controllers/post");

// import user function from controller
const {
  getUsers,
  getUsersHashOne,
  getUsersHashToMany,
  getUsersHashOneMany,
} = require("../controllers/user");

// import profile function from profile
const { getProfiles, getProfilesBelongsTo } = require("../controllers/profile");

// import skill function from controller
const { getSkills, getSkillsBelongsTo } = require("../controllers/skill");

// import AuthorBook function from controller
const {
  getBooksBelongsToManyAuthor,
  getAuthorsBelongsToManyBook,
} = require("../controllers/AuthorBook");

// import file auth ffrom folder middleware
const { auth: auhentic } = require("../middleware/auth");

// router for tbTodo
router.get("/todos", getTotos);
router.get("/todo/:id", getToto);
router.post("/todo/", addToto);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteToto);

// router for tbPosts
router.get("/posts", getPosts);
router.get("/postsauthentic", auhentic, getPosts); // Cek using authentication
router.get("/posthiddenfield", hiddenFieldCreatedAtUpdatedAt);
router.get("/post/:id", getSinglePostById);
router.post("/addpost", addPost);
router.patch("/updatepost/:id", updatePost);
router.delete("/deletepost/:id", deletePost); // soft delete
router.post("/restorepost/:id", restorePost); // restore data was deleted
router.post("/addpostvalidate1", addPostValidate1); // input data with chek input validate1
router.post("/addpostvalidate2", addPostValidate2); // input data with chek input validate1

// router for tbUser
router.get("/getusers", getUsers);
router.get("/usershashone", getUsersHashOne);
router.get("/usershashmany", getUsersHashToMany);
router.get("/usershashonemany", getUsersHashOneMany);

// router for tbProfile
router.get("/profiles", getProfiles);
router.get("/profilesbelongsto", getProfilesBelongsTo);

// router for tbSkill
router.get("/skills", getSkills);
router.get("/skillsbelongsto", getSkillsBelongsTo);

// router for AuthorBook
router.get("/authortomanybook", getAuthorsBelongsToManyBook);
router.get("/booktosmanyauthor", getBooksBelongsToManyAuthor);

// =========================================================
// task2
// ---------------------------------------------------------
// import userTask2 from controller
const { getUsersTask2, deleteUser } = require("../controllers/task2/user");

// import product from controller
const {
  getProducts,
  getProduct: ProductId,
  addProductValidate2,
  updateProduct,
} = require("../controllers/task2/product");

// import auth from controller
const { register, login } = require("../controllers/task2/auth");

// router for userTask2
router.get("/users", getUsersTask2);
router.delete("/user/:id", deleteUser);

// router for product
router.get("/products", getProducts);
router.get("/product/:id", ProductId);
router.post("/addproduct", addProductValidate2);
router.patch("/updateproduct/:id", updateProduct);

// router for auth
router.post("/register", register);
router.post("/login", login);
// =========================================================

module.exports = router;
