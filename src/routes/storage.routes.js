const { Router } = require('express');
const storageController = require('../controller/storage');

const router = Router();

router
  .route('/')
  .get(storageController.findAllCVs)
  .post(storageController.uploadCV)
// .delete(storageController.deleteAllCV)

router
  .route('/indeed')
  .post(storageController.uploadCVFromIndeed)

router
  .route('/:id')
  .delete(storageController.deleteCV)
module.exports = router;
