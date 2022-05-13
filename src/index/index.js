const express = require('express');
const createError = require('http-errors')

const { Response } = require('../common/response');

module.exports.IndexAPI = (app) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    const menu = {
      characters: `https://${req.headers.host}/api/characters`,
      titans: `https://${req.headers.host}/api/titans`
    }

    Response.success(res, 200, "Attack on Titan API", menu)
  })

  app.use("/", router)
}

module.exports.NotFoundAPI = (app) => {
  const router = express.Router();

  router.all("*", (req, res) => {
    Response.error(res, new createError.NotFound())
  })

  app.use("/", router)
}