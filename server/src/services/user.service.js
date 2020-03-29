const { User } = require('../models');

module.exports.prepareUser = user => {
  if (user instanceof User) {
    const preparedUser = user.toObject();
    delete preparedUser.password;
    return preparedUser;
  }
  delete user.password;
  return user;
};



