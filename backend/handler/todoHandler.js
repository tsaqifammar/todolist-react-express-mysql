/* eslint-disable consistent-return */
const { nanoid } = require('nanoid');

const db = require('../database/connection');

function createTodo(req, res) {
  const { sectionId } = req.params;

  const id = nanoid();
  const { name, description } = req.body;

  if (name === undefined || description === undefined) {
    return res.status(400).json({
      message: 'Failed creating a new todo. Please provide a complete info',
    });
  }

  db.execute(
    'INSERT INTO todo (id, section_id, name, description) VALUES (?, ?, ?, ?)',
    [id, sectionId, name, description],
    (err) => {
      if (err) return res.status(400).json({ message: 'Failed creating a new todo' });

      return res.status(201).json({
        message: 'Successfully created a new todo',
        todo_id: id,
      });
    },
  );
}

function getTodo(req, res) {
  const { id } = req.params;
  db.execute('SELECT * FROM todo WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(400).json({ message: 'Failed getting todo' });
    if (results.length === 0) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json({
      message: 'Success',
      data: results[0],
    });
  });
}

module.exports = {
  createTodo,
  getTodo,
};
