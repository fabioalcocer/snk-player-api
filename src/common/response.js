const createError = require('http-errors');

module.exports.Response = {
  success: (res, status = 200, message = 'OK', body = {}) => {
    res.status(status).json({message, body})
  },
  error: (res, error = null) => {
    const { statusCode, message } = error ?? new createError.InternalServerError()
    res.status(statusCode).json({message})
  }
}