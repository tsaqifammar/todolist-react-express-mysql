const express = require('express');

const router = express.Router();

const todoHandler = require('../handler/todoHandler');

router.post('/sections', todoHandler.createSection);
router.put('/sections/:id', todoHandler.updateSection);

module.exports = router;
