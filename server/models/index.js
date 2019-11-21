let db = require('../db');

module.exports = {
  cows: {
    readAll: (done) => {
      db.query('SELECT * FROM cows', done);
    },
    save: (cowInfo, done) => {
      db.query('INSERT INTO cows(name, description) VALUES (?, ?)', [cowInfo.name, cowInfo.description], done)
    },
    update: (id, newInfo, done) => {
      db.query('UPDATE cows SET name = ?, description = ? WHERE id = ?', [newInfo.name, newInfo.description, id], done)
    },
    delete: (id, done) => {
      db.query('DELETE FROM cows WHERE id = ?', [id], done)
    }
    }
}