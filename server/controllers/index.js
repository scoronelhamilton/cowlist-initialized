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
      models.cows.save(cowInfo, (error, results) => {
        if ( error ) {
          console.log(error);
          res.sendStatus(500);
        } else {
          res.status(201).send(req.body)
        }
      });
    }
  }
}