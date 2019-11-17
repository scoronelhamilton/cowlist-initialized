let controllers = require('./controllers');
let router = require('express').Router();

router.get('/cows', controllers.cows.get);
router.post('/cows', controllers.cows.post);
// router.put();
// router.delete();

module.exports = router;