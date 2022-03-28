const express = require('express');

const router = express.Router();

const sectionHandler = require('../handler/sectionHandler');

router.post('/sections', sectionHandler.createSection);
router.get('/sections', sectionHandler.getAllSections);
router.get('/sections/:id', sectionHandler.getSection);
router.put('/sections/:id', sectionHandler.updateSection);
router.delete('/sections/:id', sectionHandler.deleteSection);

module.exports = router;
