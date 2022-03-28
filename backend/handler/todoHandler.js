/* eslint-disable consistent-return */
const { nanoid } = require('nanoid');

const db = require('../database/connection');

function createSection(req, res) {
  const id = nanoid();
  const { name } = req.body;

  if (name === undefined) {
    return res.status(400).json({
      message: 'Failed creating a new section. Please provide a name',
    });
  }

  db.execute(
    'INSERT INTO section (id, name) VALUES (?, ?)',
    [id, name],
    (err) => {
      if (err) return res.status(400).json({ message: 'Failed creating new section' });

      return res.status(201).json({
        message: 'Successfully created a new section',
        section_id: id,
      });
    },
  );
}

module.exports = {
  createSection,
};
