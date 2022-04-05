const createError = require('http-errors');
const debug = require('debug')('app:module-products-controller');

const { ProductsService } = require('./services');
const { Response } = require('../common/response');

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    try {
      let products = await ProductsService.getAll()
      Response.success(res, 200, "List of products", products)
    }
    catch (error) {
      debug(error)
      Response.error(res)
    }
  },

  getProduct: async (req, res) => {
    try {
      const { params: { id } } = req
      let product = await ProductsService.getById(id)
      
      if(!product) {
        Response.error(res, new createError.NotFound())
      } else {
        Response.success(res, 200, `Product ${id}`, product)
      }
    }
    catch (error) {
      debug(error)
      Response.error(res)
    }
  },

  createProduct: async (req, res) => {
    try {
      const { body } = req

      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest())
      }

      const insertedId = await ProductsService.create(body)
      Response.success(res, 201, 'Product created successfully', insertedId)
    }
    catch (error) {
      debug(error)
      Response.error(res)
    }
  },

  getReport: (req, res) => {
    try {
      ProductsService.generateReport('Inventory', res)
    } catch (error) {
      debug(error)
      Response.error(res)
    }
  }
}