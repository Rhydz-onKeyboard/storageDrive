const { Router } = require('express');
const storageController = require('../controller/storage');

const router = Router();

router
  .route('/')
  .get(storageController.findAllCVs)
  .post(storageController.uploadCV)

router
  .route('/:id')
  .delete(storageController.deleteCV)
module.exports = router;
