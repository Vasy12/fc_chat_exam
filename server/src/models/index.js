const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = ( require('./../config/chatDB.json') )[env];

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.db}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.User = require('./User.js');
module.exports.Chat = require('./Chat.js');
