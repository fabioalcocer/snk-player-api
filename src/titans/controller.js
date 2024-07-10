const createError = require('http-errors')
const debug = require('debug')('app:module-titans-controller')

const { TitansService } = require('./services')
const { Response } = require('../common/response')

module.exports.TitansController = {
  getTitans: async (req, res) => {
    try {
      let titans = await TitansService.getAll()
      Response.success(res, 200, 'Titans', titans)
    } catch (error) {
      debug(error)
      Response.error(res)
    }
  },

  getTitan: async (req, res) => {
    try {
      const {
        params: { id },
      } = req
      let titan = await TitansService.getById(id)

      if (!titan) {
        Response.error(res, new createError.NotFound())
      } else {
        Response.success(res, 200, `Titan ${id}`, titan)
      }
    } catch (error) {
      debug(error)
      Response.error(res)
    }
  },

  createTitan: async (req, res) => {
    try {
      const { body } = req

      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest())
      }

      const insertedId = await TitansService.create(body)
      Response.success(res, 201, 'Titan created successfully', insertedId)
    } catch (error) {
      debug(error)
      Response.error(res)
    }
  },

  deleteTitan: async (req, res) => {
    try {
      const {
        params: { id },
      } = req
      let titan = await TitansService.deleteById(id)

      if (!titan) {
        Response.error(res, new createError.NotFound())
      } else {
        Response.success(res, 200, `Titan Delete ${id}`, titan)
      }
    } catch (error) {
      debug(error)
      Response.error(res)
    }
  },

  updateTitan: async (req, res) => {
    try {
      const {
        params: { id },
        body,
      } = req
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest())
      }

      const updatedId = await TitansService.updateById(id, body)
      Response.success(res, 201, 'Titan updated successfully', updatedId)
    } catch (error) {
      debug(error)
      Response.error(res)
    }
  },
}
