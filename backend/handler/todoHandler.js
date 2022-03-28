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

function updateSection(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  if (name === undefined) {
    return res.status(400).json({
      message: 'Failed updating section. Please provide a new name',
    });
  }

  db.execute(
    'UPDATE section SET name = ? WHERE id = ?',
    [name, id],
    (err, results) => {
      if (err) return res.status(400).json({ message: 'Failed updating section' });
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Failed updating section. Id not found' });
      }
      return res.status(200).json({ message: 'Section successfully updated' });
    },
  );
}

module.exports = {
  createSection,
  updateSection,
};
