const express = require('express');

const { ProductsController } = require('./controller');

const router = express.Router()

module.exports.ProductsAPI = (app) => {
  router
    .get('/', ProductsController.getProducts)
    .get("/report", ProductsController.getReport)
    .get('/:id', ProductsController.getProduct)
    .post('/', ProductsController.createProduct)
  
  //TODO UPDATE
  //TODO DELETE

  app.use('/api/products', router)
}