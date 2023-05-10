const { Router } = require('express');

const storageRoutes = require('./storage.routes');

const router = Router();
router.use('/storage', storageRoutes);

module.exports = router