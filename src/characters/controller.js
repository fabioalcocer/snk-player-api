const createError = require('http-errors');
const debug = require('debug')('app:module-characters-controller');

const { CharactersService } = require('./services');
const { Response } = require('../common/response');

module.exports.CharactersController = {
  getCharacters: async (req, res) => {
    try {
      let characters = await CharactersService.getAll()
      Response.success(res, 200, "Characters", characters)
    }
    catch (error) {
      debug(error)
      Response.error(res)
    }
  },

  getCharacter: async (req, res) => {
    try {
      const { params: { id } } = req
      let character = await CharactersService.getById(id)

      if (!character) {
        Response.error(res, new createError.NotFound())
      } else {
        Response.success(res, 200, `Character ${id}`, character)
      }
    }
    catch (error) {
      debug(error)
      Response.error(res)
    }
  },

  createCharacter: async (req, res) => {
    try {
      const { body } = req

      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest())
      }

      const insertedId = await CharactersService.create(body)
      Response.success(res, 201, 'Character created successfully', insertedId)
    }
    catch (error) {
      debug(error)
      Response.error(res)
    }
  }
}