const yup = require('yup');
const { LOGIN_PATTERN } = require('../../constants');

module.exports.loginCredentialsSchema = yup.object({
  login: yup.string().required().trim().match(LOGIN_PATTERN,
    { message: 'invalid login value' }),
  password: yup.string().required().trim().min(4).max(16),
});

module.exports.signUpSchema = yup.object({
  login: yup.string().required().trim().match(LOGIN_PATTERN,
    { message: 'invalid login value' }),
  password: yup.string().required().trim().min(4).max(16),
  profilePicture: yup.string(),
});