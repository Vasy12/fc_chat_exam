const {BadRequestError} = require('../utils/errors');
const {User} = require('./../models');
const UserService = require('./../services/user.service.js');
const AuthService = require('./../services/auth.service.js');
const {UnauthorizedError} = require('../utils/errors');
const {ForbiddenError} = require('../utils/errors');

module.exports.signUpUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    if (user) {
      const preparedUser = UserService.prepareUser(user);
      const accessToken = await AuthService.signJWT({
                                                      userId: preparedUser._id,
                                                      login: preparedUser.login,
                                                    });
      return res.send({
                        ...preparedUser,
                        token: accessToken,
                      });
    }
  } catch (e) {
    next(e);
  }
  next(new BadRequestError());
};

module.exports.loginUser = async (req, res, next) => {
  const {login, password} = req.body;
  const user = await User.findOne({
                                    login,
                                  });
  if (user && await user.comparePassword(password)) {

    const preparedUser = UserService.prepareUser(user);
    const accessToken = await AuthService.signJWT({
                                                    userId: preparedUser._id,
                                                    login: preparedUser.login,
                                                  });
    return res.send({
                      ...preparedUser,
                      token: accessToken,
                    });
  }
  next(new ForbiddenError('Login or password incorrect'));
};

module.exports.refreshAuth = async (req, res, next) => {
  try {
    const {authorizationData: {userId}} = req;
    const user = await User.findById(userId);
    if (user) {
      const preparedUser = UserService.prepareUser(user);
      const accessToken = await AuthService.signJWT({
                                                      userId: preparedUser._id,
                                                      login: preparedUser.login,
                                                    });
      return res.send({
                        ...preparedUser,
                        token: accessToken,
                      });
    }
    next(new UnauthorizedError());
  } catch (e) {
    next(e);
  }
};

module.exports.getUsers = async (req, res, next) => {

};
