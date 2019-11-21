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
    delete: (req, res) => {
      let id = req.body.id
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