const createError = require('http-errors');
const debug = require('debug')('app:module-users-controller');

const { TitansService } = require('./services');
const { Response } = require('../common/response');

module.exports.TitansController = {
  getTitans: async (req, res) => {
    try {
      let titans = await TitansService.getAll()
      Response.success(res, 200, "Titans", titans)
    }
    catch (error) {
      debug(error)
      Response.error(res)
    }
  },

  getTitan: async (req, res) => {
    try {
      const { params: { id } } = req
      let titan = await TitansService.getById(id)

      if (!titan) {
        Response.error(res, new createError.NotFound())
      } else {
        Response.success(res, 200, `User ${id}`, titan)
      }
    }
    catch (error) {
      debug(error)
      Response.error(res)
    }
  },

  createTitan: async (req, res) => {
    try {
      const { data } = req

      if (!data || Object.keys(data).length === 0) {
        Response.error(res, new createError.BadRequest())
      }

      const insertedId = await TitansService.create(data)
      Response.success(res, 201, 'Titan created successfully', insertedId)
    }
    catch (error) {
      debug(error)
      Response.error(res)
    }
  },
}