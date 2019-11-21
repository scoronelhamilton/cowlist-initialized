let controllers = require('./controllers');
let router = require('express').Router();

router.get('/cows/', controllers.cows.get);
router.post('/cows', controllers.cows.post);
router.put('/cows', controllers.cows.put);
router.delete('/cows/:id', controllers.cows.delete);

module.exports = router;