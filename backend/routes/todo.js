const express = require('express');

const router = express.Router();

const todoHandler = require('../handler/todoHandler');

router.post('/sections', todoHandler.createSection);

module.exports = router;
