const { UserError } = require('../utils/errors');
module.exports = (err, req, res, next) => {

  if (err instanceof UserError) {
    if (err.status === 401) {
      res.set('WWW-Authenticate', 'Basic realm="App"');
    }
    return res.status(err.status).send(err.message);
  }
  next(err);
};