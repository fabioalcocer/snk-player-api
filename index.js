const express = require('express');
const debug = require('debug')('app:main');

const { Config } = require('./src/config/index');
const { CharactersAPI } = require('./src/characters/index');
const { TitansAPI } = require('./src/titans/index');
const { IndexAPI, NotFoundAPI } = require('./src/index/index');

const app = express();

app.use(express.json())

//!Modulos
IndexAPI(app)
CharactersAPI(app)
TitansAPI(app)
NotFoundAPI(app)

app.listen(Config.port, () => {
  debug(`Server listening in the port ${Config.port}`);
})