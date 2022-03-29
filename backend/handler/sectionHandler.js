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

function getAllSections(req, res) {
  db.execute('SELECT * FROM section', (err, results) => {
    if (err) return res.status(400).json({ message: 'Failed getting all sections ' });
    res.json({
      message: 'Success',
      data: results,
    });
  });
}

function getSection(req, res) {
  const { id } = req.params;
  db.execute('SELECT * FROM section WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(400).json({ message: 'Failed getting section' });
    if (results.length === 0) return res.status(404).json({ message: 'Section not found' });
    res.status(200).json({
      message: 'Success',
      data: results[0],
    });
  });
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

function deleteSection(req, res) {
  const { id } = req.params;

  db.execute('DELETE FROM section WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(400).json({ message: 'Failed deleting section' });
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Failed deleting section. Id not found' });
    }
    return res.status(200).json({ message: 'Section successfully deleted' });
  });
}

function getSectionsWithTodos(req, res) {
  const { limit = 3, offset = 0, searchInput } = req.query;

  const limitSQLParam = Math.min(parseInt(limit, 10), 20);
  const offsetSQLParam = parseInt(offset, 10);
  const searchSQLParam = (searchInput ? `%${searchInput}%` : '%').toLowerCase();

  const options = {
    sql: `
    SELECT *
    FROM todo
    INNER JOIN (
      SELECT *
      FROM section s
      WHERE LOWER(s.name) LIKE ?
      LIMIT ?
      OFFSET ?
    ) AS section
    ON todo.section_id = section.id
    ORDER BY section.date_created
    `,
    nestTables: true,
  };

  db.execute(
    options,
    [searchSQLParam, limitSQLParam, offsetSQLParam],
    (err, results) => {
      if (err) return res.status(400).json({ message: 'Failed getting data' });

      const dataButMap = results.reduce((section, d) => {
        const sectionId = d.section.id;
        if (!section.has(sectionId)) {
          section.set(sectionId, {
            ...d.section,
            todos: [d.todo],
          });
        } else {
          section.get(sectionId).todos.push(d.todo);
        }
        return section;
      }, new Map());

      return res.status(200).json({
        message: 'Success',
        data: [...dataButMap].map(([, value]) => value),
      });
    },
  );
}

/*
  {
    message: 'Success',
    data: [
      {
        id: 'section_id',
        name: 'Study',
        date_created: 'XXX',
        to_dos: [
          {
            id: 'todo_id',
            name: 'study next js',
            description: 'desc',
            is_done: 0,
            date_created: 'xxx',
          },
          {
            id: 'todo_id',
            name: 'study next js',
            description: 'desc',
            is_done: 0,
            date_created: 'xxx',
          }
        ]
      }
    ]
  }
*/

module.exports = {
  createSection,
  getAllSections,
  getSection,
  updateSection,
  deleteSection,
  getSectionsWithTodos,
};
