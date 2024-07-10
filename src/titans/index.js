const express = require('express');

const { TitansController } = require('./controller');

const router = express.Router()

module.exports.TitansAPI = (app) => {
  router
    .get('/', TitansController.getTitans)
    .get('/:id', TitansController.getTitan)
    .post('/', TitansController.createTitan)
    .delete('/:id', TitansController.deleteTitan)
    .put('/:id', TitansController.updateTitan)

  app.use('/api/titans', router)
}