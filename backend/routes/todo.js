const express = require('express');

const db = require('../database/connection');

const router = express.Router();

const todoHandler = require('../handler/todoHandler');

router.post('/sections', todoHandler.addSection);

module.exports = router;
