const { UnauthorizedError } = require('../utils/errors');
const AuthService = require('../services/auth.service.js');
module.exports = async (req, res, next) => {
  try {
    const authorization = req.get('Authorization');

    if (authorization) {
      const token = authorization.split(' ')[ 1 ];
      if (token) {
        req.authorizationData = AuthService.verifyJWT(token);
        next();
      }
    }
    next(new UnauthorizedError());
  } catch (e) {
    next(e);
  }
};