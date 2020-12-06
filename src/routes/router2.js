const express = require('express');

const router = express.Router();

const {getTodos} = require('../controllers/todoV2');

router.get("/todos", getTodos);

module.exports = router;