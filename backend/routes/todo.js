const express = require('express');

const router = express.Router();

const todoHandler = require('../handler/todoHandler');

router.post('/sections', todoHandler.createSection);
router.get('/sections/:id', todoHandler.getSection);
router.put('/sections/:id', todoHandler.updateSection);
router.delete('/sections/:id', todoHandler.deleteSection);

module.exports = router;
