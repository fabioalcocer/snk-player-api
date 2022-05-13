const createError = require('http-errors');

module.exports.Response = {
  success: (res, status = 200, title = 'OK', data = {}) => {
    res.status(status).json({ title, data })
  },
  error: (res, error = null) => {
    const { statusCode, title } = error ?? new createError.InternalServerError()
    res.status(statusCode).json({ title })
  }
}