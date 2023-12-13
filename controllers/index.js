const router = require('express').Router();
const api = require('./api');
const home = require('./home.js');
const dashboard = require('./dashboard.js');


router.use('/api', api);
router.use('/dashboard', dashboard);
router.use('/', home);


router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;