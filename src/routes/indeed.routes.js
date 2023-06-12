const { Router } = require('express');
const indeedController = require('../controller/indeed');

const router = Router();

router
  .route('/')
  .get(indeedController.getXml)
  .post(storageController.uploadCV)

module.exports = router;
