const express = require('express');

const router = express.Router();

const todoHandler = require('../handler/todoHandler');

router.post('/sections/:sectionId/todo', todoHandler.createTodo);
router.get('/todos/:id', todoHandler.getTodo);

module.exports = router;
