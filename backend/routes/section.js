const express = require('express');

const router = express.Router();

const sectionHandler = require('../handler/sectionHandler');

router.post('/sections', sectionHandler.createSection);
router.get('/sections', sectionHandler.getAllSections);
router.get('/sections/page-count', sectionHandler.getPageCount);
router.get('/sections/:id', sectionHandler.getSection);
router.put('/sections/:id', sectionHandler.updateSection);
router.delete('/sections/:id', sectionHandler.deleteSection);
router.get('/sections-w-todos', sectionHandler.getSectionsWithTodos);

module.exports = router;
