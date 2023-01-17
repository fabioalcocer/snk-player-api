const express = require('express');

const { TitansController } = require('./controller');

const router = express.Router()

module.exports.TitansAPI = (app) => {
  router
    .get('/', TitansController.getTitans)
    .get('/:id', TitansController.getTitan)
    .post('/', TitansController.createTitan)
    .delete('/:id', TitansController.deleteTitan)

  //TODO UPDATE
  //TODO DELETE

  app.use('/api/titans', router)
}