const { NotFoundError } = require('../utils/errors');
const { Chat } = require('../models');

module.exports.joinToChat = async (req, res, next) => {
  try {

    const chat = await Chat.findById(req.params.chatId);
    if (chat) {
      chat.users.push(req.authorizationPayload.userId);
      await chat.save();
    }
    next(new NotFoundError('Chat not found.'));

  } catch (e) {
    next(e);
  }
};



