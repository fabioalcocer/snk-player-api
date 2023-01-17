const express = require('express');

const { CharactersController } = require('./controller');

const router = express.Router()

module.exports.CharactersAPI = (app) => {
  router
    .get('/', CharactersController.getCharacters)
    .get('/:id', CharactersController.getCharacter)
    .post('/', CharactersController.createCharacter)
    .delete('/:id', CharactersController.deleteTitan)


  //TODO UPDATE

  app.use('/api/characters', router)
}