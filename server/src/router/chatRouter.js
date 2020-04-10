const chatRouter = require('express').Router();
const chatController = require('../controllers/chat.controller.js');
chatRouter.post('/chat/:chatId/join');

chatRouter.get('/', chatController.getChats);

chatRouter.get('/:chatId',chatController.getChat)

module.exports = chatRouter;