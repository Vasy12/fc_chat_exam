const {BadRequestError, NotFoundError} = require('../utils/errors');
const {Chat} = require('../models');

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

module.exports.getChats = async (req, res, next) => {
  try {

    const chats = await Chat.find({}).populate({
                                                 path: 'messages',
                                                 populate: {
                                                   path: 'author',
                                                 },
                                                 sort: {'createdAt': 'asc'},
                                                 limit: 1,
                                               }).populate('owner',
                                                           {password: 0});
    if (chats) {
      return res.send(chats);
    }
    next(new BadRequestError());
  } catch (e) {
    next(e);
  }
};

module.exports.getChat = async (req, res, next) => {
  try {

    const {params: {chatId}} = req;

    const chat = await Chat.findById(chatId).populate('users', {
      password: 0,
    }).populate('owner');
    if (chat) {
      return res.send(chat);
    }

    return next(new NotFoundError());

  } catch (e) {
    next(e);
  }
};



