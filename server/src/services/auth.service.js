const util = require('util');
const jwt = require('jsonwebtoken');

/*
 * jwt-promisify
 * */
const signAsync = util.promisify(jwt.sign);
const verifyAsync = util.promisify(jwt.verify);
const decodeAsync = util.promisify(jwt.decode);

const TOKEN_SECRET = process.env.TOKEN_SECRET;

module.exports.encodeBasicToken = credential => Buffer.from(
  JSON.stringify(credential)).toString('base64');

module.exports.decodeBasicToken = basicToken => Buffer.from(basicToken,
  'base64').toString();

/**
 *
 * @param payload
 * @param {string} expiresIn
 * @returns {Promise<string>}
 */
module.exports.signJWT = (payload, expiresIn = '1h') => signAsync(payload,
  TOKEN_SECRET, {
    expiresIn,
  });

/**
 *
 * @param {string} token
 * @returns {Promise<object>}
 */
module.exports.verifyJWT = token => verifyAsync(token, TOKEN_SECRET);

/**
 *
 * @param {string} token
 * @returns {Promise<object>}
 */
module.exports.decodeJWT = token => decodeAsync(token, TOKEN_SECRET);
