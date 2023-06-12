const { Router } = require('express');

const indeedRoutes = require('./indeed.routes');

const router = Router();
router.use('/indeed', indeedRoutes);

module.exports = router