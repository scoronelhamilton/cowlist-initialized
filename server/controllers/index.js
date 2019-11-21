let models = require('../models');

module.exports = {
  cows: {
    get: (req, res) => {
      models.cows.readAll((error, results) => {
        if ( error ) {
          console.log(error);
          res.sendStatus(404);
        } else {
          res.json(results);
        }
      });
    },
    post: (req, res) => {
      let cowInfo = req.body;
      models.cows.save(cowInfo, (error) => {
        if ( error ) {
          console.log(error);
          res.sendStatus(500);
        } else {
          res.status(201).send(req.body)
        }
      });
    },
    put: (req, res) => {
      let id = req.params.id
      let data = req.body
      models.cows.update(id, data, (error) => {
        if (error) {
          console.log(error);
          res.sendStatus(404);
        } else {
          res.json(data);
        }
      })
    },
    delete: (req, res) => {
      let id = req.params.id
      models.cows.delete(id, (error) => {
        if (error) {
          console.log(error);
          res.sendStatus(404);
        } else {
          res.sendStatus(200)
        }
      })
    }
  }
}